import React , { useState ,useEffect } from 'react';
import '../styles.scss';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import Footeritem from '../footer-item';

Footer.propTypes = {
    data : PropTypes.array,
};
function Footer(props) {
    const {data} = props;
    const [isVisible, setIsVisible] = useState(false);

    const [dataTitle] = useState(
        {
            copyright : 'Copyright 2022 ICOLAND @ All right reserved',
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
        <footer className="footer style-5">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-md-6">
                    <div className="info">
                        <img src={require ('../../../assets/images/logo/logo03.png')} alt="ICOLand" />
                        <p className="fs-20">
                            {dataTitle.copyright}
                            {dataTitle.copyright2}
                        </p>
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
                {
                    data.map(item =>(
                        <Footeritem key={item.id} item={item}/>
                    ))
                }
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