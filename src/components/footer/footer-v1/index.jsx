import React , { useState ,useEffect } from 'react';
import '../styles.scss'
import { Link } from 'react-router-dom'


function Footer(props) {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };
  
    useEffect(() => {
      const toggleVisibility = () => {
        if (window.pageYOffset > 500) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
  
      window.addEventListener("scroll", toggleVisibility);
  
      return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <footer className="footer style-1">
        <div className="footer__top">
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-md-12">
                        <div className="content-left">
                            <h5 className="fs-22">Don't miss out, Stay updated</h5>
                            <p>Don’t hesitate to subscribe to latest news about ICo</p>

                            <form action="#" id="subscribe-form">
                                <input type="email" placeholder="Enter your email" required="" id="subscribe-email" />
                                <button className="btn-action style-2" type="submit" id="subscribe-button"> <span className="effect">SUBSCRIBE</span></button>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-5 col-md-12">
                        <div className="content-right">
                            <p>Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally</p>
                            <ul className="list-social">
                                <li><span className="icon-twitter"></span></li>
                                <li><span className="icon-facebook"></span></li>
                                <li><span className="icon-place"></span></li>
                                <li><span className="icon-youtobe"></span></li>
                                <li><span className="icon-tiktok"></span></li>
                                <li><span className="icon-reddit"></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__bottom">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>© 2022. All rights reserved by <Link to="https://themeforest.net/user/themesflat/portfolio">Themesflat</Link></p>
                    </div>
                </div>
            </div>
        </div>
        
        {
                isVisible && 
                <Link onClick={scrollToTop}  to='#' id="scroll-top"></Link>
        }
    </footer>
    );
}

export default Footer;