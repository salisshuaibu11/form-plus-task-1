import React from 'react';

import LogoWhite from '../assets/images/logo_white.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faFacebook,
    faTwitter,
    faYoutube,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

import './Footer.css';

const Footer = () => {
    return (
        <>
            <section className='lg:pl-20 mt-10 lg:p-0 py-5 px-5 bg-gray-300 flex lg:flex-row flex-col items-center justify-between'>
                <form>
                    <input
                        type='email'
                        className='px-4 mb-5 py-4 border-r-2 border-gray-200 text-gray-600 rounded-tl-2xl rounded-bl-2xl outline-left-none md:px-8 focus:shadow-xl'
                        placeholder='Email Address'
                    />
                    <input
                        type='text'
                        className='px-4 mb-5 py-4 text-gray-600 active:border-0 md:px-8 focus:shadow-xl'
                        placeholder='State'
                    />
                    <button className='uppercase bg-red-600 text-white px-6 mb-5 ml-2 py-4 rounded-2xl'>
                        sign up
                    </button>
                </form>
                <p className='uppercase w-full lg:w-1/3 text-white text-center py-10 px-5 bg-red-600'>
                    become a volunteer
                </p>
            </section>
            <section className='w-screen footer opa px-20 py-10'>
                <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='mb-10 text-white'>
                        <img src={LogoWhite} alt='Logo white' />
                        <p className='my-10'>
                            <span className='block'>
                                Yahaya Bello for President
                            </span>
                            <span>PO Box 1824, Kogi State, Nigeria.</span>
                        </p>
                        <p>
                            <span className='text-red-500 block'>
                                Phone:{' '}
                                <span className='text-white'>
                                    {' '}
                                    +234 706 358 6698
                                </span>{' '}
                            </span>
                            <span className='text-red-500'>E-mail:</span>{' '}
                            info@yahayabello.com
                        </p>
                    </div>

                    <div className='mb-10'>
                        <h2 className='uppercase text-xl mb-10 font-bold text-white'>
                            Quick Links
                        </h2>
                        <NavLink
                            to='/'
                            className='block font-thin mb-2 text-red-500'>
                            Home
                        </NavLink>
                        <NavLink
                            to='/about'
                            className='block font-thin mb-2 text-red-500'>
                            Priorites
                        </NavLink>
                        <NavLink
                            to='/career'
                            className='block font-thin mb-2 text-red-500'>
                            Events and News
                        </NavLink>
                        <NavLink
                            to='/courses'
                            className='block font-thin mb-2 text-red-500'>
                            About Yahaya
                        </NavLink>
                        <NavLink
                            to='/blog'
                            className='block font-thin text-red-500'>
                            Become a Volunteer
                        </NavLink>
                    </div>

                    <div>
                        <h2 className='uppercase mb-10 text-xl mb-10 font-bold text-white'>
                            Connect with us
                        </h2>
                        <FontAwesomeIcon
                            className='text-white text-2xl mr-7'
                            icon={faFacebook}
                        />
                        <FontAwesomeIcon
                            className='text-white text-2xl mr-7'
                            icon={faInstagram}
                        />
                        <FontAwesomeIcon
                            className='text-white text-2xl mr-7'
                            icon={faTwitter}
                        />
                        <FontAwesomeIcon
                            className='text-white text-2xl mr-7'
                            icon={faYoutube}
                        />
                    </div>
                </div>
            </section>
            <footer
                style={{ background: '#020D31' }}
                className='px-20 py-10 text-center text-white font-bold'>
                YAHAYA BELLO - 2023 ELECTION CAMPAIGN
            </footer>
        </>
    );
};

export default Footer;
