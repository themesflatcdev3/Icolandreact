import React from 'react';
import '../scss/components/_icon-box.scss';
import '../scss/components/section.scss';
import '../scss/components/_progress.scss';
import '../scss/components/form.scss';
import Footer from '../components/footer/footer-v1';
import Header from '../components/header/header-v1';
import Banner from '../components/banner/banner-v2';
import dataBanner from '../assets/fake-data/databanner';
import About from '../components/about/home-v2';
import dataAbout from '../assets/fake-data/data-about2';
import Roadmap from '../components/roadmap/roadmap-v2';
import dataRoadmap from '../assets/fake-data/data-roadmap2';
import Creation from '../components/creation/creation-v1';
import dataCreation from '../assets/fake-data/data-creation';
import Document from '../components/documents/documents-v2';
import datadocument from '../assets/fake-data/data-document2';
import Team from '../components/team/team-v2';
import Faq from '../components/faq/faq-v2';
import dataaccordion from '../assets/fake-data/data-faq2';
import Contact from '../components/contact/contact-v2';
function HomeNft(props) {

    return (
        <div className='home-nft backgroup-body'>
            {<Header />}
            {<Banner data={dataBanner}/>}
            {<About data={dataAbout}/>}
            {<Roadmap data={dataRoadmap}/>}
            {<Creation data={dataCreation}/>}
            {<Document data={datadocument}/>}
            {<Team />}
            {<Faq data={dataaccordion}/>}
            {<Contact />}
            {<Footer />}
        </div>
    );
}

export default HomeNft;