import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        let publicUrl = process.env.PUBLIC_URL + '/';
        return (
            <div>
                <header className="ltn__header-area ltn__header-5 ltn__header-transparent--- gradient-color-4---">
                    <div className="ltn__header-top-area section-bg-6 top-area-color-white---">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-7">
                                    <div className="ltn__top-bar-menu">
                                        <ul>
                                            <li>
                                                <a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you">
                                                    <i className="icon-mail"  /> info@truckmessage.com
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-5">
                                    <div className="top-bar-right text-end">
                                        <div className="ltn__top-bar-menu">
                                            <ul>
                                                <li>
                                                    <div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
                                                        <ul>
                                                            <li>
                                                                <a href="#" className="dropdown-toggle">
                                                                    <span className="active-currency">English</span>
                                                                </a>
                                                                <ul>
                                                                    <li><Link to="#">Arabic</Link></li>
                                                                    <li><Link to="#">Bengali</Link></li>
                                                                    <li><Link to="#">Chinese</Link></li>
                                                                    <li><Link to="#">English</Link></li>
                                                                    <li><Link to="#">French</Link></li>
                                                                    <li><Link to="#">Hindi</Link></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-white">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <div className="site-logo-wrap">
                                        <div className="site-logo go-top">
                                            <Link to="/"><img src={publicUrl + "assets/img/logo.png"} alt="Logo" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col header-menu-column">
                                    <div className="header-menu d-none d-xl-block">
                                        <nav>
                                            <div className="ltn__main-menu go-top">
                                                <ul>
                                                    <li><Link to="/">Home</Link></li>
                                                    <li><Link to="/service">Services</Link></li>
                                                    <li><Link to="/about">About</Link></li>
                                                    <li><Link to="/blog">Blog</Link></li>
                                                    <li><Link to="/contact">Contact</Link></li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col ltn__header-options ltn__header-options-2 mb-sm-20">
                                    <div className="ltn__drop-menu user-menu">
                                        <ul>
                                            <li>
                                                <Link to="#"><i className="icon-user" /></Link>
                                                <ul className="go-top">
                                                    <li><Link to="/login">Sign in</Link></li>
                                                    <li><Link to="/register">Register</Link></li>
                                                    <li><Link to="/my-account">My Account</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="mobile-menu-toggle d-xl-none">
                                        <a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                                            <svg viewBox="0 0 800 600">
                                                <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
                                                <path d="M300,320 L540,320" id="middle" />
                                                <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
                    <div className="ltn__utilize-menu-inner ltn__scrollbar">
                        <div className="ltn__utilize-menu-head">
                            <div className="site-logo">
                                <Link to="/"><img src={publicUrl + "assets/img/logo.png"} alt="Logo" /></Link>
                            </div>
                            <button className="ltn__utilize-close">×</button>
                        </div>
                        <div className="ltn__utilize-menu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/service">Services</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                        <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
                            <ul>
                                <li>
                                    <Link to="/my-account" title="My Account">
                                        <span className="utilize-btn-icon">
                                            <i className="far fa-user" />
                                        </span>
                                        My Account
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Navbar;