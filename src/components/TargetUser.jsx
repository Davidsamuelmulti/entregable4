import React from 'react';

const TargetUser = ({user, selectUser, deleteUser}) => {
    
    return (
        <div className='card'>
            <ul className='card-list'>
                {
                    user.map(user=>(
                        <li key={user.id} className="list">
                            <h2>Usuario</h2>
                            <h2>{user.first_name} {user.last_name}</h2>
                            <div><b>Email: </b>{user.email}</div>
                            <div><b>birthday: </b>{user.birthday}</div>
                            <button onClick={()=> selectUser(user)} className="btn-card"><i className="fa-regular fa-pen-to-square"></i></button>
                            <button onClick={()=> deleteUser(user.id)} className="btn-card"><i className="fa-solid fa-trash"></i></button>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default TargetUser;