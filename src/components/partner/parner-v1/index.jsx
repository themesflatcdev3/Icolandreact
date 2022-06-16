import React  from 'react';
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
    return (
        <section className="section-partner style-2" id="partner">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                <Swiper
                    className='swiper swiper-partner-2'
                    modules={[ Autoplay ]}
                    spaceBetween={30}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                        600: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                
                        991: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                    }}
                >
                {
                    data.map(item => (
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
    </section>
    );
}

export default About;