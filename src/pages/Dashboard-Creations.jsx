import React from 'react';
import '../scss/components/_icon-box.scss';
import '../scss/components/_popup.scss';
import '../scss/components/section.scss';
import '../scss/components/_progress.scss';
import '../scss/components/form.scss';
import DashboardCreations from '../components/dashboard/dashboard-creations';
function HomeOne(props) {

    return (
        <div>
            {<DashboardCreations />}
        </div>
    );
}

export default HomeOne;