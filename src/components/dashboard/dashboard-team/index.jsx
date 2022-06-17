import React , {useState} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import Teamitem from '../../team/team-item-v7';
import '../styles.scss'

Community.propTypes = {
    data : PropTypes.array,
};

function Community(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {   
            title : 'Meet Our Team',
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
                <li><Link to="/dashboard-features"><span></span>Our Feature</Link></li>
                <li><Link to="/dashboard-roadmap"><span className="icon-map"></span>Road Map</Link></li>
                <li><Link to="/dashboard-creations"><span className="icon-start"></span>Our Creations</Link></li>
                <li><Link to="/dashboard-team" className="active"><span className="icon-team"></span>Our Team</Link></li>
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
            <div className="section-team style-9">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text">
                                <h2 className="heading">{dataTitle.title}</h2>
                                <div className="desc fs-20 mt-21">{dataTitle.desc}</div>
                            </div>
        
                            <div className="team-main">
                                {
                                    data.slice(4,8).map(item => (
                                        <Teamitem key={item.id} item={item}/>
                                    ))
                                }
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