import React , {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles.scss';
import { Pie } from 'react-chartjs-2';
import { Chart, PieController, ArcElement, Legend, Tooltip, Title } from 'chart.js';
Chart.register(PieController, ArcElement, Title, Legend, Tooltip);

Tokendetails.propTypes = {
    data : PropTypes.array,
};


function Tokendetails(props) {
    const options = { plugins: { legend: false }}
     const data = {
        labels: [
            'Marketing',
            'Bussiness Development',
            'Product Development',
            'Reserve',
            'Reserve',
            'Token Sale'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [25, 25, 10 , 10 , 10 , 20],
            backgroundColor: [
                '#3D88FB',
                '#5637C8',
                '#00D199',
                '#C87B07',
                '#A92535',
                '#9116CD'
                ], 
                type: 'doughnut',  
        }]
      };

    const [dataTile] = useState(
        {
            title: 'Token Allocation & Funds Distribution',
            desc:'Join the industry leaders to discuss where the markets are heading. We accept token payments.',
            title2: 'Distribution',
            title3: 'Funding Allocation',
        }
    )

    return (
        <section className="section-token style-7" id="token">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h2 className="heading">{dataTile.title}</h2>
                        <p className="fs-17">{dataTile.desc}</p>

                    </div>
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="token-content center">
                        <h5 className="title">{dataTile.title2}</h5>
                        <div className="chart-bar">
                            <Pie data={data} options={options}></Pie>
                        </div>
                    </div>
                   
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="token-content center s2">
                        <h5 className="title">{dataTile.title3}</h5>
                        <div className="chart-bar">
                            <Pie data={data} options={options}></Pie>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Tokendetails;