import React from 'react';
import '../scss/components/_icon-box.scss';
import '../scss/components/_popup.scss';
import '../scss/components/section.scss';
import '../scss/components/_progress.scss';
import '../scss/components/form.scss';
import DashboardTeam from '../components/dashboard/dashboard-team';
import daTeam from '../assets/fake-data/data-team4';
function HomeOne(props) {

    return (
        <div>
            {<DashboardTeam data={daTeam}/>}
        </div>
    );
}

export default HomeOne;