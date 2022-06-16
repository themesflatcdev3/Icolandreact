import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Teampitem from '../team-item-v5';
import '../styles.scss'

Team.propTypes = {
    data : PropTypes.array,
};

function Team(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            subtitle: 'Team',
            title: 'Meet our Solutions',
            desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam est, elit venenatis nulla. Sodales netus viverra ipsum consequat.',
        }
    )

    return (
        <section className="section-team style-4" id="team">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h6 className="sub-title">{dataTitle.subtitle}</h6>
                        <h3 className="title">{dataTitle.title}</h3>
                        <p className="mt-15 fs-20 pd22">{dataTitle.desc}</p>
                    </div>
                </div>
            </div>
            <div className="row mt-27 justify-content-center" data-aos="fade-up" data-aos-duration="1000">
                {
                    data.slice(4,11).map(item => (
                        <Teampitem key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    </section>
    );
}

export default Team;