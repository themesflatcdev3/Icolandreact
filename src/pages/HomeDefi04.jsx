import React from 'react';
import '../scss/components/_icon-box.scss';
import '../scss/components/_popup.scss';
import '../scss/components/section.scss';
import '../scss/components/_progress.scss';
import '../scss/components/form.scss';
import Header from '../components/header/header-v7';
import Banner from '../components/banner/banner-v8';

import About from '../components/about/home-defi3';
import dataAbout from '../assets/fake-data/data-about4';
import Team from '../components/team/team-v7';
import dataTeam from '../assets/fake-data/data-team4';
import Roadmap from '../components/roadmap/roadmap-v7';
import dataRoadmap from '../assets/fake-data/data-roadmap5';
import Token from '../components/token-details/token-v3';
import Feature from '../components/features/features-v6';
import dataFeature from '../assets/fake-data/data-feature3';
import Parner from '../components/partner/parter-v3';
import dataParner from '../assets/fake-data/data-partner';
import Blog from '../components/blog/blog-v4';
import dataBlog from '../assets/fake-data/data-blog4';
import Faq from '../components/faq/faq-v6';
import dataaccordion from '../assets/fake-data/data-faq3';
import Footer from '../components/footer/footer-v7';
function HomeDefi2(props) {

    return (
        <div className='home-defi-4'>
            {<Header />}
            {<Banner />}
            {<About data={dataAbout}/>}
            {<Team data={dataTeam}/>}
            {<Roadmap data={dataRoadmap}/>}
            {<Token />}
            {<Feature data={dataFeature}/>}
            {<Parner data={dataParner}/>}
            {<Blog data={dataBlog}/>}
            {<Faq data={dataaccordion}/>}
            {<Footer/>}
        </div>
    );
}

export default HomeDefi2;
