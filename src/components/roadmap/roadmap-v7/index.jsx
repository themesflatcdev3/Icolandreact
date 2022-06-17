import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Roadmapitem from '../roadmap-item-v7';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Pagination} from 'swiper';
import '../styles.scss'
Feature.propTypes = {
    data : PropTypes.array,
};

function Feature(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            desc: 'We’re slowly transforming the website into the best place for beginners to learn about cryptocurrencies.',
            title: 'ROADMAP',
        }
    )

    return (
        <section className="road-map style-7 mobie-pb0" id="roadmap">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-text center">
                            <h2 className="heading">{dataTitle.title}</h2>
                            <p className="fs-20">{dataTitle.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="road-map__main" data-aos="fade-up" data-aos-duration="1000">
                        <Swiper
                            className='swiper swiper-roadmap-7'
                            modules={[Pagination ]}
                            spaceBetween={30}
                            pagination={{ clickable: true }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 30,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1024: {
                                    slidesPerView: 7,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {
                                data.slice(5,14).map(item => (
                                    <SwiperSlide key={item.id}>
                                        <Roadmapitem item={item} />
                                    </SwiperSlide>
                                ))
                            }                
                        </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Feature;