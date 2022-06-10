import React , {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles.scss'
import AboutItem from '../about-item2';


About.propTypes = {
    data : PropTypes.array,
};

function About(props) {

    const {data} = props;

    const [dataTile] = useState(
        {
            title: 'What is ICO?',
            desc : 'ICO Land is a generative NFT art collectible project of 10.000 unique, digitally hand-drawn avatars immortalized on the Ethereum blockchain.'
        }
    )

    return (
        <section className="about style-2">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="about__content">
                        <div className="row">
                            <div className="col-xl-5 col-md-12">
                                <div className="block-text">
                                    <h3 className="title">{dataTile.title}</h3>
                                    <p className="fs-20 mt-12">{dataTile.desc}</p>
                                </div>
                            </div>
                            <div className="col-xl-7 col-md-12">
                                <div className="tf-box">
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
            </div>
        </div>
    </section>
    );
}

export default About;