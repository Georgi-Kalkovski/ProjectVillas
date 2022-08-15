import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Footer from './components/Footer';
import Home from './components/Home';
import Location from './components/Location';
import Gallery from './components/Gallery';
import Prices from './components/Prices';
import Booking from './components/Booking';
import Contacts from './components/Contacts';
import './App.css';

const App = () => {

    // Nav Coloring Logic
    var btns = document.getElementsByClassName('nav-item');

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener('click', function () {
            var current = document.getElementsByClassName('active');
            if (current.length > 0) {
                current[0].className = current[0].className.replace(' active', '');
            }
            this.className += ' active';
        });
    }

    return (
        <div>
            {/* Background Image */}
            <div className='main-background-image'></div>

            {/* Background Image Alpha (Opacity) */}
            <div className='main-background-alpha'></div>

            {/* Back To Top Button */}
            <div className='back-to-top'></div>

            {/* Nav Menu */}
            <nav className='navbar navbar-expand-lg navbar-light bg-white sticky' data-offset='500'>
                <div className='container'>
                    <Link to='/' className='navbar-brand'>Къщи за гости <span className='text-primary'>•Нели•</span></Link>
                    <button className='navbar-toggler' data-toggle='collapse' data-target='#navbarContent' aria-controls='navbarContent' aria-expanded='false' aria-label='Toggle navigation'>
                        <span className='navbar-toggler-icon'></span>
                    </button>

                    <div className='navbar-collapse collapse' id='navbarContent'>
                        <ul className='navbar-nav ml-auto' id='myUL'>
                            <li className='nav-item active'>
                                <Link className='nav-link' to='/'>Начало</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/location'>Местоположение</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/gallery'>Галерия</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/prices'>Цени</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/booking'>Резервации</Link>
                            </li>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/contacts'>Контакти</Link>
                            </li>
                            {/*<li className='nav-item'>
                                <a className='btn btn-primary ml-lg-2' href='#'>Free Analytics</a>
                            </li>*/}
                        </ul>
                    </div>

                </div>
            </nav>

            {/* Routes */}
            <div>
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
            </div>

            {/* Footer */}
            <Footer />
        </div>

    );
};

export default App;
