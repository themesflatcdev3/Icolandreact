import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Teamitem from '../team-item';
import '../styles.scss'

Team.propTypes = {
    data : PropTypes.array,
};

function Team(props) {
    const {data} = props;
    const [dataTeam] = useState(
        {
            title: 'Executive team',
            subtitle : 'Our team player alway finds effective ways to improve the product and process',
        }
    )

    return (
        <section className="section-team style-1" id="team">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h3>{dataTeam.title}</h3>
                        <p className="mt-12">{dataTeam.subtitle}</p>
                    </div>
                </div>
            </div>
            <div className="row mt-24">
            {
                data.slice(0,4).map(item => (
                    <Teamitem key={item.id} item={item} />
                ))           
            }
            </div>
        </div>
    </section>
    );
}

export default Team;