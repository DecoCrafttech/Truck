import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FaWeightHanging } from "react-icons/fa6";
import { SiMaterialformkdocs } from "react-icons/si";
import { GiCarWheel } from "react-icons/gi";
import { FaTruck } from "react-icons/fa6";


class PortfolioV1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            redirectToLogin: false
        };
    }

    handleViewDetails = () => {
        // Check if the user is logged in
        if (this.state.isLoggedIn) {
            // User is logged in, no need to redirect
            // Perform any action needed for view details
            console.log("View details clicked");
        } else {
            // User is not logged in, redirect to login page
            this.setState({ redirectToLogin: true });
        }
    };

    render() {
        // Dummy data for blog items
        const Loadavailablitys = [
            // Your data here...
            {
                id: 1,
                title: "Applied",
                locations: ["Chennai,Tamilnadu", "Location 2"],
                author: "Author 1",
                tags: "Tag 1",
                description: "React Icons is a package that allows you to import and use popular icons from various icon sets in your React projects. Learn how to install, configure, and customize the icons with …"
            },
            {
                id: 2,
                title: "Blog Title 2",
                locations: ["Location 3", "Location 4"],
                author: "Author 2",
                tags: "Tag 2",
                description: "Descri  awekfgiqwgifa gqiuwgfuiq  gwufiuqgfi udcption 2"
            },
            {
                id: 3,
                title: "Blog Title 3",
                locations: ["Location 5", "Location 6"],
                author: "Author 3",
                tags: "Tag 3",
                description: "marshal max  xavaava bsbdjhbqashcb  hsdbawekfgiqwgi fagqiuwgfuiqgwufiuqg fiudccb adc hsbjad cj hdshazbcjhab"
            },
            {
                id: 4,
                title: "Blog Title 3",
                locations: ["Location 5", "Location 6"],
                author: "Author 3",
                tags: "Tag 3",
                description: "marshal max  xavaava bsbdjhbqashcb  hsdbcb awekfgi qwgifagqi uwgfuiqgw ufiuqgfiudc hsbjad cj hdshazbcjhab"
            }
        ];

        if (this.state.redirectToLogin) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="container">
                <div className="row gx-4">
                    {Loadavailablitys.map(Loadavailablity => (
                        <div key={Loadavailablity.id} className="col-lg-4 mb-4">
                            <div className="ltn__blog-item ltn__blog-item-3 pt-5 flex-fill   h-100">
                                <div className="ltn__blog-brief ">
                                    <div className="ltn__blog-meta">
                                        <h3 className="ltn__blog-title mb-3">{Loadavailablity.title}</h3>
                                        {Loadavailablity.locations.map((location, index) => (
                                            <div key={index}>
                                                <span className="from-to-icons mt-3">
                                                    <i className="fas fa-map-marker-alt fa-xs from-icon" /> {location}
                                                </span>
                                            </div>
                                        ))}
                                        <div className="mt-3">
                                            <div className="row mx-auto">
                                                <ul>
                                                    <li className="ltn__blog-author">
                                                        <SiMaterialformkdocs /> {Loadavailablity.author}
                                                    </li>
                                                    <li className="ltn__blog-tags ms-4">
                                                        <FaWeightHanging /> {Loadavailablity.tags}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="mt-3">
                                            <div className="row mx-auto">
                                                <ul>
                                                    <li className="ltn__blog-author">
                                                        <GiCarWheel /> {Loadavailablity.author}
                                                    </li>
                                                    <li className="ltn__blog-tags ms-4">
                                                        <FaTruck /> {Loadavailablity.tags}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="card-text mb-3  " >
                                        <p className="para m-0"><strong>Description</strong></p>
                                        <div class=" mt-3">
                                            <div class=" ">
                                                {Loadavailablity.description.slice(0, 200)}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card-footer">
                                    <div className="    ">
                                        {this.state.isLoggedIn ? (
                                            <div className="d-flex align-items-center justify-content-between">
                                                <Link to="/contact" className="theme-btn-1 btn btn-effect-1 flex-fill me-2">Call</Link>
                                                <Link to="/contact" className="theme-btn-1 btn btn-effect-1 flex-fill ms-2">Message</Link>
                                            </div>
                                        ) : (
                                            <div className="d-flex align-items-center justify-content-center">
                                                <button onClick={this.handleViewDetails} className="theme-btn-1 btn btn-effect-1">View Details</button>
                                            </div>
                                        )}
                                    </div>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



        );
    }
}

export default PortfolioV1;
