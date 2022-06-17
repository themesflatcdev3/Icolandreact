import React , { useEffect , useState } from 'react';
import Button from '../../button/button-st1';
import Button2 from '../../button/button-st2';
import PropTypes from 'prop-types';
import Banneritem from '../banner-item-v2';
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

    const [dataTitle] = useState(
        {   
            title : 'decentralised',
            title2 : 'music platform',
            title3 : 'built on Ethereum',
            title4 : 'Token sale End In!',
            desc : 'Discover songs, claim limited editions and support your favorite artists. Buy, sell or auction any audio file into a unique NFT with the power of blockchain.',
        }
    )

    return (
        <section className="banner-top style-3">
        <div className="container">
            <div className="row">
                <div className="col-xl-6 col-md-12">
                    <div className="banner-top__content">
                        <h2 className="title">{dataTitle.title}<span>{dataTitle.title2}</span>{dataTitle.title3}</h2>
                        <p className="desc">{dataTitle.desc}</p>
                        <div className="button">
                            <Button title='BUY TOKEN' addclass='style-3' path='#' />
                            <Button2 title='White paper' addclass='style-2' path='#' />
                        </div>

                        <ul className="content-list">
                        {
                            data.slice(0,3).map(item => (
                                <Banneritem key={item.id} item={item} />
                            ))           
                        }
                        </ul>
                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="banner-top__sale">
                        <img src={require ('../../../assets/images/layout/img-music.jpg')} alt="ICOLand" />
                        <div className="sale-content">
                            <h6>{dataTitle.title4}</h6>
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