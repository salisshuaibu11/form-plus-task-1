import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import Navbar from './Navbar';
import yahaya from '../assets/images/yahaya3.png';
import borhole from '../assets/images/borhole.png';
import construction from '../assets/images/construction.png';
import LogoWhite from '../assets/images/logo_white.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faFacebook,
    faTwitter,
    faYoutube,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import Footer from './Footer';

const About = (props) => {
    return (
        <>
            <Navbar {...props} />
            <section className='w-screen h-80 about px-20 m5-10 py-10 flex items-center text-white'>
                <p className='font-bold text-3xl '>About Yahaya Bello</p>
            </section>
            <section className='px-20'>
                <div className='biography w-full flex'>
                    <figure
                        className='h-100 mr-10 my-10'
                        style={{ width: '40%' }}>
                        <img src={yahaya} className='w-full h-full' />
                    </figure>
                    <div className='my-10' style={{ width: '60%' }}>
                        <h3
                            style={{ color: '#020D31' }}
                            className='font-bold text-3xl'>
                            Biography
                        </h3>
                        <div className=''>
                            <p className='my-10'>
                                Yahaya Adoza Bello (born June 18, 1975) is a
                                Nigerian politician, businessman and the current
                                Governor of Kogi State. ello was declared winner
                                of the 2015 Kogi gubernatorial election after he
                                was chosen on the platform of the All
                                Progressives Congress as the replacement for the
                                late Abubakar Audu who originally won the
                                election but died before the result was
                                declared.
                            </p>
                            <p>
                                Yahaya Adoza Bello (born June 18, 1975) is a
                                Nigerian politician, businessman and the current
                                Governor of Kogi State. ello was declared winner
                                of the 2015 Kogi gubernatorial election after he
                                was chosen on the platform of the All
                                Progressives Congress as the replacement for the
                                late Abubakar Audu who originally won the
                                election but died before the result was
                                declared.
                            </p>

                            <p className='my-10'>
                                The All Progressives Congress as the replacement
                                for the late Abubakar Audu who originally won
                                the election.
                            </p>
                        </div>
                        <div>
                            <p>Follow me on:</p>
                            <FontAwesomeIcon
                                className='text-blue-500 text-2xl mr-7'
                                icon={faFacebook}
                            />
                            <FontAwesomeIcon
                                className='text-red-200 text-2xl mr-7'
                                icon={faInstagram}
                            />
                            <FontAwesomeIcon
                                className='text-blue-400 text-2xl mr-7'
                                icon={faTwitter}
                            />
                            <FontAwesomeIcon
                                className='text-red-500 text-2xl mr-7'
                                icon={faYoutube}
                            />
                        </div>
                    </div>
                </div>

                <div className='achivements'>
                    <h2
                        className='font-bold text-center text-2xl mb-10'
                        style={{ color: '#020D31' }}>
                        Key Achievements as Governor of Kogi State
                    </h2>
                    <div className='achievement__body flex mx-auto'>
                        <div className='left mr-10' style={{ width: '50%' }}>
                            <p className='mb-10 font-thin'>
                                In the bid to move the nation forwad, to a
                                better Nigeria for all, Yahah Bello and his team
                                has placed some pressing issues facing the
                                countries as top priorities . Here is a brief
                                list of the issues that needs to be tackled.
                                Yahaya Bello’s top prioriy for the country
                                revolves around the ongrowing insecurity of the
                                nation by working tirelessly to curb.In the bid
                                to move the nation forwad, to a better Nigeria
                                for all, Yahah Bello and his team has placed
                                some pressing issues facing the countries as top
                                priorities . Here is a brief list of the issues
                                that needs to be tackled. Yahaya Bello’s top
                                prioriy for the country revolves around the
                                ongrowing insecurity of the nation by working
                                tirelessly to curb.In the bid to move the nation
                                forwad, to a better Nigeria for all, Yahah Bello
                                and his team has placed some pressing issues
                                facing the countries as top priorities . Here is
                                a brief list of the issues that needs to be
                                tackled. Yahaya Bello’s top prioriy for the
                                country revolves around the ongrowing insecurity
                                of the nation by working tirelessly to curb.
                                Yahaya Bello’s top prioriy for the country
                                revolves around the ongrowing insecurity of the
                                nation by working tirelessly. In the bid to move
                                the nation forwad, to a better Nigeria for all,
                                Yahah Bello and his team has placed some
                                pressing issues facing the countries as top
                                priorities . Here is a brief list of the issues
                                that needs to be tackled. Yahaya Bello’s top
                                prioriy for the country revolves around the
                                ongrowing insecurity of the nation by working
                                tirelessly to curb.In the bid to move the nation
                                forwad, to a better Nigeria for all, Yahah Bello
                                and his team has placed some pressing issues
                                facing the countries as top priorities . Here is
                                a brief list of the issues that needs to be
                                tackled. Yahaya Bello’s top prioriy for the
                                country revolves around the ongrowing insecurity
                                of the nation by working tirelessly to curb.
                            </p>
                            <p className='font-thin'>
                                In the bid to move the nation forwad, to a
                                better Nigeria for all, Yahah Bello and his team
                                has placed some pressing issues facing the
                                countries as top priorities . Here is a brief
                                list of the issues that needs to be tackled.
                                Yahaya Bello’s top prioriy for the country
                                revolves around the ongrowing insecurity of the
                                nation by working tirelessly to curb. Yahaya
                                Bello’s top prioriy for the country revolves
                                around the ongrowing insecurity of the nation by
                                working tirelessly. Here is a brief list of the
                                issues that needs to be tackled. Yahaya Bello’s
                                top prioriy for the country revolves around the
                                ongrowing insecurity of the nation by working
                                tirelessly to curb. Yahaya Bello’s top prioriy
                                for the country revolves around the ongrowing
                                insecurity of the nation by working tirelessly.
                                Here is a brief list of the issues that needs to
                                be tackled.
                            </p>
                        </div>
                        <figure className='right' style={{ width: '50%' }}>
                            <img
                                className='mb-10'
                                src={borhole}
                                alt='Borhole'
                            />
                            <img src={construction} alt='Construction' />
                        </figure>
                    </div>
                </div>

                <div className='projects'>
                    <h2
                        className='font-bold text-2xl mb-10'
                        style={{ color: '#020D31' }}>
                        Nigeria Projects
                    </h2>
                    <div className='achievement__body flex mx-auto'>
                        <figure
                            className='right mr-10'
                            style={{ width: '30%' }}>
                            <img
                                className='mb-10'
                                src={borhole}
                                alt='Borhole'
                            />
                        </figure>
                        <div className='left mr-10' style={{ width: '70%' }}>
                            <p className='font-thin'>
                                In the bid to move the nation forwad, to a
                                better Nigeria for all, Yahah Bello and his team
                                has placed some pressing issues facing the
                                countries as top priorities . Here is a brief
                                list of the issues that needs to be tackled.
                                Yahaya Bello’s top prioriy for the country
                                revolves around the ongrowing insecurity of the
                                nation by working tirelessly to curb.In the bid
                                to move the nation forwad, to a better Nigeria
                                for all, Yahah Bello and his team has placed
                                some pressing issues facing the countries as top
                                priorities . Here is a brief list of the issues
                                that needs to be tackled. Yahaya Bello’s top
                                prioriy for the country revolves around the
                                ongrowing insecurity of the nation by working
                                tirelessly to curb.In the bid to move the nation
                                forwad, to a better Nigeria for all, Yahah Bello
                                and his team has placed some pressing issues
                                facing the countries as top priorities . Here is
                                a brief list of the issues that needs to be
                                tackled. Yahaya Bello’s top prioriy for the
                                country revolves around the ongrowing insecurity
                                of the nation by working tirelessly to curb.
                                Yahaya Bello’s top prioriy for the country
                                revolves around the ongrowing insecurity of the
                                nation by working tirelessly. Yahah Bello and
                                his team has placed some pressing issues facing
                                the countries as top priorities . Here is a
                                brief list of the issues that needs to be
                                tackled. Yahaya Bello’s top prioriy for the
                                country
                            </p>
                        </div>
                    </div>
                    <p className='font-thin'>
                        In the bid to move the nation forwad, to a better
                        Nigeria for all, Yahah Bello and his team has placed
                        some pressing issues facing the countries as top
                        priorities . Here is a brief list of the issues that
                        needs to be tackled. Yahaya Bello’s top prioriy for the
                        country revolves around the ongrowing insecurity of the
                        nation by working tirelessly to curb.In the bid to move
                        the nation forwad, to a better Nigeria for all, Yahah
                        Bello and his team has placed some pressing issues
                        facing the countries as top priorities . Here is a brief
                        list of the issues that needs to be tackled. Yahaya
                        Bello’s top prioriy for the country revolves around the
                        ongrowing insecurity of the nation by working tirelessly
                        to curb.In the bid to move the nation forwad, to a
                        better Nigeria for all, Yahah Bello and his team has
                        placed some pressing issues facing the countries as top
                        priorities . Here is a brief list of the issues that
                        needs to be tackled. Yahaya Bello’s top prioriy for the
                        country revolves around the ongrowing insecurity of the
                        nation by working tirelessly to curb. Yahaya Bello’s top
                        prioriy for the country revolves around the ongrowing
                        insecurity of the nation by working tirelessly.
                    </p>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default withRouter(About);
