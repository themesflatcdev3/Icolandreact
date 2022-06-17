import React , {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles.scss';
import AboutItem from '../about-item5';
import ReactPlayer from 'react-player/youtube'

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {
    const {data} = props;


    const [dataTitle] = useState(
        {
            subtitle: 'About us',
            title: 'Why choose ICOLand?',
           }
    )

    return (
        <section className="about style-5">
        <div className="container">
            <div className="row">
                <div className="col-xl-5 col-md-12">
                    <div className="about__video">
                   
                        <div className="wrap-video">
                        {/* <img src={require ('../../../assets/images/background/ab-video.jpg')} alt="ICOLand" /> */}

                        <ReactPlayer url='https://www.youtube.com/watch?v=i7EMACWuErA'   width="600px"
                            height="419px"
                            playing={false}
                            controls={false} className="popup-youtube">
                            <span className="icon-play"></span>
                        </ReactPlayer>
                        </div>  
                    </div>
                </div>
                <div className="col-xl-7 col-md-12">
                    <div className="about__content">
                        <div className="block-text">
                            <h6 className="sub-title">{dataTitle.subtitle}</h6>
                            <h3 className="title">{dataTitle.title}</h3>
                        </div>
                        <div className="list-icon-box" data-aos="fade-up" data-aos-duration="1000">
                            {
                                data.slice(6,9).map (item => (
                                    <AboutItem key={item.id} item={item}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default About;