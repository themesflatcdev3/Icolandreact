import React from 'react';
import '../scss/components/_icon-box.scss';
import '../scss/components/_popup.scss';
import '../scss/components/section.scss';
import '../scss/components/_progress.scss';
import '../scss/components/form.scss';
import Header from '../components/header/header-v7';
import Banner from '../components/banner/banner-v8';
import About from '../components/about/home-defi4';
import dataAbout from '../assets/fake-data/data-about';
import Feature from '../components/features/features-v7';
import dataFeature from '../assets/fake-data/data-feature4';
import Roadmap from '../components/roadmap/roadmap-v8';
import dataRoadmap from '../assets/fake-data/data-roadmap3';
import TokenDetails from '../components/token-details/token-details-v3';
import dataTokenDetails from '../assets/fake-data/data-tokendeials';
import Token from '../components/token-details/token-v4';
import Team from '../components/team/team-v8';
import dataTeam from '../assets/fake-data/data-team3';
import Blog from '../components/blog/blog-v5';
import dataBlog from '../assets/fake-data/data-blog5';
import Parner from '../components/partner/parter-v4';
import dataParner from '../assets/fake-data/data-partner';
import Faq from '../components/faq/faq-v7';
import dataaccordion from '../assets/fake-data/data-faq2';
import Footer from '../components/footer/footer-v5';
function HomeDefi2(props) {

    return (
        <div className='home-defi-4'>
            {<Header />}
            {<Banner />}
            {<About data={dataAbout}/>}
            {<Feature data={dataFeature}/>}
            {<Roadmap data={dataRoadmap}/>}
            {<TokenDetails data={dataTokenDetails}/>}
            {<Token />}
            {<Team data={dataTeam}/>}
            {<Blog data={dataBlog}/>}
            {<Parner data={dataParner}/>}
            {<Faq data={dataaccordion}/>}
            {<Footer/>}
        </div>
    );
}

export default HomeDefi2;
