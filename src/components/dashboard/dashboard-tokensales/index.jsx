import React , {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Listitem from '../list-item';
import {Link} from 'react-router-dom';
import '../styles.scss'

Community.propTypes = {
    data : PropTypes.array,
};

function Community(props) {
    const [dataTitle] = useState(
        {   
            title : 'WELCOME TO THE ICOLAND NFT CLUB',
            desc: 'ICOLand is a collection of 10,000 Bored Ape NFTs unique digital collectibles living on the Ethereum blockchain.',
        }
    )
    const [countdownDate] = useState(new Date('6/30/2022').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    },);

    const setNewTime = () => {
        if (countdownDate) {
        const currentTime = new Date().getTime();

        const distanceToDate = countdownDate - currentTime;

        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
            (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
            hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
            minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
            seconds = `0${seconds}`;
        }

        setState({ days: days, hours: hours, minutes, seconds });
        }
    };
    const [dataList] = useState(
        [
            {
                id: 1,
                number: '01',
                title: '+200K',
                text:'Current Holders'
            },
            {
                id: 2,
                number: '02',
                title: '+5 MILLION',
                text:'cryptoItem'
            },
            {
                id: 3,
                number: '03',
                title: '+500.000 USD',
                text:'Total Volume'
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
                <li><Link to="/dashboard-tokensales" className="active"><span className="icon-token"></span>Token Sales</Link></li>
                <li><Link to="/dashboard-features"><span className="icon-menu"></span>Our Feature</Link></li>
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
                    <div className="banner">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xl-6 col-md-12">
                                    <div className="block-text">
                                        <h2 className="title">{dataTitle.title}</h2>
                                        <p className="desc">{dataTitle.desc}</p>
                                    </div>
                                    <div className="group-button">
                                        <Link to="#" className="btn-action style-5"><span>Buy Tokens now</span></Link>
                                        <Link to="#" className="btn-action-outline style-5"><span>White paper</span></Link>
                                    </div>
            
                                    <ul className="content-list">
                                        {
                                            dataList.map (item => (
                                                <Listitem key={item.id} item={item}/>
                                            ))
                                        }
                                    </ul>
                                    
                                </div>
                                <div className="col-xl-6 col-md-12">
                                    <div className="banner-top__sale">
                                        <div className="sale-image">
                                            <img src={require ('../../../assets/images/item/nft-01.png')} alt="ICOLand" />
                                            <img src={require ('../../../assets/images/item/nft-02.jpg')} alt="ICOLand" />
                                            <img src={require ('../../../assets/images/item/nft-03.jpg')} alt="ICOLand" />
                                            <img src={require ('../../../assets/images/item/nft-04.png')} alt="ICOLand" />
                                            <img src={require ('../../../assets/images/item/nft-05.jpg')} alt="ICOLand" />
                                            <img src={require ('../../../assets/images/item/nft-06.jpg')} alt="ICOLand" />
                                        </div>
                                        <div className="sale-content">
                                            <h5>Token sale End In!</h5>
                
                                            <div className="js-countdown">
                                                <div className="countdown__timer">
                                                    <div className="countdown__item">
                                                        {state.days || '0'}
                                                    </div>
                                                    <div className="countdown__item countdownhours">
                                                    {state.hours || '00'}
                                                    </div>
                                                    <div className="countdown__item countdownminutes">
                                                    {state.minutes || '00'}
                                                    </div>
                                                    <div className="countdown__item countdownseconds">
                                                    {state.seconds || '00'}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Community;