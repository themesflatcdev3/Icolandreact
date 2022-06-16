import React , {useState} from 'react';
import PropTypes from 'prop-types';
import GalleryItem from '../gallery-item';
import Button from '../../button/button-st2';
import '../styles.scss'

Gallery.propTypes = {
    data : PropTypes.array,
};

function Gallery(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            title: 'NFT Musical arts',
            subtitle : 'Gallery',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam etiam viverra tellus imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        }
    )

    return (
        <section className="gallery" id="gallery">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="block-text">
                        <h6 className="sub-heading">{dataTitle.subtitle}</h6>
                        <h3 className="heading">{dataTitle.title}</h3>
                        <p className="fs-20">{dataTitle.desc}</p>
                        <Button title='View more' addclass='style-6' path='#' />
                    </div>
                </div>
                {
                    data.map(item => (
                        <GalleryItem key={item.id} item={item} /> 
                    ))
                }
            </div>
        </div>
    </section>
    );
}

export default Gallery;