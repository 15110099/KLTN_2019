import React, { Component } from 'react'
import Body from './Body'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">Uptown</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="oi oi-menu"></span> Menu
	                </button>
                        <div className="collapse navbar-collapse" id="ftco-nav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
                                <li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
                                <li className="nav-item"><a href="agent.html" className="nav-link">Agent</a></li>
                                <li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
                                <li className="nav-item"><a href="properties.html" className="nav-link">Properties</a></li>
                                <li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
                                <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <Body />
            </div>
        )
    }
}
