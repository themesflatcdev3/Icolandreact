import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Tokenitem from '../token-details-itemv2';
import '../styles.scss';

Tokendetails.propTypes = {
    data : PropTypes.array,
};

function Tokendetails(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            title: 'ICO Token details',
            subtitle : 'Join the industry leaders to discuss where the markets are heading. We accept token payments.',
        }
    )

    return (
        <section className="token-details style-3" id="sales">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h3 className="heading">{dataTitle.title}</h3>
                        <p className="fs-17 mt-16 pd24">{dataTitle.subtitle}</p>
                    </div>
                </div>
            </div>

            <div className="row">
                {
                    data.slice(12,18).map(item => (
                        <Tokenitem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </section>
    );
}

export default Tokendetails;