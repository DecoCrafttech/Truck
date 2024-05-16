import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PortfolioV1 from './section-components/portfolio-v1';
import CallToActonV2 from './section-components/call-to-action-v2';
import BlogSlider from './blog-components/blog-slider-v1';
import Sponsor from './section-components/sponsor-v2';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { Link } from 'react-router-dom';

const Portfolio_V1 = () => {
    return <div>
        <Navbar />
        {/* <PageHeader headertitle="Our Portfolio" subheader="Portfolio" /> */}
        <div className="ltn__product-area ltn__product-gutter mb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="ltn__shop-options">
                            <ul>
                                <li>
                                    <div className="ltn__grid-list-tab-menu ">
                                        <div className="nav">
                                            <a className="active show" data-bs-toggle="tab" href="#liton_product_grid"><i className="fas fa-th-large" /></a>
                                            <a data-bs-toggle="tab" href="#liton_product_list"><i className="fas fa-list" /></a>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="short-by text-center">
                                        <select className="nice-select">
                                            <option>Default sorting</option>
                                            <option>Sort by popularity</option>
                                            <option>Sort by new arrivals</option>
                                            <option>Sort by price: low to high</option>
                                            <option>Sort by price: high to low</option>
                                        </select>
                                    </div>
                                </li>
                                <li>
                                    <div className="showing-product-number text-right">
                                        <span>Showing 9 of 20 results</span>
                                    </div>
                                </li>
                                {/* Add Truck */}
                                <div className="header-top-btn">
                                    <Link to="/add-listing">+ Add Truck</Link>
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-12">
                            {/* Search Widget */}
                            <div className="ltn__search-widget mb-30">
                                <form action="#">
                                    <input type="text" name="search" placeholder="Search your keyword..." />
                                    <button style={{ borderRadius: '10px', width: '60px' }} type="submit"><i className="fas fa-search" /></button>
                                </form>
                            </div>
                        </div>
                </div>
            </div>
        </div>
        <PortfolioV1 />
        {/* <CallToActonV2 /> */}
        {/* <BlogSlider sectionClass="pt-120" />
        <Sponsor />
        <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default Portfolio_V1

