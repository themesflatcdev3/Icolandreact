import React , {useState} from 'react';
import PropTypes from 'prop-types';
import DocumentItem from '../documents-item';
import '../styles.scss'

Documents.propTypes = {
    data : PropTypes.array,
};

function Documents(props) {
    const {data} = props;
    const [dataTitle] = useState(
        {
            title: 'Documents',
            subtitle : 'Download the whitepaper and learn about ICO Token, the unique ICO Crypto approach and the team/advisors.',
        }
    )

    return (
        <section className="documents style-2 mobie-pb0" id="document">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h3>{dataTitle.title}</h3>
                        <p className="mt-12 pd28">{dataTitle.subtitle}</p>
                    </div>
                </div>
            </div>
            <div className="row mt-67">
                {
                    data.map(item => (
                        <DocumentItem key={item.id} item={item} />
                    ))  
                }
            </div>
        </div>
    </section>
    );
}

export default Documents;