import React , {useState} from 'react';
import PropTypes from 'prop-types';
import Roadmapitem from '../roadmap-item-v5';
import '../styles.scss'
Feature.propTypes = {
    data : PropTypes.array,
};

function Feature(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            desc: 'The use of crypto-currencies has become more widespread, and they are now increasingly accepted as a legitimate for transactions.',
            title: 'Road map',
        }
    )

    return (
        <section className="road-map style-4 mobie-pb0" id="roadmap">
            <img className="s1" src={require ('../../../assets/images/layout/rm-1.png')} alt="ICOLand" />
            <img className="s2" src={require ('../../../assets/images/layout/rm-2.png')} alt="ICOLand" />
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-text center">
                            <h3 className="heading">{dataTitle.title}</h3>
                            <p className="mt-16 fs-17">{dataTitle.desc}</p>
                        </div>

                        <div className="road-map__main">
                            {
                                data.slice(4,10).map (item => (
                                    <Roadmapitem key={item.id} item={item}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
    </section>
    );
}

export default Feature;