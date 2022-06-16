import React from 'react';
import '../scss/components/_icon-box.scss';
import '../scss/components/_popup.scss';
import '../scss/components/section.scss';
import '../scss/components/_progress.scss';
import '../scss/components/form.scss';
import Footer from '../components/footer/footer-v5';
import Header from '../components/header/header-v4';
import Banner from '../components/banner/banner-v5';
import About from '../components/about/home-defi1';
import dataAbout from '../assets/fake-data/data-about';
import Feature from '../components/features/features-v4';
import dataFeature from '../assets/fake-data/data-feature4';
import Roadmap from '../components/roadmap/roadmap-v5';
import dataRoadmap from '../assets/fake-data/data-roadmap3';
import Token from '../components/allo-dist/allo-dist-v2';
import dataToken from '../assets/fake-data/data-chart';
import Team from '../components/team/team-v5';
import dataTeam from '../assets/fake-data/data-team3';
import Parner from '../components/partner/parter-v2';
import dataParner from '../assets/fake-data/data-partner';
import Blog from '../components/blog/blog-v2';
import dataBlog from '../assets/fake-data/data-blog2';
import Faq from '../components/faq/faq-v1';
import dataaccordion from '../assets/fake-data/data-faq';
function HomeDefi1(props) {

    return (
        <div className='home-defi-1'>
            {<Header />}
            {<Banner />}
            {<About data={dataAbout} />}
            {<Feature data={dataFeature} />}
            {<Roadmap data={dataRoadmap} />}
            {<Token data={dataToken}/>}
            {<Team data={dataTeam}/>}
            {<Parner data={dataParner}/>}
            {<Blog data={dataBlog}/>}
            {<Faq data={dataaccordion} />}
            {<Footer/>}
        </div>
    );
}

export default HomeDefi1;