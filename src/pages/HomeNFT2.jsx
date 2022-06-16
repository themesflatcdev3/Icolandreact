import React from 'react';
import '../scss/components/_icon-box.scss';
import '../scss/components/section.scss';
import '../scss/components/_progress.scss';
import '../scss/components/form.scss';
import Footer from '../components/footer/footer-v3';
import Header from '../components/header/header-v2';
import Banner from '../components/banner/banner-v3';
import dataBanner from '../assets/fake-data/databannerswiper';
import Parner from '../components/partner/parner-v1';
import dataParner from '../assets/fake-data/data-partner';
import About from '../components/about/home-v3';
import dataAbout from '../assets/fake-data/data-about3';
import Feature from '../components/features/features-v2';
import dataFeature from '../assets/fake-data/data-feature2';
import Documents from '../components/documents/documents-v3';
import dataDocuments from '../assets/fake-data/data-document3';
import Roadmap from '../components/roadmap/roadmap-v3';
import dataRoadmap from '../assets/fake-data/data-roadmap3';
import Team from '../components/team/team-v3';
import dataTeam from '../assets/fake-data/data-team2';
import Faq from '../components/faq/faq-v3';
import dataaccordion from '../assets/fake-data/data-faq';
function HomeNft2(props) {

    return (
        <div className='home-nft-v2'>
            {<Header />}
            {<Banner data={dataBanner}/>}
            {<Parner data={dataParner}/>}
            {<About data={dataAbout}/>}
            {<Feature data={dataFeature}/>}
            {<Documents data={dataDocuments}/>}
            {<Roadmap data={dataRoadmap}/>}
            {<Team data={dataTeam}/>}
            {<Faq data={dataaccordion}/>}
            {<Footer />}
        </div>
    );
}

export default HomeNft2;