import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Featureitem from '../features-item2';
import '../styles.scss'
Feature.propTypes = {
    data : PropTypes.array,
};

function Feature(props) {
    const {data} = props;
    const [dataTile] = useState(
        {
            subtitle: 'Our features',
            title: 'How Can I Benefit?',
        }
    )

    return (
        <div className="features style-6" id="features">
        <div className="container">
            <div className="row">
                <div className="col-xl-7 col-md-12">
                    <div className="block-text center">
                    <h6 className="sub-heading">{dataTile.subtitle}</h6>
                        <h3 className="heading">
                        {dataTile.title}
                        </h3>
                    </div>
                    <div className="features__content">
                        {
                            data.map(item => (
                                <Featureitem key={item.id} item={item} />
                            ))           
                        }
                    </div>
                </div>
                <div className="col-xl-5 col-md-12">
                    <div className="features__image">
                        <img src={require ('../../../assets/images/layout/item-03.png')} alt="ICOLand" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Feature;