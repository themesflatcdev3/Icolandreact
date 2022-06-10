import React , {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import PropTypes from 'prop-types';
import AccordionItem from '../accordion-item';
import '../styles.scss'

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {
    const {data} = props;
    const [dataFaq] = useState(
        {
            title: 'Have any Question? ',
            subtitle : 'Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.',
        }
    )

    const [dataTab] = useState(
        [
            {
                id: 1,
                title: "General",
            },
            {
                id: 2,
                title: "Pre ICO & ICO",
            },
            {
                id: 3,
                title: "Token",
            },
            {
                id: 4,
                title: "Client",
            },
            {
                id: 5,
                title: "Legal",
            },
        ]
    )


    return (
        <section className="section-faq style-2">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="faq__content">
                        <div className="block-text">
                            <h3 className="heading">{dataFaq.title}</h3>
                            <p>{dataFaq.subtitle}</p>
                        </div>
    
                        <div className="flat-tabs">
                        <Tabs >
                        <TabList className="menu-tab">
                            {
                                dataTab.map(data=> (
                                    <Tab key={data.id} ><h5>{data.title}</h5></Tab>
                                ))
                            }
                        </TabList>
                        <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                            {
                                data.slice(0,4).map(item => (
                                    <AccordionItem key={item.id} item={item} />
                                ))
                            }                                                   
                        </div>
                        </TabPanel>
                        <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                            {
                                data.slice(0,4).map(item => (
                                    <AccordionItem key={item.id} item={item} />
                                ))
                            }                                                   
                        </div>
                        </TabPanel>
                        <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                            {
                                data.slice(0,4).map(item => (
                                    <AccordionItem key={item.id} item={item} />
                                ))
                            }                                                   
                        </div>
                        </TabPanel>
                        <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                            {
                                data.slice(0,4).map(item => (
                                    <AccordionItem key={item.id} item={item} />
                                ))
                            }                                                   
                        </div>
                        </TabPanel>
                        <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                            {
                                data.slice(0,4).map(item => (
                                    <AccordionItem key={item.id} item={item} />
                                ))
                            }                                                   
                        </div>
                        </TabPanel>
                        </Tabs>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="faq__images">
                    <img src={require ('../../../assets/images/layout/imgfaq.png')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default About;