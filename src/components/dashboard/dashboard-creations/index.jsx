import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../../button/button-st2';
import {Link} from 'react-router-dom';
import '../styles.scss'

Community.propTypes = {
    data : PropTypes.array,
};

function Community(props) {
    const [dataTitle] = useState(
        {   
            title : 'Gallery of NFT',
            desc: 'ICOLand is a collection of 10,000 Bored Ape NFTs unique digital collectibles living on the Ethereum blockchain.',
        }
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
                <li><Link to="/dashboard-features"><span className="icon-menu"></span>Our Feature</Link></li>
                <li><Link to="/dashboard-roadmap"><span className="icon-map"></span>Road Map</Link></li>
                <li><Link to="/dashboard-creations" className='active'><span className="icon-start"></span>Our Creations</Link></li>
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
            <div class="overlay"></div>
        <div class="dashboard__header">
            <Link to="#" class="user">
                <img src={require ('../../../assets/images/avt/admin.jpg')} alt="ICOLand" />
            </Link>
            <Link to="#" class="btn-action-outline style-5"><span class="icon-wallet"></span><span>Wallet connect</span></Link>
        </div>
        <div class="dashboard__main">
            <section class="gallery">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="block-text">
                                <h2 class="title">{dataTitle.title}</h2>
                                <p class="fs-20">{dataTitle.desc}</p>
                            </div>
                            
                        </div>
                        <div class="col-md-6">
                            <div class="button">
                                <Button title='VIEW in opensea' addclass='style-5' path='#' />
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="gallery__main">
                                <Link to="#">
                                    <img src={require ('../../../assets/images/gallery/gallery-nft-01.png')} alt="ICOLand" />
                                </Link>
                                <Link to="#">
                                    <img src={require ('../../../assets/images/gallery/gallery-nft-02.png')} alt="ICOLand" />
                                </Link>
                                <Link to="#">
                                    <img src={require ('../../../assets/images/gallery/gallery-nft-03.png')} alt="ICOLand" />
                                </Link>
                                <Link to="#">
                                    <img src={require ('../../../assets/images/gallery/gallery-nft-04.png')} alt="ICOLand" />
                                </Link>
                                <Link to="#">
                                    <img src={require ('../../../assets/images/gallery/gallery-nft-05.png')} alt="ICOLand" />
                                </Link>
                                <Link to="#">
                                    <img src={require ('../../../assets/images/gallery/gallery-nft-06.png')} alt="ICOLand" />
                                </Link>
                                <Link to="#">
                                    <img src={require ('../../../assets/images/gallery/gallery-nft-07.png')} alt="ICOLand" />
                                </Link>
                                <Link to="#">
                                    <img src={require ('../../../assets/images/gallery/gallery-nft-08.png')} alt="ICOLand" />
                                </Link>
                                <Link to="#">
                                    <img src={require ('../../../assets/images/gallery/gallery-nft-09.png')} alt="ICOLand" />
                                </Link>
                                <Link to="#">
                                    <img src={require ('../../../assets/images/gallery/gallery-nft-10.png')} alt="ICOLand" />
                                </Link>
                                <Link to="#">
                                    <img src={require ('../../../assets/images/gallery/gallery-nft-11.png')} alt="ICOLand" />
                                </Link>
                                <Link to="#">
                                    <img src={require ('../../../assets/images/gallery/gallery-nft-12.png')} alt="ICOLand" />
                                </Link>
                                <Link to="#">
                                    <img src={require ('../../../assets/images/gallery/gallery-nft-13.png')} alt="ICOLand" />
                                </Link>
                                <Link to="#">
                                    <img src={require ('../../../assets/images/gallery/gallery-nft-14.png')} alt="ICOLand" />
                                </Link>
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