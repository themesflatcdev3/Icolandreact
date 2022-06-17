import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Listitem from '../list-itemv2';
import {Link} from 'react-router-dom';
import '../styles.scss'

Community.propTypes = {
    data : PropTypes.array,
};

function Community(props) {
    const [dataTitle] = useState(
        {   
            title : 'Allow us to Introduce Ourselves',
            desc: 'ICOLand is a collection of 10,000 Bored Ape NFTs unique digital collectibles living on the Ethereum blockchain.',
        }
    )

    const [dataList] = useState(
        [
            {
                id: 1,
                number: '01',
                title:'High-Quality Rendered And Equally Affordable Artwork'
            },
            {
                id: 2,
                number: '02',
                title:'Learning, Researching, And Studying The Crypto Market Daily'
            },
            {
                id: 3,
                number: '03',
                title:'The Immersive World Of NFTs With All Its Collectors & Projects'
            },
            {
                id: 4,
                number: '04',
                title:'The Immersive World Of NFTs With All Its Collectors & Projects'
            },
        ]
    )

    const [btnState, setbtnState] = useState(false);
    const [menuState, setmenuState] = useState(false);
    function handleClick() {
        setbtnState(btnState => !btnState);
    }
    function handleClickmenu() {
        setmenuState(menuState => !menuState);
    }

    let toggleClassclick = btnState ? 'click': null;
    let togglemenu = menuState ? 'show': null;

    return (
        <section className='dashboard'>
            <div className={`btn ${toggleClassclick}`} onClick={handleClick}>
                <span className="fas fa-bars"></span>
            </div>
            <nav className={`dashboard__sidebar ${toggleClassclick}`}>
                <div className="sidebar__logo">
                    <Link to='/'><img src={require ('../../../assets/images/logo/logo.png')} alt="ICOLand" /></Link>   
                </div>
                <ul className="sidebar__menu">
                <li><Link to="/dashboard-tokensales"><span className="icon-token"></span>Token Sales</Link></li>
                <li><Link to="/dashboard-features" className='active'><span className="icon-menu"></span>Our Feature</Link></li>
                <li><Link to="/dashboard-roadmap"><span className="icon-map"></span>Road Map</Link></li>
                <li><Link to="/dashboard-creations"><span className="icon-start"></span>Our Creations</Link></li>
                <li><Link to="/dashboard-team"><span className="icon-team"></span>Our Team</Link></li>
                <li><Link to="/dashboard-faq"><span className="icon-faqs"></span>FaQs</Link></li>
                <li>
                <Link to="#" onClick={handleClickmenu} className={`feat-btn ${togglemenu}`}><span className="icon-setting"></span>Pages
                    
                    </Link>
                    <ul className={`feat-show ${togglemenu}`}>
                        <li><Link to="index.html">Home Main</Link></li>
                        <li><Link to="home-nft.html">Home NFT</Link></li>
                        <li><Link to="home-defi-v1.html">Home Defi</Link></li>
                        <li><Link to="connect-wallet.html">Wallet Connect</Link></li>
                        <li><Link to="sign-in.html">Sign In</Link></li>
                        <li><Link to="sign-up.html">Sign Up</Link></li>
                        <li><Link to="blog-v1.html">Blog</Link></li>
                    </ul>
                </li>
                </ul>

                <div className="bottom">
                    <ul className="list-social">
                        <li><span className="icon-twitter"></span></li>
                        <li><span className="icon-facebook"></span></li>
                        <li><span className="icon-place"></span></li>
                        <li><span className="icon-youtobe"></span></li>
                        <li><span className="icon-tiktok"></span></li>
                        <li><span className="icon-reddit"></span></li>
                    </ul>
                    <p className="fs-14">© 2022. All rights reserved by Themesflat</p>
                </div>
            </nav>
            <div className={`dashboard__content ${toggleClassclick}`}>
            <div className="overlay"></div>
                <div className="dashboard__header">
                    <Link to="#" className="user">
                        <img src={require ('../../../assets/images/avt/admin.jpg')} alt="ICOLand" />
                    </Link>
                    <Link to="#" className="btn-action-outline style-5"><span className="icon-wallet"></span><span>Wallet connect</span></Link>
                </div>
                <div className="dashboard__main">
                    <section className="about style-9">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-6 col-md-12">
                                    <div className="block-text">
                                        <h2 className="title">{dataTitle.title}</h2>
                                        <p className="fs-20 mt-16">{dataTitle.desc}</p>
                                    </div>
                                    <div className="group-img">
                                        <img src={require ('../../../assets/images/layout/item-01.jpg')} alt="ICOLand" />
                                        <img src={require ('../../../assets/images/layout/item-02.jpg')} alt="ICOLand" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-md-12">
                                    <div className="about__content">
                                        {
                                            dataList.map (item => (
                                                <Listitem key={item.id} item={item}/>
                                            ))
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}

export default Community;