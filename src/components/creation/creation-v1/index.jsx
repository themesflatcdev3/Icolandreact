import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Creationtitem from '../creation-item';
import '../styles.scss'

Contact.propTypes = {
    data : PropTypes.array,
};

function Contact(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            title: 'Creation',
            subtitle : 'The most technologically advanced species will not stop any time soon...',
        }
    )

    return (
        <section className="creation" id="creation">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center" data-aos="fade-up" data-aos-duration="1000">
                        <h3 className="title">{dataTitle.title}</h3>
                        <p className="desc">{dataTitle.subtitle}</p>
                    </div>
                    <div className="creation__main">
                    {
                        data.map(item => (
                            <Creationtitem key={item.id} item={item} />
                        ))           
                    }
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Contact;