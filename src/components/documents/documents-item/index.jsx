import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
Documents.propTypes = {
    item: PropTypes.object,
};

function Documents(props) {
    const {item} = props;

    return (
        <div className="col-xl-3 col-md-6">
                    <div className="document-box">
                        <div  className={`card-title ${item.classAction}`}>
                            <img src={item.img} alt="ICOLand" />
                            <Link className="fs-16" to="#">{item.title}</Link>
                        </div>
                        <div className="content">
                            <Link to="#" className="title">{item.subtitle}</Link>
                            <Link to="#" className="download"><span className="icon-Group"></span>PDF</Link>
                        </div>
                    </div>
        </div>
    );
}

export default Documents;