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
            title: 'FAQs ',
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
        <section class="section-faq style-4" id="faq">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="faq__main">
                        <div class="block-text">
                            <h2 class="heading">{dataTitle.title} </h2>
                            <p class="fs-20">{dataTitle.desc} </p>
                        </div>
                        <div class="faq__content">
                            <div class="flat-tabs">
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
        </div>
    </section>
    );
}

export default About;