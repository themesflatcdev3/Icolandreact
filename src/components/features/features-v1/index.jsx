import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Featureitem from '../features-item';
import '../styles.scss'
Feature.propTypes = {
    data : PropTypes.array,
};

function Feature(props) {
    const {data} = props;
    const [dataFeature] = useState(
        {
            title: 'Why Choose Our Token?',
            subtitle : 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui official',
        }
    )

    return (
        <section className="features" id="features">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h3 className="title">
                            {dataFeature.title}
                        </h3>
                        <p className="fs-17 mt-12">
                            {dataFeature.subtitle}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    data.map(item => (
                        <Featureitem key={item.id} item={item} />
                    ))           
                }
            </div>
        </div>
    </section>
    );
}

export default Feature;