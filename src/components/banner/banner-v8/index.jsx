import React , {useState,useEffect } from 'react';
import Button from '../../button/button-st1';
import PropTypes from 'prop-types';
import '../styles.scss'

Banner.propTypes = {
    data : PropTypes.array,
};

function Banner (props) {

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

    const [dataTitle] = useState(
        {   
            title : 'Programmable Money For The Internet',
            desc : 'IcoCoin is a public blockchain protocol deploying a suite of algorithmic decentralized stablecoins which underpin a thriving ecosystem that brings DeFi to the masses.',
        }
    )

    return (
        <section className='mobie-pb0'>
            <div className="banner-top style-8">
            <div className="container">
            <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="banner-top__content">
                        <h2 className="title">{dataTitle.title}</h2>
                        <p className="desc">{dataTitle.desc}</p>
                        <div className="button">
                            <Button title='GET TOKEN NOW' addclass='style-5' path='#'></Button>
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
        </div>
        <div className="banner-top__main">
                <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="banner-top__sale">
                                
                                    <div className="countdown">
                                        <p className="fs-17">Token sale End In!</p>
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
                                    </div>
                                    
                                        <div className="token-bar">
                                            <div className="top">
                                                <h6>Raised - <span>1,450 Tokens</span></h6>
                                                <h6>Target - <span>150,000 Tokens</span></h6>
                                            </div>
                                            <div className="main">
                                                <div className="progress-token">
                                                    <p className="fs-14">60,490</p>
                                                </div>
                                            </div>

                                            <div className="bottom">
                                                <p className="fs-14">Soft cap</p>
                                                <p className="fs-14">Crowdsale</p>
                                                <p className="fs-14">Hard cap</p>
                                            </div>
                                        </div>

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
        </div>
    </section>
                    
    );
}

export default Banner;