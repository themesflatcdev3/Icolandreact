import React , {useState} from 'react';
import PropTypes from 'prop-types';
import ParnerItem from '../parner-item';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles.scss'

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {
    const {data} = props;

    const [dataTile] = useState(
        {
            title: 'Strategic Partners',
            desc : 'Join the industry leaders to discuss where the markets are heading. We accept token payments.'
        }
    )

    return (
        <section className="section-partner style-1" id="partner">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="partner__main">
                        <div className="block-text center">
                            <h3 className="heading">{dataTile.title}</h3>
                            <p className="fs-17">{dataTile.desc}
                            </p>
                        </div>
                        <div className="partner-content">
                        <Swiper
                    className='swiper swiper-partner'
                    modules={[ Autoplay ]}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        400: {
                            slidesPerView: 2,
                            spaceBetween: 60,
                        },
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 60,
                        },
                        750: {
                            slidesPerView: 4,
                            spaceBetween: 60,
                        },
                        991: {
                            slidesPerView: 5,
                            spaceBetween: 60,
                        },
                        1280: {
                            slidesPerView: 6,
                            spaceBetween: 60,
                        },
                    }}
                >
                {
                    data.slice(6,13).map(item => (
                        <SwiperSlide key={item.id}>
                            <div className="image">
                                <ParnerItem item={item} />
                            </div>
                        </SwiperSlide>
                    ))
                }           
                        </Swiper>
                        <Swiper
                    className='swiper swiper-partner'
                    modules={[ Autoplay ]}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        400: {
                            slidesPerView: 2,
                            spaceBetween: 60,
                        },
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 60,
                        },
                        750: {
                            slidesPerView: 4,
                            spaceBetween: 60,
                        },
                        991: {
                            slidesPerView: 5,
                            spaceBetween: 60,
                        },
                        1280: {
                            slidesPerView: 6,
                            spaceBetween: 60,
                        },
                    }}
                >
                {
                 data.slice(12,21).map(item => (
                        <SwiperSlide key={item.id}>
                            <div className="image">
                                <ParnerItem item={item} />
                            </div>
                        </SwiperSlide>
                    ))
                }           
                        </Swiper>
                        <Swiper
                    className='swiper swiper-partner'
                    modules={[ Autoplay ]}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        400: {
                            slidesPerView: 2,
                            spaceBetween: 60,
                        },
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 60,
                        },
                        750: {
                            slidesPerView: 4,
                            spaceBetween: 60,
                        },
                        991: {
                            slidesPerView: 5,
                            spaceBetween: 60,
                        },
                        1280: {
                            slidesPerView: 6,
                            spaceBetween: 60,
                        },
                    }}
                >
                {
                data.slice(18,27).map(item => (
                        <SwiperSlide key={item.id}>
                            <div className="image">
                                <ParnerItem item={item} />
                            </div>
                        </SwiperSlide>
                    ))
                }           
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default About;