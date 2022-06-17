import React from 'react';
import '../scss/components/_icon-box.scss';
import '../scss/components/_popup.scss';
import '../scss/components/section.scss';
import '../scss/components/_progress.scss';
import '../scss/components/form.scss';
import DashboardRoadmap from '../components/dashboard/dashboard-roadmap';
import dataDashboardRoadmap from '../assets/fake-data/data-roadmap3';

function HomeOne(props) {

    return (
        <div>
            {<DashboardRoadmap data={dataDashboardRoadmap}/>}
        </div>
    );
}

export default HomeOne;