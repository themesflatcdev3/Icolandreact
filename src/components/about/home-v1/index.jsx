import React , {useState} from 'react';
import PropTypes from 'prop-types';
import AboutItem from '../about-item';
import '../styles.scss'

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {
    const {data} = props;
    const [dataAbout] = useState(
        {
            title: 'What is ICO?',
            subtitle : 'The world first platform to reward investors and traders build on ICO',
        }
    )

    return (
        <section className="about style-1">
        <div className="container">
            <div className="row">
                <div className="col-xl-7 col-md-12">
                    <div className="about__image">
                    <img src={require ('../../../assets/images/layout/Graphic.png')} alt="" />
                    </div>
                </div>
                <div className="col-xl-5 col-md-12">
                    <div className="about__content">
                        <div className="block-text">
                            <h3 className="title">{dataAbout.title}</h3>
                            <p>{dataAbout.subtitle}</p>
                        </div>

                        <div className="list-icon-box" data-aos="fade-up" data-aos-duration="800">
                        {
                            data.map(item => (
                                <AboutItem key={item.id} item={item} />
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