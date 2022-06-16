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
            subtitle:'Contact',
            title: "Get in touch",
            desc: 'We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below. Someone from our team will get back to you shortly ',
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
        <footer className="footer style-3">
            <div className="footer__top">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="content-left">
                                <h6>{dataTitle.subtitle}</h6>
                                <h3 className="fs-22">{dataTitle.title}</h3>
                                <p className="fs-20">{dataTitle.desc}</p>
                                <ul className="list-social">
                                    <li><Link to="#"><span className="icon-twitter"></span></Link></li>
                                    <li><Link to="#"><span className="icon-facebook"></span></Link></li>
                                    <li><Link to="#"><span className="icon-place"></span></Link></li>
                                    <li><Link to="#"><span className="icon-youtobe"></span></Link></li>
                                    <li><Link to="#"><span className="icon-tiktok"></span></Link></li>
                                    <li><Link to="#"><span className="icon-reddit"></span></Link></li>
                                </ul>
                                
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="content-right">
                                <form>
                                    <div className="form row">
                                        <div className="form-group col-md-6">
                                            <label >Your Name</label>
                                            <input type="text" className="form-control" placeholder="Enter your name" />
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label >Your Email</label>
                                            <input type="email" className="form-control" id="exampleInputEmail4"  placeholder="Enter your email" />
                                        </div>
                                        <div className="form-group col-md-12">
                                            <label >Your Message</label>
                                            <textarea placeholder="Messages"></textarea>
                                        </div>
                                    </div>
                                    <button type="submit" className="btn-action style-3"><span>Send message</span></button>
                                    
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={require ('../../../assets/images/logo/logo02.png')} alt="ICOLand" />
                        </div>
                        <div className="col-md-6">
                            <p>Themesflat 2022- ALL rights reserved</p>
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