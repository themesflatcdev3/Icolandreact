import React , {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles.scss'
import ReactPlayer from 'react-player/youtube'

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {

    const [dataTitle] = useState(
        {
            subtitle: 'About us',
            title: 'What is ICOLAND?',
            desc : 'ICOLAND offers music artists the ability to connect with each other along with investors and digitally exchange NFTs for their creations within a sustainable and powerful tokenomics system running on the blockchain, giving access to a world of opportunities for those with a passion tied to the entertaining values of music and performance arts.'
        }
    )

    return (
        <section className="about style-3" >
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="about__video">
                        <div className="wrap-video">
                            <ReactPlayer url='https://www.youtube.com/watch?v=i7EMACWuErA'   width="720px"
                                height="501px"
                                playing={false}
                                controls={false} className="popup-youtube">
                                <span className="icon-play"></span>
                            </ReactPlayer>
                        </div>  
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="about__content">
                        <h6 className="sub-title">{dataTitle.subtitle}</h6>
                        <h3 className="title">{dataTitle.title}</h3>
                        <p className="text">{dataTitle.desc}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default About;