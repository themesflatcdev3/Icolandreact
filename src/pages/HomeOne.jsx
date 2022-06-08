import React from 'react';
import '../scss/components/_icon-box.scss';
import '../scss/components/section.scss';
import '../scss/components/form.scss';
import Footer from '../components/footer/footer-v2';
import Banner from '../components/banner/banner-v1';
import About from '../components/about/home-v1';
import dataAbout from '../assets/fake-data/data-about';
function HomeOne(props) {

    return (
        <div className='home-main'>
            {<Banner />}
            {<About data={dataAbout} />}
            {<Footer />}
        </div>
    );
}

export default HomeOne;