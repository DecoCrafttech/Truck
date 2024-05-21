import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PortfolioDetails from './section-components/portfolio-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const truck_availability = () => {
    return <div>
        <Navbar />
        {/* <PageHeader headertitle="Portfolio Details" /> */}
        <PortfolioDetails />
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default truck_availability

