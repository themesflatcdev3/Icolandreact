import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Roadmap from '../roadmap-item';
import '../styles.scss'
Feature.propTypes = {
    data : PropTypes.array,
};

function Feature(props) {
    const {data} = props;
    const [dataRoadmap] = useState(
        {
            title: 'Roadmap',
            subtitle : 'The use of cryptocurrencies has become more widespread, The origin platform idea. Development of the concept and business plan.',
        }
    )

    return (
        <section className="road-map style-2" id="roadmap">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h3>{dataRoadmap.title}</h3>
                        <p className="mt-12 pd28">{dataRoadmap.subtitle}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="roadmap__main" data-aos="fade-up" data-aos-duration="800">
                        {
                            data.map(item => (
                                <Roadmap key={item.id} item={item} />
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