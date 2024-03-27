import { useLoaderData } from "react-router-dom";


const Users = () => {

    const handleDelete = _id =>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=> {
            console.log(data);
            if(data.deletedCount>0){
                alert('Deleted');
            }
        })
    }

    const users = useLoaderData()
    return (
        <div>
            <h1>Number of users:{users.length}</h1>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name}:{user.email} 
                    <button 
                    onClick={() => handleDelete(user._id)}
                    >Delete</button>
                     </p>)
                }
            </div>
        </div>
    );
};

export default Users;