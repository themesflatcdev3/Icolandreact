import React from 'react';
import '../scss/components/_icon-box.scss';
import '../scss/components/_popup.scss';
import '../scss/components/section.scss';
import '../scss/components/_progress.scss';
import '../scss/components/form.scss';
import DashboardTokensales from '../components/dashboard/dashboard-tokensales';
function HomeOne(props) {

    return (
        <div>
            {<DashboardTokensales />}
        </div>
    );
}

export default HomeOne;