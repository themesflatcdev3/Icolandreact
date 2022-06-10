import React , {useState} from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import { Link } from 'react-router-dom';
import '../styles.scss'

import img1 from '../../../assets/images/avt/team-v01.png'
import img2 from '../../../assets/images/avt/team-v02.png'
import img3 from '../../../assets/images/avt/team-v03.png'
import img4 from '../../../assets/images/avt/team-v04.png'
import img5 from '../../../assets/images/avt/team-v05.png'
import img6 from '../../../assets/images/avt/team-01.jpg'
import img7 from '../../../assets/images/avt/team-02.jpg'
import img8 from '../../../assets/images/avt/team-03.jpg'
import img9 from '../../../assets/images/avt/team-04.jpg'
import img10 from '../../../assets/images/avt/team-05.jpg'
Team.propTypes = {
    data : PropTypes.array,
};

function Team() {
    const [dataTab] = useState(
        [
            {
                id: 1,
                img: img6,
            },
            {
                id: 2,
                img: img7,
            },
            {
                id: 3,
                img: img8,
            },
            {
                id: 4,
                img: img9,
            },
            {
                id: 5,
                img: img10,
            },
        ]
    )

    const [dataPanel] = useState(
        [
            {
                id: 1,
                dataContent: [
                    {
                        img: img1,
                        title: "Executive Team",
                        desc: "Our team player alway finds effective ways to improve the product and process",
                        name: "Charlee Mangar",
                        position: "Co-founder & COO",
                        text: 'As Sneakerheadz is a members only club, holding one of our Genesis "OG" NFTs grants you access to exclusivity only we can provide.',
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-twitter',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-place',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-reddit',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
            {
                id: 2,
                dataContent: [
                    {
                        img: img2,
                        title: "Executive Team",
                        desc: "Our team player alway finds effective ways to improve the product and process",
                        name: "Charlee Mangar",
                        position: "Co-founder & COO",
                        text: 'As Sneakerheadz is a members only club, holding one of our Genesis "OG" NFTs grants you access to exclusivity only we can provide.',
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-twitter',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-place',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-reddit',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
            {
                id: 3,
                dataContent: [
                    {
                        img: img3,
                        title: "Executive Team",
                        desc: "Our team player alway finds effective ways to improve the product and process",
                        name: "Charlee Mangar",
                        position: "Co-founder & COO",
                        text: 'As Sneakerheadz is a members only club, holding one of our Genesis "OG" NFTs grants you access to exclusivity only we can provide.',
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-twitter',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-place',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-reddit',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
            {
                id: 4,
                dataContent: [
                    {
                        img: img4,
                        title: "Executive Team",
                        desc: "Our team player alway finds effective ways to improve the product and process",
                        name: "Charlee Mangar",
                        position: "Co-founder & COO",
                        text: 'As Sneakerheadz is a members only club, holding one of our Genesis "OG" NFTs grants you access to exclusivity only we can provide.',
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-twitter',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-place',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-reddit',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
            {
                id: 5,
                dataContent: [
                    { 
                        img: img5,
                        title: "Executive Team",
                        desc: "Our team player alway finds effective ways to improve the product and process",
                        name: "Charlee Mangar",
                        position: "Co-founder & COO",
                        text: 'As Sneakerheadz is a members only club, holding one of our Genesis "OG" NFTs grants you access to exclusivity only we can provide.',
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-twitter',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-place',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-reddit',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
        ]
    )
    return (
        <section className="section-team team-8" id="team">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="flat-tabs">
                    <Tabs >
                        <TabList className="menu-tab">
                            {
                                dataTab.map(data=> (
                                    <Tab key={data.id} ><div className="image"><img src={data.img} alt="ICOLand" /></div></Tab>
                                ))
                            }
                        </TabList>
                        {
                            dataPanel.map(data =>(
                                <TabPanel className="content-tab" key={data.id}>
                                    {
                                        data.dataContent.map (item=>(
                                            <div className="content-inner" key={item.id}>
                                                <div className="image">
                                                    <img src={item.img} alt="ICOLand" />
                                                </div>
                                                <div className="content">
                                                    <div className="block-text">
                                                        <h3 className="heading">{item.title}</h3>
                                                        <p>{item.desc}</p>
                                                    </div>
                                                    <div className="info">
                                                            <span className="icon-union-01"></span>
                                                            <span className="icon-union-02"></span>
                                                            <span className="icon-union-03"></span>
                                                            <span className="icon-union-04"></span>
                                                        <h4 className="name">{item.name}</h4>
                                                        <p className="position">{item.position}</p>
                                                        <p className="text">{item.text}</p>
                                                        <div className="list-social">
                                                        {
                                                            item.listsocial.map(icon => (
                                                                <li key={icon.id}>
                                                                    <Link to={icon.link}><span className={icon.icon}></span></Link>
                                                                </li>
                                                            ))
                                                        }
                                                        </div>
                                                    </div>
                                                </div>                                                         
                                            </div>
                                        ))
                                    }
                                </TabPanel>
                            ))
                        }
                    </Tabs>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Team;