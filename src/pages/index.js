import HomeOne from "./HomeOne";
import Page404 from "./404";
import HomeNFT1 from "./HomeNFT1";
import HomeNFT2 from "./HomeNFT2";
import HomeMusic from "./home-music";
import HomeDefi1 from "./HomeDefi01";
import HomeDefi2 from "./HomeDefi02";
import HomeDefi3 from "./HomeDefi03";
import HomeDefi4 from "./HomeDefi04";
import DashboardTokensales from "./Dashboard-Tokensales";
import DashboardFeatures from "./Dashboard-Features";
import DashboardRoadmap from "./Dashboard-Roadmap";
import DashboardCreations from "./Dashboard-Creations";
import DashboardTeam from "./Dashboard-Team";
import DashboardFaq from "./Dashboard-Faq";

const routes = [
  
  { path: '/', component: <HomeOne />},
  { path: '/HomeNFT1', component: <HomeNFT1 />},
  { path: '/HomeNFT2', component: <HomeNFT2 />},
  { path: '/home-v4', component: <HomeMusic />},
  { path: '/homedefi01', component: <HomeDefi1 />},
  { path: '/homedefi02', component: <HomeDefi2 />},
  { path: '/homedefi03', component: <HomeDefi3 />},
  { path: '/homedefi04', component: <HomeDefi4 />},
  { path: '/dashboard-tokensales', component: <DashboardTokensales/>},
  { path: '/dashboard-features', component: <DashboardFeatures/>},
  { path: '/dashboard-roadmap', component: <DashboardRoadmap/>},
  { path: '/dashboard-creations', component: <DashboardCreations/>},
  { path: '/dashboard-team', component: <DashboardTeam/>},
  { path: '/dashboard-faq', component: <DashboardFaq/>},
  
  { path: '/404', component: <Page404 />},

]

export default routes;