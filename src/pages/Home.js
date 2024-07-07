import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/slices/userSlice';
import './Home.css';

const Home = () => {
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: '',
        email: '',
        contact: '',
        address: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };
    const handleAdd = (e) => {
        e.preventDefault();
        dispatch(addUser(user));
        setUser({
            name: '',
            email: '',
            contact: '',
            address: '',
        });
    };
    return (
        <div className='home'>
            <h1>Enter User Info</h1>
            <form className='home-container'>
                <input
                    placeholder='Name'
                    value={user.name}
                    name='name'
                    onChange={handleChange}
                />
                <br />
                <br />
                <input
                    placeholder='Email'
                    value={user.email}
                    name='email'
                    onChange={handleChange}
                />
                <br />
                <br />
                <input
                    placeholder='Mobile no'
                    type='number'
                    value={user.contact}
                    name='contact'
                    onChange={handleChange}
                />
                <br />
                <br />
                <textarea
                    placeholder='Address'
                    value={user.address}
                    name='address'
                    onChange={handleChange}
                />
                <br />
                <br />
                <button onClick={handleAdd}>Submit</button>
            </form>
        </div>
    );
};

export default Home;
