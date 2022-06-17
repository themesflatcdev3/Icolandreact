import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Featureitem from '../features-item3';
import '../styles.scss'
Feature.propTypes = {
    data : PropTypes.array,
};

function Feature(props) {
    const {data} = props;
    const [dataTile] = useState(
        {
            subtitle :'Our features',
            title: 'How Can I Benefit?',
        }
    )

    return (
        <section className="features style-3 mobie-pb0" id="features">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h6 className="sub-heading">{dataTile.subtitle}</h6>
                        <h3 className="heading">
                        {dataTile.title}
                        </h3>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    data.slice(0,4).map(item => (
                        <Featureitem key={item.id} item={item} />
                    ))           
                }                                              
            </div>
        </div>
    </section>
    );
}

export default Feature;