import React , {useState} from 'react';
import PropTypes from 'prop-types';
import AccordionItem from '../accordion-item2';
import '../styles.scss'

About.propTypes = {
    data : PropTypes.array,
};

function About(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            subtitle:'Questions',
            title: 'FAQ',
        }
    )

    return (
        <section className="section-faq style-3">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h6 className="sub-heading">{dataTitle.subtitle}</h6>
                        <h3 className="heading">{dataTitle.title}</h3>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="flat-accordion">
                        {
                            data.slice(0,4).map(item => (
                                <AccordionItem key={item.id} item={item} />
                            ))
                        }                                                     
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default About;