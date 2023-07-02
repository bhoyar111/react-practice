import React, { useState } from 'react'
import HeaderComp from '../Header/HeaderComp';
import { Col, Row, Form } from 'react-bootstrap';

export default function Admin() {

    const [userValues, setUserValues] = useState({
        full_name: '',
        address: '',
        email_id: '',
        mobile_no: ''
    });

    const [records, setRecords] = useState([]);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserValues({
           ...userValues, 
           [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newRecords = { ...userValues, id: new Date().getTime().toString() }
        setRecords([...records, newRecords]);
        setUserValues({
            full_name: '',
            address: '',
            email_id: '',
            mobile_no: ''
        })
    }


    return (
        <>
            <HeaderComp />
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='container-fluit m-5'>
                            <Form>
                                <Row>
                                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={6}>
                                        <label htmlFor="exampleFormControlInput1" className="form-label">Full Name</label>
                                        <input 
                                            id="full_name" 
                                            className="form-control" 
                                            type="text" 
                                            name='full_name'
                                            value={userValues.full_name}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={6}>
                                        <label htmlFor="exampleFormControlInput2" className="form-label">Email address</label>
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="email_id" 
                                            name='email_id'
                                            value={userValues.email_id}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={6}>
                                        <label htmlFor="exampleFormControlInput3" className="form-label">Mobile No.</label>
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            id="mobile_no" 
                                            placeholder="Phone"
                                            name='mobile_no' 
                                            value={userValues.mobile_no}
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} xs={12} md={6} lg={4} xl={6}>
                                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Address</label>
                                        <textarea
                                            type='textarea' 
                                            className="form-control" 
                                            id="address" 
                                            name='address'
                                            value={userValues.address} 
                                            onChange={handleChange}
                                        />
                                    </Form.Group>
                                </Row>
                            </Form>
                            <Col xs={12} className="mt-3">
                                <button onClick={handleSubmit} variant="contained" color="primary" className="black-btn-mui py-2 px-4 mb-4">Submit</button>
                            </Col>
                        </div>
                        <div>
                            <table className="table bg-white white-table library-table mb-0">
                                <thead>
                                    <tr>
                                        <th>Full Name</th>
                                        <th>Address</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        records.map((record, ind) => {
                                            return (
                                                <tr key={ind}>
                                                    <td>{record.full_name}</td>
                                                    <td>{record.address}</td>
                                                    <td>{record.email_id}</td>
                                                    <td>{record.mobile_no}</td>
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
