import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Teampitem from '../team-item-list';
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import { Link } from 'react-router-dom';
import '../styles.scss'

import img1 from '../../../assets/images/avt/team-map-01.png'
import img2 from '../../../assets/images/avt/team-map-02.png'
import img3 from '../../../assets/images/avt/team-map-03.png'
import img4 from '../../../assets/images/avt/team-map-04.png'
import img5 from '../../../assets/images/avt/team-map-05.png'
import img6 from '../../../assets/images/avt/team-map-06.png'
import img7 from '../../../assets/images/avt/team-map-07.png'
import img8 from '../../../assets/images/avt/team-map-08.png'
import img9 from '../../../assets/images/avt/team-map-09.png'
import img10 from '../../../assets/images/avt/team-map-10.png'
import img11 from '../../../assets/images/avt/team-map-11.png'
import img12 from '../../../assets/images/avt/team-map-12.png'

Team.propTypes = {
    data : PropTypes.array,
};

function Team(props) {
    const [dataTitle] = useState(
        {
            title: 'MEET OUR MEMBER',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam est, elit venenatis nulla. Sodales netus viverra ipsum consequat.',
        }
    )
    const {data} = props;
    const [dataTab] = useState(
        [
            {
                id: 1,
                img: img1,
            },
            {
                id: 2,
                img: img2,
            },
            {
                id: 3,
                img: img3,
            },
            {
                id: 4,
                img: img4,
            },
            {
                id: 5,
                img: img5,
            },
            {
                id: 6,
                img: img6,
            },
            {
                id: 7,
                img: img7,
            },
            {
                id: 8,
                img: img8,
            },
            {
                id: 9,
                img: img9,
            },
            {
                id: 10,
                img: img10,
            },
            {
                id: 11,
                img: img11,
            },
            {
                id: 12,
                img: img12,
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
                        position: "Researcher, token economics",
                        name: "EVOL Roadman",
                        text: "Co-founder of Launch School, previously worked on enterprise data solutions at IBM Silicon Valley Lab, consultant & engineer.",
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-LinkedIn',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-Instagram',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-telegram',
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
                        img: img1,
                        position: "Researcher, token economics",
                        name: "EVOL Roadman",
                        text: "Co-founder of Launch School, previously worked on enterprise data solutions at IBM Silicon Valley Lab, consultant & engineer.",
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-LinkedIn',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-Instagram',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-telegram',
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
                        img: img1,
                        position: "Researcher, token economics",
                        name: "EVOL Roadman",
                        text: "Co-founder of Launch School, previously worked on enterprise data solutions at IBM Silicon Valley Lab, consultant & engineer.",
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-LinkedIn',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-Instagram',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-telegram',
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
                        img: img1,
                        position: "Researcher, token economics",
                        name: "EVOL Roadman",
                        text: "Co-founder of Launch School, previously worked on enterprise data solutions at IBM Silicon Valley Lab, consultant & engineer.",
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-LinkedIn',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-Instagram',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-telegram',
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
                        img: img1,
                        position: "Researcher, token economics",
                        name: "EVOL Roadman",
                        text: "Co-founder of Launch School, previously worked on enterprise data solutions at IBM Silicon Valley Lab, consultant & engineer.",
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-LinkedIn',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-Instagram',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-telegram',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
            {
                id: 6,
                dataContent: [
                    {
                        img: img1,
                        position: "Researcher, token economics",
                        name: "EVOL Roadman",
                        text: "Co-founder of Launch School, previously worked on enterprise data solutions at IBM Silicon Valley Lab, consultant & engineer.",
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-LinkedIn',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-Instagram',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-telegram',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
            {
                id: 7,
                dataContent: [
                    {
                        img: img1,
                        position: "Researcher, token economics",
                        name: "EVOL Roadman",
                        text: "Co-founder of Launch School, previously worked on enterprise data solutions at IBM Silicon Valley Lab, consultant & engineer.",
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-LinkedIn',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-Instagram',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-telegram',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
            {
                id: 8,
                dataContent: [
                    {
                        img: img1,
                        position: "Researcher, token economics",
                        name: "EVOL Roadman",
                        text: "Co-founder of Launch School, previously worked on enterprise data solutions at IBM Silicon Valley Lab, consultant & engineer.",
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-LinkedIn',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-Instagram',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-telegram',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
            {
                id: 9,
                dataContent: [
                    {
                        img: img1,
                        position: "Researcher, token economics",
                        name: "EVOL Roadman",
                        text: "Co-founder of Launch School, previously worked on enterprise data solutions at IBM Silicon Valley Lab, consultant & engineer.",
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-LinkedIn',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-Instagram',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-telegram',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
            {
                id: 10,
                dataContent: [
                    {
                        img: img1,
                        position: "Researcher, token economics",
                        name: "EVOL Roadman",
                        text: "Co-founder of Launch School, previously worked on enterprise data solutions at IBM Silicon Valley Lab, consultant & engineer.",
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-LinkedIn',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-Instagram',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-telegram',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
            {
                id: 11,
                dataContent: [
                    {
                        img: img1,
                        position: "Researcher, token economics",
                        name: "EVOL Roadman",
                        text: "Co-founder of Launch School, previously worked on enterprise data solutions at IBM Silicon Valley Lab, consultant & engineer.",
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-LinkedIn',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-Instagram',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-telegram',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
            {
                id: 12,
                dataContent: [
                    {
                        img: img1,
                        position: "Researcher, token economics",
                        name: "EVOL Roadman",
                        text: "Co-founder of Launch School, previously worked on enterprise data solutions at IBM Silicon Valley Lab, consultant & engineer.",
                        listsocial: [
                            {
                                id: 1,
                                icon: 'icon-LinkedIn',
                                link: '#'
                            },
                            {
                                id: 2,
                                icon: 'icon-facebook',
                                link: '#'
                            },
                            {
                                id: 3,
                                icon: 'icon-Instagram',
                                link: '#'
                            },
                            {
                                id: 4,
                                icon: 'icon-telegram',
                                link: '#'
                            },
                        ]
                    },
                ]
            },
        ]
    )

    return (
        <div className="section-team style-5" id="team">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text">
                        <h2 className="heading">{dataTitle.title}</h2>
                        <div className="desc fs-20 mt-16 pr40">{dataTitle.desc}</div>
                    </div>
                    <ul className="list-statis">
                        {
                            data.map(item => (
                                <Teampitem key={item.id} item={item}/>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
        <div className="container map">
            <div className="row">
                <div className="col-md-12">
                    <div className="team__main">
                        <img src={require ('../../../assets/images/layout/worldmap.png')} alt="ICOLand" />
                        <div className="flat-tabs team-box-5">
                            <Tabs >
                                <TabList className="menu-tab">
                                    {
                                        dataTab.map(data=> (
                                            <Tab key={data.id} ><div className="team-box__image"><img src={data.img} alt="ICOLand" /></div></Tab>
                                        ))
                                    }
                                </TabList>
                                <div className="content-tab">
                                {
                                    dataPanel.map(data =>(
                                        <TabPanel key={data.id} className="content-inner" >
                                        {
                                            data.dataContent.map((item,index)=>(
                                                <div key={index}>
                                                    <div className="team-box__info">
                                                        <h6 className="position">{item.position}</h6>
                                                        <h5 className="name">{item.name}</h5>
                                                        <p className="text fs-14">{item.text}</p>
                                                        <ul className="list-social">
                                                            {
                                                                item.listsocial.map(icon => (
                                                                    <li key={icon.id}>
                                                                        <Link to={icon.link}><span className={icon.icon}></span></Link>
                                                                    </li>
                                                                ))
                                                            }
                                                        </ul>
                                                    </div>                                                         
                                                </div>
                                            ))
                                        }
                                    </TabPanel>
                                    ))
                                }
                                </div>
                                
                            </Tabs>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Team;