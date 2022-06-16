import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Roadmapitem from '../roadmap-item-v3';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper';
import '../styles.scss'
Feature.propTypes = {
    data : PropTypes.array,
};

function Feature(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            title: 'THE ROADMAP',
        }
    )

    return (
        <section className="road-map style-6" id="roadmap">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h2 className="heading">{dataTitle.title}</h2>
                    </div>
                    <div className="road-map__main">
                    <Swiper
                                    className='swiper swiper-roadmap'
                                    modules={[Navigation, Autoplay ]}
                                    spaceBetween={30}
                                    navigation
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 1,
                                            spaceBetween: 30,
                                        },
                                        1024: {
                                            slidesPerView: 1,
                                            spaceBetween: 30,
                                        },
                                        1300: {
                                            slidesPerView: 2,
                                            spaceBetween: 30,
                                        },
                                    }}
                                >
                                {
                                    data.map(item => (
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