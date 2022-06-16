import React , {useState} from 'react';
import { Tab, Tabs, TabList, TabPanel  } from 'react-tabs';
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Pie } from 'react-chartjs-2';

import { Chart, PieController, ArcElement, Legend, Tooltip, Title } from 'chart.js';

Chart.register(PieController, ArcElement, Title, Legend, Tooltip);



const Allodist = () => {
    const [dataFeature] = useState(
        {
            title: 'Token Allocation & Funds Distribution',
            subtitle : 'Join the industry leaders to discuss where the markets are heading. We accept token payments.',
        }
    )
    const options = { plugins: { legend: false }}
    const data = {
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
    const [dataTab] = useState(
        [
            {
                id: 1,
                title: "Distribution",
            },
            {
                id: 2,
                title: "Funding Allocation",
            },
        ]
    )

    return (
        <section className="allo-dist" id="sales">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block-text center">
                        <h3>{dataFeature.title}</h3>
                        <p className="mt-12">{dataFeature.subtitle}</p>
                    </div>

                    <div className="allo-dist__main" data-aos="fade-up" data-aos-duration="800">
                        <div className="flat-tabs1">
                        <Tabs >
                        <TabList className="menu-tab">
                            {
                                dataTab.map(data=> (
                                    <Tab key={data.id} ><h6>{data.title}</h6></Tab>
                                ))
                            }
                        </TabList>
                        <TabPanel className="content-tab">
                            <div className="list-progress">
                                <div className="progressbar">
                                    <div className="title">
                                      <p>Marketing: 25%</p>
                                    </div>
                                    <div className="barline">
                                      <div className="countbar s1">
                                      <ProgressBar now={25} />
                                      </div>
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <div className="title">
                                      <p>Bussiness Development: 25%</p>
                                    </div>
                                    <div className="barline">
                                      <div className="countbar s2">
                                      <ProgressBar now={25} />
                                      </div>
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <div className="title">
                                      <p>Product Development: 10%</p>
                                    </div>
                                    <div className="barline">
                                      <div className="countbar s3">
                                      <ProgressBar now={10} />
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chart-bar">
                            <Pie data={data} options={options}></Pie>
                            </div>
                            <div className="list-progress right">
                                <div className="progressbar">
                                    <div className="title">
                                      <p>Reserve: 10%</p>
                                    </div>
                                    <div className="barline">
                                      <div className="countbar s4">
                                      <ProgressBar now={10} />
                                      </div>
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <div className="title">
                                    <p>Reserve: 10%</p>
                                    </div>
                                    <div className="barline">
                                      <div className="countbar s5">
                                      <ProgressBar now={10} />
                                      </div>
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <div className="title">
                                      <p>Token Sale: 20%</p>
                                    </div>
                                    <div className="barline">
                                      <div className="countbar s6">
                                      <ProgressBar  now={20} />
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel className="content-tab">
                            <div className="list-progress">
                                <div className="progressbar">
                                    <div className="title">
                                      <p>Marketing: 25%</p>
                                    </div>
                                    <div className="barline">
                                      <div className="countbar s1">
                                      <ProgressBar now={25} />
                                      </div>
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <div className="title">
                                      <p>Bussiness Development: 25%</p>
                                    </div>
                                    <div className="barline">
                                      <div className="countbar s2">
                                      <ProgressBar now={25} />
                                      </div>
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <div className="title">
                                      <p>Product Development: 10%</p>
                                    </div>
                                    <div className="barline">
                                      <div className="countbar s3">
                                      <ProgressBar now={10} />
                                      </div>
                                    </div>
                                </div>
                            </div>
                            <div className="chart-bar">
                            <Chart options={data.options} series={data.series} type="donut" width="250" height="250" />
                            </div>
                            <div className="list-progress right">
                                <div className="progressbar">
                                    <div className="title">
                                      <p>Reserve: 10%</p>
                                    </div>
                                    <div className="barline">
                                      <div className="countbar s4">
                                      <ProgressBar now={10} />
                                      </div>
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <div className="title">
                                    <p>Reserve: 10%</p>
                                    </div>
                                    <div className="barline">
                                      <div className="countbar s5">
                                      <ProgressBar now={10} />
                                      </div>
                                    </div>
                                </div>
                                <div className="progressbar">
                                    <div className="title">
                                      <p>Token Sale: 20%</p>
                                    </div>
                                    <div className="barline">
                                      <div className="countbar s6">
                                      <ProgressBar  now={20} />
                                      </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        </Tabs>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}

export default Allodist;