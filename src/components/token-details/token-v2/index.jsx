import React , {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles.scss';
import { Chart, PieController, ArcElement, Legend, Tooltip, Title } from 'chart.js';
import { Pie } from 'react-chartjs-2';
Chart.register(PieController, ArcElement, Title, Legend, Tooltip);


Tokendetails.propTypes = {
    data : PropTypes.array,
};


function Tokendetails(props) {
    const options = { plugins: { legend: false }}
    const data1 = {
        datasets: [{
            label: 'My First Dataset',
                data: [40, 30, 10 , 10 , 10 ],
                backgroundColor: [
                    '#1998CA',
                    '#343EBF',
                    '#A00763',
                    '#DEAD2F',
                    '#1CA151'
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
        data: [40, 30, 10 , 10 , 10 ],
        backgroundColor: [
            '#1998CA',
            '#343EBF',
            '#A00763',
            '#DEAD2F',
            '#1CA151'
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

    const [dataTile] = useState(
        {
            title1: 'Token Distribution',
            title2: 'Token Allocation',
            desc:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam est, elit venenatis nulla.',
            desc2:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget quam est, elit venenatis nulla.',
        }
    )

    return (
        <section className="section-token" id="token">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="token-box">
                        <h3 className="title">{dataTile.title1}</h3>
                        <p className="text">{dataTile.desc}</p>

                        <div className="chart-bar">
                            <Pie data={data1} options={options}></Pie>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="token-box s2">
                        <h3 className="title">{dataTile.title2}</h3>
                        <p className="text">{dataTile.desc2} </p>

                        <div className="chart-bar">
                            <Pie data={data2} options={options}></Pie>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Tokendetails;