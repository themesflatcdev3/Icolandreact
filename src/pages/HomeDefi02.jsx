import React from 'react';
import '../scss/components/_icon-box.scss';
import '../scss/components/_popup.scss';
import '../scss/components/section.scss';
import '../scss/components/_progress.scss';
import '../scss/components/form.scss';
import Header from '../components/header/header-v5';
import Banner from '../components/banner/banner-v6';
import About from '../components/about/home-defi2';
import dataAbout from '../assets/fake-data/data-about';
import Feature from '../components/features/features-v5';
import dataFeature from '../assets/fake-data/data-feature3';
import Tokendetails from '../components/token-details/token-details-v2';
import dataTokendetails from '../assets/fake-data/data-tokendeials';
import Roadmap from '../components/roadmap/roadmap-v6';
import dataRoadmap from '../assets/fake-data/data-roadmap5';
import Token from '../components/token-details/token-v2';
import Team from '../components/team/team-v6';
import dataTeam from '../assets/fake-data/data-team';
import Faq from '../components/faq/faq-v5';
import dataaccordion from '../assets/fake-data/data-faq2';
import Blog from '../components/blog/blog-v3';
import dataBlog from '../assets/fake-data/data-blog3';
import Footer from '../components/footer/footer-v6';
import dataFooter from '../assets/fake-data/data-footer';
function HomeDefi2(props) {

    return (
        <div className='home-defi-2'>
            {<Header />}
            {<Banner/>}
            {<About data={dataAbout}/>}
            {<Feature data={dataFeature}/>}
            {<Tokendetails data={dataTokendetails}/>}
            {<Roadmap data={dataRoadmap}/>}
            {<Token />}
            {<Team data={dataTeam}/>}
            {<Faq data={dataaccordion}/>}
            {<Blog data={dataBlog}/>}
            {<Footer data={dataFooter}/>}
        </div>
    );
}

export default HomeDefi2;
