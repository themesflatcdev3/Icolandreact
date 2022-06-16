import React , {useState } from 'react';
import Button from '../../button/button-st1';
import Button2 from '../../button/button-st2';
import PropTypes from 'prop-types';
import '../styles.scss'

Banner.propTypes = {
    data : PropTypes.array,
};

function Banner (props) {



    const [dataTitle] = useState(
        {   
            subtitle : 'Smart and secure way to invest in crypto',
            title : 'Faster, Cheaper and more Powerful DeFi',
            desc : 'Bringing the speed and convenience of centralized exchanges to DeFi while remaining fully trustless and transparent',
        }
    )

    return (
        <section className="banner-top style-5">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="banner-top__content">
                        <h6 className="sub-title">{dataTitle.subtitle}</h6>
                        <h2 className="title">{dataTitle.title}</h2>
                        <p className="desc">{dataTitle.desc}</p>
                        <div className="button">
                            <Button title='Buy Tokens now' addclass='style-5' path='#' />
                            <Button2 title='White paper' addclass='style-3' path='#' />
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="banner-top__image">
                        <img src={require ('../../../assets/images/layout/banner-5.png')} alt="ICOLand" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Banner;