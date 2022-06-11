import {React , useEffect} from 'react';
import { Route, Routes } from 'react-router-dom';
import AOS from 'aos';
import routes from './pages';
import Page404 from './pages/404';


function App() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    }); 
  }, []);
  return (
    <>

    {/* <Header /> */}

    <Routes>

        {
            routes.map((data,idx) => (
                <Route key={idx} path={data.path} element={data.component} exact />
            ))
        }

        <Route path='*' element={<Page404 />} />
    </Routes>

    {/* <Footer /> */}
</>
  );
}

export default App;
