import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { NavDropdown } from 'react-bootstrap';
import Footer from './components/Footer';
import Home from './components/Home';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Prices from './components/Prices';
import Booking from './components/Booking';
import Contacts from './components/Contacts';

function useQuery() {
    const { search } = useLocation();

    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const App = () => {
    const [showModeratorBoard, setShowModeratorBoard] = useState(false);
    const [showAdminBoard, setShowAdminBoard] = useState(false);
    const [currentUser, setCurrentUser] = useState(undefined);
    let navigate = useNavigate();
    let query = useQuery();
    /*useEffect(() => {
        const user = AuthService.getCurrentUser();
        if (user) {
            setCurrentUser(user);
            setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'));
            setShowAdminBoard(user.roles.includes('ROLE_ADMIN'));
        }
    }, []);

    const logOut = () => {
        AuthService.logout().navigate('/');
    };*/

    return (
        <div>
            <div className="back-to-top"></div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white sticky" data-offset="500">
                <div className="container">
                    <a href="/" className="navbar-brand">Villa<span className="text-primary">"Niki"</span></a>

                    <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="navbar-collapse collapse" id="navbarContent">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="/">Начало</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/location">Местоположение</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/gallery">Галерия</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/prices">Цени</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/booking">Резервации</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/contacts">Контакти</a>
                            </li>
                            {/*<li className="nav-item">
                                <a className="btn btn-primary ml-lg-2" href="#">Free Analytics</a>
                            </li>*/}
                        </ul>
                    </div>

                </div>
            </nav>

            <div className='container mt-3'>
                <Routes>
                    {/*<Route path='*' element={<ErrorPage />} />*/}
                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/location' element={<Location />} />
                    <Route exact path='/gallery' element={<Gallery />} />
                    <Route exact path='/prices' element={<Prices />} />
                    <Route exact path='/booking' element={<Booking />} />
                    <Route exact path='/contacts' element={<Contacts />} />
                </Routes>
            </div>

            <Footer />
        </div>
    );
};

export default App;
