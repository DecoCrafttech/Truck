import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

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
                description: "Description 1"
            },
            {
                id: 2,
                title: "Blog Title 2",
                locations: ["Location 3", "Location 4"],
                author: "Author 2",
                tags: "Tag 2",
                description: "Description 2"
            },
            {
                id: 3,
                title: "Blog Title 3",
                locations: ["Location 5", "Location 6"],
                author: "Author 3",
                tags: "Tag 3",
                description: "marshal max  xavaava bsbdjhbqashcb  hsdbcb adc hsbjad cj hdshazbcjhab"
            },
            {
                id: 4,
                title: "Blog Title 3",
                locations: ["Location 5", "Location 6"],
                author: "Author 3",
                tags: "Tag 3",
                description: "marshal max  xavaava bsbdjhbqashcb  hsdbcb awekfgiqwgifagqiuwgfuiqgwufiuqgfiudc hsbjad cj hdshazbcjhab"
            }
        ];

        if (this.state.redirectToLogin) {
            return <Redirect to="/login" />;
        }

        return (
            <div className="container">
                <div className="row">
                    {Loadavailablitys.map(Loadavailablity => (
                        <div key={Loadavailablity.id} className="col-lg-4 d-flex">
                            <div className="ltn__blog-item ltn__blog-item-3 pt-5 flex-fill">
                                <div className="ltn__blog-brief h-100">
                                    <div className="ltn__blog-meta">
                                        <h3 className="ltn__blog-title mb-2">{Loadavailablity.title}</h3>
                                        {Loadavailablity.locations.map((location, index) => (
                                            <div key={index}>
                                                <span className="from-to-icons mt-2">
                                                    <i className="fas fa-map-marker-alt fa-xs from-icon" /> {location}
                                                </span>
                                            </div>
                                        ))}
                                        <div className="mt-3">
                                            <div className="row mx-auto">
                                                <ul>
                                                    <li className="ltn__blog-author">
                                                        <i className="far fa-user" /> {Loadavailablity.author}
                                                    </li>
                                                    <li className="ltn__blog-tags ms-4">
                                                        <i className="fas fa-tags" /> {Loadavailablity.tags}
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ltn__blog-description">
                                        <p className="para m-0"><strong>Description</strong></p>
                                        <p className="para m-0">{Loadavailablity.description}</p>
                                    </div>
                                    <div className="mt-3 mb-3 ">
                                        <div className=" d-flex align-items-center justify-content-between">
                                            {this.state.isLoggedIn ? (
                                                <>
                                                    <Link to="/contact" className="theme-btn-1 btn btn-effect-1 flex-fill me-2">Call</Link>
                                                    <Link to="/contact" className="theme-btn-1 btn btn-effect-1 flex-fill ms-2">Message</Link>
                                                </>
                                            ) : (
                                                <button onClick={this.handleViewDetails} className="theme-btn-1 btn btn-effect-1 flex-fill">View Details</button>
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
