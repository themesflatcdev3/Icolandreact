import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Featureitem from '../features-item5';
import '../styles.scss'
Feature.propTypes = {
    data : PropTypes.array,
};

function Feature(props) {
    const {data} = props;
    const [dataTile] = useState(
        {
            subtitle :'Features',
            title: 'Meet our Solutions',
            desc: 'Explore sensational features to prepare your best investment in cryptocurrency',
        }
    )

    return (
        <section className="features style-5" id="features">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h6 className="sub-heading">{dataTile.subtitle}</h6>
                        <h3 className="heading">
                            {dataTile.title}
                        </h3>
                        <p className="fs-20 mt-16">{dataTile.desc}</p>
                    </div>
                </div>
            </div>
            <div className="row">
            {
                data.slice(4,8).map (item => (
                    <Featureitem key={item.id} item={item}/>
                ))
            }
            </div>
        </div>
    </section>
    );
}

export default Feature;