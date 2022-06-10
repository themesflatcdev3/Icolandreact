import React from 'react';
import '../scss/components/_icon-box.scss';
import '../scss/components/section.scss';
import '../scss/components/_progress.scss';
import '../scss/components/form.scss';
import Header from '../components/header';
import Banner from '../components/banner/banner-v1';
import About from '../components/about/home-v1';
import dataAbout from '../assets/fake-data/data-about';
import Feature from '../components/features/features-v1';
import dataFeature from '../assets/fake-data/data-feature';
import Allodist from '../components/allo-dist';
import Roadmap from '../components/roadmap/roadmap-v1';
import dataRoadmap from '../assets/fake-data/data-roadmap';
import Tokendetails from '../components/token-details/token-details-v1';
import dataTokendetails from '../assets/fake-data/data-tokendeials';
import Team from '../components/team/team-v1';
import dataTeam from '../assets/fake-data/data-team';
import Faq from '../components/faq/faq-v1';
import dataaccordion from '../assets/fake-data/data-faq';
import Document from '../components/documents/documents-v1';
import datadocument from '../assets/fake-data/data-document';
import Contact from '../components/contact/contact-v1';
import dataContact from '../assets/fake-data/data-contact';
import Footer from '../components/footer/footer-v2';
function HomeOne(props) {

    return (
        <div className='home-main'>
            {<Header />}
            {<Banner />}
            {<About data={dataAbout} />}
            {<Feature data={dataFeature} />}
            {<Allodist />}
            {<Roadmap data={dataRoadmap} />}
            {<Tokendetails data={dataTokendetails} />}
            {<Team data={dataTeam} />}
            {<Faq data={dataaccordion} />}
            {<Document data={datadocument} />}
            {<Contact data={dataContact} />}
            {<Footer />}
        </div>
    );
}

export default HomeOne;