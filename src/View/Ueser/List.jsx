import React, { useEffect, useState } from 'react';
import Axios from 'axios';

export default function List() {

    const [users, setUsers] = useState([]);

    const getListing = async () => {
        const listResponse = await Axios.get("http://localhost:4000/users")
        setUsers(listResponse.data)
    }
    useEffect(() => {
        getListing();
    }, []);


    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='table-responsive listing-user'>
                        <p className="title-users mb-2">Listing User</p>
                        <table className="table bg-white white-table library-table mb-0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Address</th>
                                    <th>Mobile</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    users.map((user, ind) => {
                                        return (
                                            <tr key={ind}>
                                                <td>{user.name}</td>
                                                <td>{user.address}</td>
                                                <td>{user.mobile}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>  
                </div>
            </div>
        </>
    )
}
