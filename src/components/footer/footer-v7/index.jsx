import React , { useState ,useEffect } from 'react';
import '../styles.scss';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

Footer.propTypes = {
    data : PropTypes.array,
};
function Footer(props) {
    const [isVisible, setIsVisible] = useState(false);

    const [dataTitle] = useState(
        {
            title: 'Newsletter',
            desc: 'We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly ',
            copyright : 'icoland 2022- ALL rights reserved',
            title2: 'Email Address',
        }
    )

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
        <footer class="footer style-7">
        <div class="footer__top">
            <div class="container">
                <div class="row">
                    <div class="col-xl-8 col-md-12">
                        <div class="content-left">
                            <h5 >{dataTitle.title}</h5>
                            <p class="fs-17">{dataTitle.desc}</p>

                            <form action="#" id="subscribe-form">
                                <h6>{dataTitle.title2}</h6>
                                <input type="email" placeholder="Enter your email address" required="" id="subscribe-email" />
                                <button class="btn-action style-5" type="submit" id="subscribe-button"> <span>SIGN UP</span></button>
                            </form>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-12">
                        <div class="content-right">
                            <h5>Contact</h5>
                            <ul class="list-info">
                                <li> <span class="icon-internet"></span>Company.com</li>
                                <li> <span class="icon-message"></span>Info.yourcompany@gmail.com</li>
                                <li><span class="icon-Calling"></span>+345 54689435</li>
                            </ul>
                            <ul class="list-social">
                                <li><span class="icon-twitter"></span></li>
                                <li><span class="icon-facebook"></span></li>
                                <li><span class="icon-place"></span></li>
                                <li><span class="icon-youtobe"></span></li>
                                <li><span class="icon-tiktok"></span></li>
                                <li><span class="icon-reddit"></span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom">
            <div class="container">
                <div class="row">
                    <div class="col-md-6">
                        <img src={require ('../../../assets/images/logo/logo04.png')} alt="ICOLand" />
                    </div>
                    <div class="col-md-6">
                        <p>{dataTitle.copyright}</p>
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