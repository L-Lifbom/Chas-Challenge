import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { Routes, Route, Outlet, useLocation } from 'react-router-dom';
import BootNavbar from './components/BootNavbar';
import Header from './components/Header';
import Footer from './components/Footer';
import Budget from './pages/3budget';
import Party from './pages/2party';
import Activities from './pages/4activites';
import Food from './pages/5food';
import Events from './pages/6events';
import Summary from './pages/8summary';
import Signup from './components/signup';
import Login from './components/login';
import Destination from './pages/1destination';
import Landing from './pages/0landing';
import ManResult from './pages/result-manual';
import AiResult from './pages/result-ai';
import Active from './pages/7howactive';
import style from './style.module.css';


function App() {
    return (
        <div>
            <Routes>
                <Route path="signup" element={<Signup />} />
                <Route path="login" element={<Login />} />

                <Route path="/" element={<Layout />}>
                    <Route index element={<Landing />} />
                    <Route path='destination' element={<Destination />} />
                    <Route path="budget" element={<Budget />} />
                    <Route path="party" element={<Party />} />
                    <Route path="activites" element={<Activities />} />
                    <Route path='food' element={<Food />} />
                    <Route path='events' element={<Events />} />
                    <Route path='summary' element={<Summary />} />
                    <Route path='manresult' element={<ManResult />} />
                    <Route path='airesult' element={<AiResult />} />
                    <Route path='active' element={<Active />} />
                    {/* Måste göra login logout och sign up pages */}
                </Route>
            </Routes>

        </div >
    );
}

function Layout() {

    const location = useLocation();
    const isLanding = location.pathname === '/';
    const styling = `${style.maincontainer} ${isLanding ? style.specialBackground : ''}`;



    return (
        <>
            <div className={styling}>
                {/* <BootNavbar /> */}
                <Header />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default App;
