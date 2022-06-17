import React , {useState} from 'react';
import PropTypes from 'prop-types';
import '../styles.scss';
import {
    Chart as ChartJS,
    RadialLinearScale,
    ArcElement,
    Tooltip,
    Legend,
  } from 'chart.js';
import { PolarArea } from 'react-chartjs-2';
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

Tokendetails.propTypes = {
    data : PropTypes.array,
};


function Tokendetails(props) {
     const data = {
        labels: [
            'Red',
            'Green',
            'Yellow',
            'Grey',
            'Blue'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [11, 16, 7, 3, 14],
            backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(75, 192, 192)',
            'rgb(255, 205, 86)',
            'rgb(201, 203, 207)',
            'rgb(54, 162, 235)'
            ]
        }]
      };

    const [dataTile] = useState(
        {
            title: 'TOKEN SALES',
            desc:'Join the industry leaders to discuss where the markets are heading. We accept token payments.',
        }
    )

    return (
        <section className="section-token style-7 mobie-pb0" id="token">
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h2 className="heading">{dataTile.title}</h2>
                        <p className="fs-20">{dataTile.desc}</p>

                    </div>
                </div>
                <div className="col-xl-6 col-md-12" data-aos="fade-up" data-aos-duration="1000">
                    <div className="chart-bar">
                    <PolarArea data={data} />
                    </div>
                </div>
                <div className="col-xl-6 col-md-12" data-aos="fade-up" data-aos-duration="1000">
                <div className="chart-bar">
                    <PolarArea data={data} />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Tokendetails;