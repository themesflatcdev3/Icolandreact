import React , { useEffect , useState } from 'react';
import Button from '../../button/button-st1';
import PropTypes from 'prop-types';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Banneritem from '../banner-item-swiper';

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
            title : 'WE ARE APPROVING CORGIS',
            title2 : 'WHAT IS  APPROVING CORGIS?',
            subtitle : 'The only approval that matters',
            subtitle2 : 'Approving Corgis is a collection of 9,999 adorable corgis living on the Ethereum blockchain',
            title3 : 'CORGIS SPOTLIGHT',
            subtitle3 : 'Literally no two Corgis are alike. With a wide array of fur colors, facial features, outfits, headwear, accessories',
            token_bar1:'1,450 Tokens',
            token_bar2:'150,000 Tokens',
        }
    )

    return (
        <section className="banner-top style-6">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h2 className="heading">{dataBanner.title}</h2>
                        <h5 className="sub-heading">{dataBanner.subtitle}</h5>
                    </div>
                
                    <div className="banner-top__sale">
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

                        <ul className="list-coin">
                                <li><span className="icon-bitcoin"></span></li>
                                <li><span className="icon-coinp"></span></li>
                                <li><span className="icon-coinp"></span></li>
                                <li><span className="icon-kyber-network"></span></li>
                         </ul>                 
                    </div>
                    <div className="banner-top__main center">
                        <img src={require ('../../../assets/images/layout/banner-nft.png')} alt="ICOLand" />

                        <div className="buy-token-box">
                            <h2 className="heading">
                                {dataBanner.title2}
                            </h2>
                            <p className="fs-20">{dataBanner.subtitle2}</p>
                            <Button title='BUY TOKEN NOW' addclass='style-6' path='#' />
                                <Swiper
                                    className='swiper banner-nft'
                                    modules={[ Autoplay ]}
                                    spaceBetween={20}
                                    coverflowEffect ={
                                       {
                                        stretch: 0,
                                        depth: 100,
                                        modifier: 1,
                                        slideShadows: true,
                                       }
                                      }
                                    breakpoints={{
                                        991: {
                                            slidesPerView: 4,
                                        },
                                    }}
                                    loop
                                    autoplay={{
                                        delay: 1,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    speed= {2000}
                                >
                                {
                                    data.map(item => (
                                        <SwiperSlide key={item.id}>
                                            <Banneritem item={item} />
                                        </SwiperSlide>
                                    ))
                                }
                                
                            </Swiper>
                            <h3 className="title">{dataBanner.title3}</h3>
                            <p className="fs-20">{dataBanner.subtitle3}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Banner;