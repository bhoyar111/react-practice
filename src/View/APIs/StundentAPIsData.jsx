import React from 'react';
import HeaderComp from '../Header/HeaderComp';
import records from './ApiData';

export default function StundentAPIsData() {
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
                                        <th>SR No.</th> 
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Mobile</th>
                                        <th>Email</th>
                                        <th>Address</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        records.map((record, ind) => {
                                            return (
                                                <tr key={ind}>
                                                    <td>{record.id}</td>
                                                    <td>{record.first_name}</td>
                                                    <td>{record.last_name}</td>
                                                    <td>{record.mobile_no}</td>
                                                    <td>{record.email_id}</td>
                                                    <td>{record.address}</td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
