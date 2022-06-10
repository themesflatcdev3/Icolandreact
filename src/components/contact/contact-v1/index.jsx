import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Contactitem from '../contact-item';
import '../styles.scss'

Contact.propTypes = {
    data : PropTypes.array,
};

function Contact(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            title: 'Contact Us',
            subtitle : 'We are always open and we welcome and questions you have for our team. If you wish to get in touch, please fill out the form below.',
        }
    )

    return (
        <section className="contact" id="contact">
         <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="block-text">
                        <h3>{dataTitle.title}</h3>
                        <p className="mt-12">{dataTitle.subtitle}</p>
                    </div>
                    <ul className="contact__list">
                    {
                        data.map(item => (
                            <Contactitem key={item.id} item={item} />
                        ))           
                    }
                    </ul>
                </div>
                <div className="col-md-6">
                    <div className="contact__form" >
                        <form action="#">
                            <input type="text" placeholder="Full Name" />
                            <input type="email" placeholder="Email" />
                            <input type="tel" placeholder="Phone Number" />
                            <textarea id="exampleFormControlTextarea1" rows="3" placeholder="Message"></textarea>

                            <button type="submit" className="btn-action"><span>SUBMIT YOUR MESSAGE</span></button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Contact;