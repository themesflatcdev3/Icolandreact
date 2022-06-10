import React from 'react';
import PropTypes from 'prop-types';
Roadmap.propTypes = {
    item: PropTypes.object,
};

function Roadmap(props) {
    const {item} = props;

    return (
        <div className={`box-roadmap ${item.classAction}`}>
            <div className="title"><h5 className="fs-24">{item.title1}<span>{item.title2}</span></h5></div>
            <div className="content">
                <h5>{item.title}</h5>
                    <ul className="list">
                        <li className={`${item.classAction2}`}><span className={`${item.classIcon1}`}></span><p>{item.list1}</p></li>
                        <li className={`${item.classAction3}`}><span className={`${item.classIcon2}`}></span><p>{item.list2}</p></li>
                        <li className={`${item.classAction4}`}><span className={`${item.classIcon3}`}></span><p>{item.list3}</p></li>
                    </ul>
            </div>                            
        </div>
    );
}

export default Roadmap;