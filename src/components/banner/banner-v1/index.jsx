import React , { useEffect , useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles.scss'

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

    const [dataBanner] = useState(
        {   
            desc_sale:'For the Black Friday weekend',
            sale :'75% SAVE',
            title : 'Powering Data for the new equity blockchain.',
            desc: 'The platform helps investors to make easy to purchase and sell their tokens',
            token_bar1:'1,450 Tokens',
            token_bar2:'150,000 Tokens',
        }
    )

    return (
        <div className="banner-top style-1">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-12" data-aos="zoom-in" data-aos-duration="800">
                        <div className="banner-top__content">
                            <div className="sale-top">
                                <Link to="#">{dataBanner.sale}</Link>
                                <p>{dataBanner.desc_sale}</p>
                            </div>
                            <h2 className="title">{dataBanner.title}</h2>
                            <p className="desc">{dataBanner.desc}</p>

                            <div className="button">
                                <Link className="btn-action style-1" to="/sign-up"><span>REGISTER & BUY TOKEN NOW</span><span className="icon-arrow"></span></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12" data-aos="fade-up" data-aos-duration="800">
                        <div className="banner-top__sale">
                            <div className="sale-content">
                                <h3>Token sale End In</h3>
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
                                        <h6>Raised - <span>{dataBanner.token_bar1}</span></h6>
                                        <h6>Target - <span>{dataBanner.token_bar2}</span></h6>
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

                                <div className="sale-bottom">
                                    <ul className="list-coin">
                                        <li><Link to="#"><span className="icon-bitcoin"></span></Link></li>
                                        <li>
                                            <Link to="#">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g clipPath="url(#clip0_2162_9675)">
                                                    <path d="M5.40872 12L2.71735 14.695L0 12L2.71635 9.281L5.40872 12ZM11.9883 5.414L16.6238 10.054L19.3411 7.336L11.9883 0L4.63547 7.36L7.35282 10.078L11.9883 5.414ZM21.2602 9.281L18.5679 12L21.2842 14.719L23.9996 12L21.2602 9.281ZM11.9883 18.586L7.35282 13.922L4.63547 16.641L11.9883 24L19.3411 16.64L16.6238 13.922L11.9883 18.586ZM11.9883 14.696L14.7046 11.976L11.9883 9.282L9.27195 12L11.9883 14.695V14.696ZM40.5544 14.976V14.93C40.5544 13.172 39.6173 12.281 38.0958 11.695C39.0319 11.18 39.8281 10.335 39.8281 8.859V8.813C39.8281 6.75 38.1657 5.414 35.4963 5.414H29.3853V18.563H35.6372C38.6103 18.586 40.5544 17.367 40.5544 14.977V14.976ZM36.9479 9.352C36.9479 10.336 36.1517 10.734 34.864 10.734H32.1956V7.945H35.0518C36.2696 7.945 36.9479 8.437 36.9479 9.305V9.352ZM37.6742 14.602C37.6742 15.586 36.902 16.032 35.6362 16.032H32.1956V13.148H35.5433C37.0189 13.148 37.6742 13.688 37.6742 14.578V14.602ZM46.6185 18.586V5.414H43.7153V18.563H46.6185V18.586ZM62.1663 18.586V5.414H59.3091V13.524L53.1511 5.414H50.4817V18.563H53.3389V10.219L59.7077 18.586H62.1653H62.1663ZM78.1807 18.586L72.5392 5.344H69.8708L64.2273 18.586H67.2014L68.3952 15.633H73.9448L75.1386 18.586H78.1827H78.1807ZM72.9128 13.078H69.4242L71.1805 8.813L72.9128 13.078ZM91.9732 18.586V5.414H89.116V13.524L82.958 5.414H80.2886V18.563H83.1458V10.219L89.5146 18.586H91.9722H91.9732ZM106.888 16.453L105.038 14.602C104.007 15.539 103.094 16.148 101.573 16.148C99.325 16.148 97.7565 14.273 97.7565 12.023V11.953C97.7565 9.703 99.348 7.852 101.573 7.852C102.884 7.852 103.915 8.414 104.945 9.328L106.794 7.195C105.577 6 104.101 5.156 101.62 5.156C97.5927 5.156 94.7595 8.226 94.7595 11.953V12C94.7595 15.773 97.6387 18.773 101.503 18.773C104.031 18.797 105.53 17.906 106.888 16.453ZM119.228 18.586V16.008H112.086V13.242H118.29V10.664H112.086V7.992H119.134V5.414H109.229V18.563H119.228V18.586Z" fill="white"/>
                                                    </g>
                                                    <defs>
                                                    <clipPath id="clip0_2162_9675">
                                                    <rect width="24" height="24" fill="white"/>
                                                    </clipPath>
                                                    </defs>
                                                </svg>
                                            </Link>
                                        </li>
                                        <li><Link to="#"><span className="icon-coinp"></span></Link></li>
                                        <li><Link to="#"><span className="icon-kyber-network"></span></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;