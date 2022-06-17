import React from 'react';
import '../scss/components/_icon-box.scss';
import '../scss/components/_popup.scss';
import '../scss/components/section.scss';
import '../scss/components/_progress.scss';
import '../scss/components/form.scss';
import DashboardFeatures from '../components/dashboard/dashboard-features';
function HomeOne(props) {

    return (
        <div>
            {<DashboardFeatures />}
        </div>
    );
}

export default HomeOne;