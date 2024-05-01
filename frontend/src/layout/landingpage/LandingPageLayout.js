import React from 'react';
import TopbarSimple from 'components/topbar/TopbarSimple';
import LayoutContent from 'components/bases/LayoutContent';
import { navLink, footer } from 'const/DressPageDemo';
import landingPageRoute from 'routes/LandingPageRouter';
import logo from "images/logo-full.png";
import MapFooter from 'components/footer/MapFooter';

const LandingPageLayout = () => {
    return (
        <div>
            <TopbarSimple type="sticky" navLink={navLink} logo={logo} />
            <LayoutContent routes={landingPageRoute} />
            <div className='bg-light-blue'>
                <MapFooter {...footer}/>
            </div>
        </div>
    )
}

export default LandingPageLayout;
