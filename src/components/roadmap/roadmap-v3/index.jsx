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
                                        991: {
                                            slidesPerView: 2,
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

                        {/* <div className="swiper-button-prev">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M30 2.5C45.1878 2.5 57.5 14.8122 57.5 30C57.5 45.1878 45.1878 57.5 30 57.5C14.8122 57.5 2.5 45.1878 2.5 30C2.5 14.8122 14.8122 2.5 30 2.5ZM44.3854 30.625C44.3854 29.2443 43.2661 28.125 41.8854 28.125H25.4209L32.4031 21.1428C33.3795 20.1665 33.3795 18.5835 32.4031 17.6072C31.4268 16.6309 29.8439 16.6309 28.8676 17.6072L17.6194 28.8555C17.6134 28.8615 17.6073 28.8675 17.6014 28.8736C17.3697 29.1095 17.1943 29.3799 17.0751 29.668C16.9537 29.9606 16.8864 30.2813 16.8854 30.6175L16.8854 30.625L16.8854 30.6325C16.8874 31.3116 17.1601 31.927 17.6014 32.3764C17.6073 32.3825 17.6134 32.3885 17.6194 32.3945L28.8676 43.6428C29.8439 44.6191 31.4268 44.6191 32.4031 43.6428C33.3795 42.6665 33.3795 41.0835 32.4031 40.1072L25.4209 33.125H41.8854C43.2661 33.125 44.3854 32.0057 44.3854 30.625Z" stroke="url(#paint0_linear_2665_10765)" stroke-linejoin="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_2665_10765" x1="57.5" y1="2.24537" x2="23.9899" y2="68.1691" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#5C1594" offset='2'/>
                                <stop offset="1" stop-color="#210A5C"/>
                                </linearGradient>
                                </defs>
                                </svg>
                                
                        </div>
                        
                        <div className="swiper-button-next">
                            <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M30 2.5C14.8122 2.5 2.5 14.8122 2.5 30C2.5 45.1878 14.8122 57.5 30 57.5C45.1878 57.5 57.5 45.1878 57.5 30C57.5 14.8122 45.1878 2.5 30 2.5ZM15.6146 30.625C15.6146 29.2443 16.7339 28.125 18.1146 28.125H34.5791L27.5969 21.1428C26.6205 20.1665 26.6205 18.5835 27.5969 17.6072C28.5732 16.6309 30.1561 16.6309 31.1324 17.6072L42.3806 28.8554C42.3867 28.8615 42.3927 28.8675 42.3986 28.8736C42.6303 29.1095 42.8057 29.3799 42.9249 29.668C43.0463 29.9606 43.1136 30.2813 43.1146 30.6175L43.1146 30.625L43.1146 30.6325C43.1126 31.3116 42.8399 31.927 42.3986 32.3764C42.3927 32.3825 42.3867 32.3885 42.3806 32.3945L31.1324 43.6428C30.1561 44.6191 28.5732 44.6191 27.5969 43.6428C26.6205 42.6665 26.6205 41.0835 27.5969 40.1072L34.5791 33.125H18.1146C16.7339 33.125 15.6146 32.0057 15.6146 30.625Z" fill="url(#paint0_linear_2665_10764)"/>
                                <defs>
                                <linearGradient id="paint0_linear_2665_10764" x1="2.5" y1="2.24537" x2="36.0101" y2="68.1691" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#5C1594" offset='2'/>
                                <stop offset="1" stop-color="#210A5C"/>
                                </linearGradient>
                                </defs>
                                </svg>
                                                               
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Feature;