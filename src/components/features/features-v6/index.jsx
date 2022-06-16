import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Featureitem from '../features-item6';
import '../styles.scss'
Feature.propTypes = {
    data : PropTypes.array,
};

function Feature(props) {
    const {data} = props;
    const [dataTile] = useState(
        {
            title: 'OUR KEY FEATURE',
            desc: 'The ICOLand Network solves this problem by offering a suite of integrated solutions.',
        }
    )

    return (
        <section className="features style-7" id="features">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h2 className="heading">
                            {dataTile.title}
                        </h2>
                        <p className="fs-20 mt-16"> {dataTile.desc}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                {
                    data.slice(8,12).map(item => (
                        <Featureitem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </section>
    );
}

export default Feature;