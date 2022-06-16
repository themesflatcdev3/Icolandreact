import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../../button/button-st1';
import '../styles.scss'

Community.propTypes = {
    data : PropTypes.array,
};

function Community(props) {
    const [dataTitle] = useState(
        {
            title: 'Join our Community',
            subtitle : 'Community',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim sed pulvinar nisl amet, viverra nulla ut. Aliquet nunc justo, bibendum nisl varius fringilla odio eu. Ut et, nullam tristique at ultrices. Viverra eget ultrices risus risus massa adipiscing adipiscing. Integer tempus aliquam vitae urna, ipsum mattis hendrerit quam.'
        }
    )

    return (
        <section className="join-now style-3" id="contact">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="join-now__main center">
                        <h6 className="sub-heading">{dataTitle.subtitle}</h6>
                        <h3 className="heading">{dataTitle.title}</h3>
                        <p>{dataTitle.desc}</p>
                        <div className="join-now__button">
                            <Button title='Join our discord' addclass='style-3' path='#' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Community;