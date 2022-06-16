import React , {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles.scss'
import AboutItem from '../about-item6';

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            title: 'What Is ICO?',
            desc : 'ICOLand is an open, programmable smart contracts platform for decentralized applications.'
        }
    )

    return (
        <section className="about style-7 bg-1">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text">
                        <h2 className="title">{dataTitle.title}</h2>
                        <p className="fs-20 mt-16">{dataTitle.desc}</p>
                    </div> 
                </div>
                {
                    data.map (item => (
                        <AboutItem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </section>
    );
}

export default About;