import React from 'react';
import { Link } from 'react-router-dom';

export default function FooterComp() {
    return (
        <>
            <div className='footer-section'>
                <div className='container'>
                    <div className="row">
                        <div className="col-md-12 header-menubar">
                            <ul className="header-menu">
                                <li><Link className="text-white " to="/">footer@footer.com</Link></li>
                            </ul>
                            <ul className="p-2">
                                <li><Link className="text-white" to="/general-comp">General Data</Link></li>
                                <li><Link className="text-white" to="/student-data">APIs Data</Link></li>
                                <li><Link className="text-white" to="/hooks-comp">Hooks</Link></li>
                                <li><Link className="text-white" to="/props-comp">Props</Link></li>
                                <li><Link className="text-white" to="/about">About Us</Link></li>
                                <li><Link className="text-white" to="/about">About Us</Link></li>
                                <li><Link className="text-white" to="/about">About Us</Link></li>
                                <li><Link className="text-white" to="/about">About Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
