import React , { useEffect , useState } from 'react';
import Button from '../../button/button-st1';
import Banneritem from '../banner-item';
import PropTypes from 'prop-types';
import '../styles.scss'

Banner.propTypes = {
    data : PropTypes.array,
};

function Banner (props) {
    const {data} = props;
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
            title : 'Mint, sell, and',
            title2 : 'trade NFTs',
            title3 : 'at scale.',
            desc: 'Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.',
        }
    )

    return (
        <section className="banner-top style-2">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="banner-top__content">
                        <h2 className="title">{dataBanner.title} <span>{dataBanner.title2}</span>{dataBanner.title3} </h2>
                        <p className="desc">{dataBanner.desc}</p>
                        <div className="button">
                            <Button title='BUY TOKEN' addclass='style-2' path='/sign-in' />
                        </div>

                        <ul className="content-list">
                        {
                            data.map(item => (
                                <Banneritem key={item.id} item={item} />
                            ))           
                        }
                        </ul>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="banner-top__sale">
                    <img src={require ('../../../assets/images/layout/banner01.png')} alt="ICOLand" />
                        <div className="sale-content">
                            <h6>Token sale End In!</h6>

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