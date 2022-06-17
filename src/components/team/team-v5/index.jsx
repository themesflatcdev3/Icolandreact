import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Teampitem from '../team-item-v4';
import '../styles.scss'

Team.propTypes = {
    data : PropTypes.array,
};

function Team(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            title: 'Our team',
            desc: 'With help from our teams, contributors and investors these are the milestones we are looking forward to achieve.',
        }
    )

    return (
        <section className="section-team style-3 mobie-pb0" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-text center">
                            <h3 className="title">{dataTitle.title}</h3>
                            <p className="mt-16 fs-17 pd28">{dataTitle.desc}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-17" >
                    {
                        data.slice(3,7).map (item => (
                            <Teampitem key={item.id} item={item}/>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

export default Team;