
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; // Import withRouter for redirection
import { toast } from 'react-hot-toast'; // Import toast from react-hot-toast

class AddListing extends Component {
    handleSubmit = (event) => {
        event.preventDefault();
        // Perform form submission logic here
        // For demonstration, I'm just showing a success toast
        toast.success('Form submitted successfully!');
        // Redirect to home page after form submission
        this.props.history.push('/');
    }

    render() {
        return (
            <div className="ltn__appointment-area pb-5 pb-md-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 my-5">
                            <div className="ltn__appointment-inner">
                                <form onSubmit={this.handleSubmit}>
                                <div className="row">
                                        <div className="col-md-6">
                                            <h5>Company Name</h5>
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" name="company_name" placeholder="Company Name" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Name of the dealer</h5>
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" name="dealer_name" placeholder="Name of the dealer" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h5>Contact Number</h5>
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" name="contact_number" placeholder="Type your contact number" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5>From</h5>
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" name="from_location" placeholder="Location" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h5>To</h5>
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" name="to_location" placeholder="Location" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5>Material</h5>
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" name="material_type" placeholder="What type of material" />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h5>Tone</h5>
                                            <div className="input-item input-item-name ltn__custom-icon">
                                                <input type="text" name="tone_type" placeholder="Example: 2 tones" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h5>Truck Body Type</h5>
                                            <div className="input-item">
                                                <select className="nice-select" name="truck_body_type">
                                                    <option value="open_body">Open Body</option>
                                                    <option value="container">Container</option>
                                                    <option value="trailer">Trailer</option>
                                                    <option value="tanker">Tanker</option>
                                                </select>
                                            </div>
                                        </div>                                   
                                        <div className="col-md-6">
                                            <h5>No. of Tyres</h5>
                                            <div className="input-item">
                                                <select className="nice-select" name="tyre_count">
                                                    <option value="6">6</option>
                                                    <option value="10">10</option>
                                                    <option value="12">12</option>
                                                    <option value="14">14</option>
                                                    <option value="16">16</option>
                                                    <option value="18">18</option>
                                                    <option value="20">20</option>
                                                    <option value="22">22</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <h5>Descriptions (Optional)</h5>
                                            <div className="input-item input-item-textarea ltn__custom-icon">
                                                <textarea name="description" placeholder="Enter a text here" defaultValue={""} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-wrapper text-center mt-4">
                                        <button className="btn theme-btn-1  text-uppercase" type="submit">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// Use withRouter to access history object for redirection
export default withRouter(AddListing);
