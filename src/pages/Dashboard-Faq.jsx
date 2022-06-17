import React from 'react';
import '../scss/components/_icon-box.scss';
import '../scss/components/_popup.scss';
import '../scss/components/section.scss';
import '../scss/components/_progress.scss';
import '../scss/components/form.scss';
import DashboardFaq from '../components/dashboard/dashboard-faq';
import daFaq from '../assets/fake-data/data-faq3';
function HomeOne(props) {

    return (
        <div>
            {<DashboardFaq data={daFaq}/>}
        </div>
    );
}

export default HomeOne;