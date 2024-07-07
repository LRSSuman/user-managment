import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../store/slices/userSlice';

const User = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => {
        return state.user.user;
    });
    console.log(users);
    return (
        <div>
            {users.map((user, i) => {
                return (
                    <div key={i}>
                        <h1>{user.name}</h1>
                        <p>{user.email}</p>
                        <p>{user.contact}</p>
                        <p>{user.address}</p>
                        <button onClick={() => dispatch(deleteUser(i))}>
                            Delete
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default User;
