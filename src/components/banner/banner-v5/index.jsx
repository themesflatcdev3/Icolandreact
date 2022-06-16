import React , { useEffect , useState } from 'react';
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
            title : 'Join the future of ICOLand crypto trading strategies',
            title2 : '50.000.000 HVR to be sold!',
            desc : 'IcoCoin is a public blockchain protocol deploying a suite of algorithmic decentralized stablecoins which underpin a thriving ecosystem that brings DeFi to the masses.',
            desc2:'During Pre-Sale, get 5x tokens or 50.000 HVR per Ether. During regular sale, it will be 10.000 HVR per Ether.'
        }
    )

    return (
        <section className="banner-top style-4">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="banner-top__content">
                        <h2 className="title">{dataTitle.title}</h2>
                        <p className="desc">{dataTitle.desc}</p>
                        <div className="button">
                        <Button title='BUY TOKEN NOW' addclass='style-4' path='#' />
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="banner-top__sale">
                        <div className="block-text">
                            <h3 className="heading">{dataTitle.title2}</h3>
                            <p className="fs-17">{dataTitle.desc2}</p>
                        </div>
                        <div className="sale-content">
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
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Banner;