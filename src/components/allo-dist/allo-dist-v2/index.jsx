import React , {useState} from 'react';
// import ProgressBar from 'react-bootstrap/ProgressBar';
import PropTypes from 'prop-types';
import { Pie } from 'react-chartjs-2';
import TokenItem from '../chart-item';
import { Chart, PieController, ArcElement, Legend, Tooltip, Title } from 'chart.js';

Chart.register(PieController, ArcElement, Title, Legend, Tooltip);

Allodist.propTypes = {
    data : PropTypes.array,
};

function Allodist(props) {
    const [dataTitle] = useState(
        {
            title: 'Token Allocation & Funds Distribution',
            desc : 'Join the industry leaders to discuss where the markets are heading. We accept token payments.',
            title2:'Distribution',
            title3:'Funding Allocation',
        }
    )
    const options = { plugins: { legend: false }}
    const {data} = props;
    const data1 = {
            datasets: [{
            data: [40, 30, 10, 10, 10],
            backgroundColor: [
                '#32B6EA',
                '#1CA151',
                '#DEAD2F',
                '#A00763',
                '#343EBF',
            ],
            type: 'doughnut',  
        }],
        labels: [
            'Marketing',
            'Bussiness Development',
            'Product Development',
            'Reserve',
            'Reserve',
            'Token Sale'
            
        ],
    };


    const data2 = {
        datasets: [{
            data: [40, 30, 10, 10, 10],
            backgroundColor: [
                '#32B6EA',
                '#1CA151',
                '#DEAD2F',
                '#A00763',
                '#343EBF',
            ],
            type: 'doughnut',
    }],
    labels: [
        'Marketing',
        'Bussiness Development',
        'Product Development',
        'Reserve',
        'Reserve',
        'Token Sale'
    ],
};


    return (
        <section className="section-token mobie-pb0" id="token">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="block-text center">
                            <h3 className="heading">{dataTitle.title}</h3>
                            <p className="fs-17">{dataTitle.desc}</p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="token-box" data-aos="fade-up" data-aos-duration="1000">
                            <h3 className="title">{dataTitle.title2}</h3>

                            <div className="chart-bar">
                            <Pie data={data1} options={options}></Pie>
                            </div>
                            <div className="bottom-chart">
                                {
                                    data.slice(0,5).map (item => (
                                        <TokenItem key={item.id} item={item}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="token-box s2" data-aos="fade-up" data-aos-duration="1000">
                            <h3 className="title">{dataTitle.title3}</h3>

                            <div className="chart-bar">
                                <Pie data={data2} options={options}></Pie>
                            </div>

                            <div className="bottom-chart">
                            {
                                    data.slice(5,10).map (item => (
                                        <TokenItem key={item.id} item={item}/>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Allodist;