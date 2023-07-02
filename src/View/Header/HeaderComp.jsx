import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import Logo from '../../assets/img/Atcovation-logo.png';

export default function HeaderComp() {
    return (
        <>
            <div className='bg-secondary'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12 header-menubar">
                            <ul className="header-menu">
                                <li><Link to="/"><img src={Logo} alt='logo' className="img-fluid" /></Link></li>
                                <li><Link className="active text-white" aria-current="page" to="/">Home</Link></li>
                                <li><Link className="text-white" to="/users">User</Link></li>
                                <li><Link className="text-white" to="/about">About Us</Link></li>
                            </ul>
                            <ul className="header-menu">
                                <li><Link className="text-white" to="/admin">Admin</Link></li>
                                <li><Link className="text-white" to="/">LogIn</Link></li>
                                <li><a className="text-white" href="/"><i className="bi bi-search"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
