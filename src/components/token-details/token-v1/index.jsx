import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Tokenitem from '../token-item';
import Button from '../../button/button-st2';
import '../styles.scss';

Tokendetails.propTypes = {
    data : PropTypes.array,
};

function Tokendetails(props) {
    const {data} = props;
    const [dataTile] = useState(
        {
            title: 'WE ARE GROWING',
            subtitle : 'Tokenomics',
            desc:'For each transaction, an 12% tax fee is applied. This fee is then divided for different purpose of benefits.',
            number : '1,000,000',
            text:'Total supply',
        }
    )

    return (
        <section className="token style-3" id="token">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="block-text">
                        <h6 className="sub-heading">{dataTile.subtitle}</h6>
                        <h3 className="heading">{dataTile.title}</h3>
                        <p className="desc">{dataTile.desc}</p>
                        <Button title='White paper' addclass='style-6' path='#' />
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="token__content">
                        <div className="top">
                            <h2 className="number">{dataTile.number}</h2>
                            <h6 className="text">{dataTile.text}</h6>
                        </div>
                        <ul className="list">
                            {
                                data.map(item => (
                                    <Tokenitem key={item.id} item={item} />
                                ))           
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Tokendetails;