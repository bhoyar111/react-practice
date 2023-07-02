import React, { useState, useEffect } from 'react';
import HeaderComp from '../Header/HeaderComp';

export default function EmployeeAPIsData() {
    const[users, setUsers] = useState([]);

    const getUserData = () => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
        .then(res => {
            return res.json()
        })
        .then(data => {
            setUsers(data)
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getUserData()
    }, []) 

    return (
        <>
            <HeaderComp />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div>
                            <table className="table bg-white white-table library-table mb-0">
                                <thead>
                                    <tr>
                                    <th>SR. No</th>
                                    <th>User</th>
                                    <th>User Name</th>
                                    <th>City</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, ind) => {
                                        return <tr key={ind}>
                                            <td>{user.id}</td>
                                            <td>{user.name}</td>
                                            <td>{user.username}</td>
                                            <td>{user.address.city}</td>
                                        </tr>
                                    })}  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
