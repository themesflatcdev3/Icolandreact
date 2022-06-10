import HomeOne from "./HomeOne";
import Page404 from "./404";
import HomeNFT1 from "./HomeNFT1";


const routes = [
  
  { path: '/', component: <HomeOne />},
  { path: '/HomeNFT1', component: <HomeNFT1 />},
  { path: '/404', component: <Page404 />},

]

export default routes;