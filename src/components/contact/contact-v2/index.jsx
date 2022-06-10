import React , {useState} from 'react';
import Button from '../../button/button-st1';
import PropTypes from 'prop-types';
import '../styles.scss'

Contact.propTypes = {
    data : PropTypes.array,
};

function Contact(props) {
    const [dataTitle] = useState(
        {
            title: 'Join our Community',
            subtitle : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim sed pulvinar nisl amet, viverra nulla ut. Aliquet nunc justo, bibendum nisl varius fringilla odio eu. Ut et, nullam tristique at ultrices. Viverra eget ultrices risus risus massa adipiscing adipiscing. Integer tempus aliquam vitae urna, ipsum mattis hendrerit quam.',
        }
    )

    return (
        <section className="join-now" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="join-now__main">
                        <h3>{dataTitle.title}</h3>
                        <p>{dataTitle.subtitle}</p>
                        <div className="join-now__button">
                            <Button title='JOIN COMMUNITY' addclass='style-2' path='/contact' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}

export default Contact;