import React from "react";
// import {Link} from 'react-router-dom'

export default function Navbar(props) {

    return (
        <nav className={` container navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} id="nav">
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse mx-5" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#"></a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="">About</a>
                        </li> */}
                    </ul>
                </div>
                <div className={`form-check form-switch text-${props.mode === 'light' ? "dark" : "light"}`}>
                    <input className="form-check-input mx-2 outline-primary" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                    <label className="form-check-label" for="">Dark Mode</label>
                </div>
            </div>
        </nav>
    );
}

