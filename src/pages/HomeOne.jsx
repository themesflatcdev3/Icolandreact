import React from 'react';
import '../scss/components/section.scss';
import '../scss/components/form.scss';
import Footer from '../components/footer/footer-v2';
import Banner from '../components/banner/banner-v1';
function HomeOne(props) {

    return (
        <div className='home-main'>
            {<Banner />}
            {<Footer />}
        </div>
    );
}

export default HomeOne;