import React , {useState} from 'react';
import PropTypes from 'prop-types';
import DocumentItem from '../documents-item2';
import '../styles.scss'

Documents.propTypes = {
    data : PropTypes.array,
};

function Documents(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            title: 'Document    ',
            subtitle : 'Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.',
        }
    )

    return (
        <section className="document style-1" id="document">
        <div className="container">
            <div className="row">
                <div className="document__main">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="block-text center">
                                <h3 className="heading">{dataTitle.title}</h3>
                                <p className="desc">{dataTitle.subtitle}</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="document__content">
                            {
                                data.map(item => (
                                    <DocumentItem key={item.id} item={item} />
                                ))  
                            }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Documents;