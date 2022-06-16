import React , { useState ,useEffect } from 'react';
import '../styles.scss';
import { Link } from 'react-router-dom'


function Footer(props) {

    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    const [dataTitle] = useState(
        {
            title: "Don't miss out, Stay updated",
            desc: 'Don’t hesitate to subscribe to latest news about ICo markets as well as crucial financial knowledge to become successful investors globally',
            author:'Themesflat'
        }
    )
  
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
        <footer className="footer style-2 style-6">
        <div className="footer__top">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="content">
                            <h2 className="heading">{dataTitle.title}</h2>
                            <form action="#" id="subscribe-form">
                                <input type="email" placeholder="Enter your email" required="" id="subscribe-email" />
                                <button className="btn-action s2" type="submit" id="subscribe-button"> <span className="effect">SUBSCRIBE</span></button>
                            </form>
                            <p>{dataTitle.desc}</p>
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
                    <div className="col-md-5">
                        
                    </div>
                </div>
            </div>
        </div>
        <div className="footer__bottom center">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>© 2022. All rights reserved by <a href="https://themeforest.net/user/themesflat/portfolio">{dataTitle.author}</a></p>
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