import React, { useState } from 'react';
import FormDesign from './FormDesign';
import Axios from 'axios';

export default function Add() {

    const [addUsers, setAddUser] = useState({
        name:'',
        address:'',
        number:''
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setAddUser({
            ...addUsers,
            [name]:value
        })
    }

    const post = {
        name:'',
        address:'',
        number:''
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try{
            const saveResponse = await Axios.post('http://localhost:4000/user-add', post);
            console.log(saveResponse.data);
        } catch(e) {
            console.log(e);
        }
    }

     return (
        <>
            <div className='listing-user form-design'>
                <p className="title-users mb-2">Adding User</p>
                <FormDesign 
                    onSubmit={onSubmit}
                    handleChange={handleChange}
                    addUsers={addUsers}
                />
            </div>
        </>
    )
}
