import React , {useState,useEffect} from 'react';
import PropTypes from 'prop-types';
import Button from '../../button/button-st1';
import Tokenitem from '../token-details-itemv1';
import '../styles.scss';

Tokendetails.propTypes = {
    data : PropTypes.array,
};

function Tokendetails(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            title: 'Pre-Sale & Sale Information',
            subtitle : 'Token Sale',
            desc:'Join the industry leaders to discuss where the markets are heading. We accept token payments.',
            titletoken1: 'Token Sale Stage End In',
            titletoken2: 'Sale Information',
        }
    )
    const [countdownDate] = useState(new Date('6/30/2022').getTime());
    const [state, setState] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });


    useEffect(() => {
        setInterval(() => setNewTime(), 1000);
    },);

    const setNewTime = () => {
        if (countdownDate) {
        const currentTime = new Date().getTime();

        const distanceToDate = countdownDate - currentTime;

        let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
        let hours = Math.floor(
            (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
        );
        let minutes = Math.floor(
            (distanceToDate % (1000 * 60 * 60)) / (1000 * 60),
        );
        let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

        const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        days = `${days}`;
        if (numbersToAddZeroTo.includes(hours)) {
            hours = `0${hours}`;
        } else if (numbersToAddZeroTo.includes(minutes)) {
            minutes = `0${minutes}`;
        } else if (numbersToAddZeroTo.includes(seconds)) {
            seconds = `0${seconds}`;
        }

        setState({ days: days, hours: hours, minutes, seconds });
        }
    };

    return (
        <section className="token-details style-2" id="sales">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h6 className="sub-heading">{dataTitle.subtitle}</h6>
                        <h3 className="heading">{dataTitle.title}</h3>
                        <p className="text">
                            {dataTitle.desc}
                        </p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-xl-6 col-md-12" data-aos="fade-up" data-aos-duration="1000">
                    <div className="banner-top__sale">
                        <div className="sale-content">
                            <h5>{dataTitle.titletoken1}</h5>
                            <div className="js-countdown">
                                <div className="countdown__timer">
                                    <div className="countdown__item">
                                        {state.days || '0'}
                                    </div>
                                    <div className="countdown__item countdownhours">
                                    {state.hours || '00'}
                                    </div>
                                    <div className="countdown__item countdownminutes">
                                    {state.minutes || '00'}
                                    </div>
                                    <div className="countdown__item countdownseconds">
                                    {state.seconds || '00'}
                                    </div>
                                </div>
                                </div>

                            <div className="token-bar">
                                <div className="top">
                                    <h6>Soft cap</h6>
                                    <h6>Hard cap</h6>
                                   
                                </div>
                                <div className="main">
                                    <div className="animated-progress progress-blue">
                                        <span data-progress="35"></span>
                                      </div>
                                </div>

                                <div className="bottom">
                                    <h6><span>1,450</span>Raised</h6>
                                    <h6><span>1,450</span>Target</h6>
                                </div>

                                <div className="button">
                                    <Button title='Buy Tokens Now' path='#'></Button>
                                </div>
                            </div>

                            <div className="sale-bottom">
                                <ul className="list-coin">
                                    <li><span className="icon-bitcoin"></span></li>
                                    <li><span className="icon-coinp"></span></li>
                                    <li><span className="icon-coinp"></span></li>
                                    <li><span className="icon-kyber-network"></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12" data-aos="fade-up" data-aos-duration="1000">
                    <div className="sale-info">
                        <h5 className="heading">{dataTitle.titletoken2}</h5>
                        {
                            data.slice(6,12).map(item => (
                                <Tokenitem key={item.id} item={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Tokendetails;