import React from 'react';
import '../scss/components/_icon-box.scss';
import '../scss/components/_popup.scss';
import '../scss/components/section.scss';
import '../scss/components/_progress.scss';
import '../scss/components/form.scss';
import Footer from '../components/footer/footer-v4';
import Header from '../components/header/header-v3';
import Banner from '../components/banner/banner-v4';
import dataBanner from '../assets/fake-data/databanner2';
import About from '../components/about/home-v4';
import Feature from '../components/features/features-v3';
import dataFeature from '../assets/fake-data/data-feature3';
import Token from '../components/token-details/token-v1';
import dataToken from '../assets/fake-data/datatoken';
import Roadmap from '../components/roadmap/roadmap-v4';
import dataRoadmap from '../assets/fake-data/data-roadmap4';
import Gallery from '../components/gallery/gallery-v1';
import dataGallery from '../assets/fake-data/data-gallery';
import Team from '../components/team/team-v4';
import dataTeam from '../assets/fake-data/data-team3';
import Blog from '../components/blog/blog-v1';
import dataBlog from '../assets/fake-data/data-blog';
import Community from '../components/community/Community-v1';
import Faq from '../components/faq/faq-v4';
import dataFaq from '../assets/fake-data/data-faq3';
function HomeOne(props) {

    return (
        <div className='home-music backgroup-body'>
            {<Header />}
            {<Banner data={dataBanner}/>}
            {<About />}
            {<Feature data={dataFeature}/>}
            {<Token data={dataToken}/>}
            {<Roadmap data={dataRoadmap}/>}
            {<Gallery data={dataGallery}/>}
            {<Team data={dataTeam}/>}
            {<Blog data={dataBlog}/>}
            {<Community/>}
            {<Faq data={dataFaq}/>}
            {<Footer/>}
        </div>
    );
}

export default HomeOne;