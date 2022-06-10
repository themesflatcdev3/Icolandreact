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
            subtitle : 'Join the industry leaders to discuss where the markets are heading. We accept token payments',
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
        <section className="section-faq style-1" id="faq">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h3>{dataFaq.title}</h3>
                        <p className="mt-12">
                        {dataFaq.subtitle}
                        </p>
                    </div>

                    <div className="section-faq__main" data-aos="fade-up" data-aos-duration="800">
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
            </div>
        </div>
    </section>
    );
}

export default About;