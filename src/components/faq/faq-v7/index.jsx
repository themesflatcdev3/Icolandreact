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
    const [dataTitle] = useState(
        {
            title: 'Frequently asked questions ',
            desc : 'Below we’ve provided a bit of ICO, ICO Token, cryptocurrencies, and few others.',
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
                title: "Token Sales",
            },
            {
                id: 3,
                title: "Legal",
            },
            {
                id: 4,
                title: "Road map",
            },
        ]
    )


    return (
        <section className="section-faq style-2" id="faq">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-md-12">
                    <div className="faq__images">
                        <img src={require ('../../../assets/images/layout/faq-h8.png')} alt="" />
                    </div>
                </div>
                <div className="col-xl-7 col-md-12">
                    <div className="faq__content">
                        <div className="block-text">
                            <h3 className="heading">{dataTitle.title}</h3>
                            <p className="fs-17">{dataTitle.desc}</p>
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
                                data.slice(16,20).map(item => (
                                    <AccordionItem key={item.id} item={item} />
                                ))
                            }                                                   
                        </div>
                        </TabPanel>
                        <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                            {
                                data.slice(4,8).map(item => (
                                    <AccordionItem key={item.id} item={item} />
                                ))
                            }                                                   
                        </div>
                        </TabPanel>
                        <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                            {
                                data.slice(8,12).map(item => (
                                    <AccordionItem key={item.id} item={item} />
                                ))
                            }                                                   
                        </div>
                        </TabPanel>
                        <TabPanel className="content-tab">
                        <div className="content-inner flat-accordion">
                            {
                                data.slice(12,16).map(item => (
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