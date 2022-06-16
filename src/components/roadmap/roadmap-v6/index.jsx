import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Roadmapitem from '../roadmap-item-v6';
import '../styles.scss'
Feature.propTypes = {
    data : PropTypes.array,
};

function Feature(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            subheading: 'Road Map',
            desc: 'We’re slowly transforming the website into the best place for beginners to learn about cryptocurrencies.',
            title: 'What our Major goals',
        }
    )

    return (
        <section className="road-map style-5" id="roadmap">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h6 className="sub-heading">{dataTitle.subheading}</h6>
                        <h3 className="heading">{dataTitle.title}</h3>
                        <p className="fs-20">{dataTitle.desc}</p>
                    </div>

                    <div className="road-map__main">
                        {
                            data.slice(0,5).map (item=>(
                                <Roadmapitem key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Feature;