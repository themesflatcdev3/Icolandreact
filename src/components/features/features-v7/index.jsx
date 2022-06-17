import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Featureitem from '../features-item4';
import '../styles.scss'
Feature.propTypes = {
    data : PropTypes.array,
};

function Feature(props) {
    const {data} = props;
    const [dataTile] = useState(
        {
            desc :'The world first platform to reward investors and traders build on ICO.',
            title: 'Why choose our Token?',
        }
    )

    return (
        <section className="features style-4" id="features">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h3 className="heading">
                            {dataTile.title}
                        </h3>
                        <p className="fs-17 mt-16">{dataTile.desc}</p>
                    </div>
                </div>
            </div>
            <div className="row" >
                {
                    data.map(item => (
                        <Featureitem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </section>
    );
}

export default Feature;