import Header from '../../components/Header';
import MainSection from '../../components/Main';
import AboutUs from '../../components/AboutUs';
// import Masseuses from '../../components/Masseuses';
// import Massage from '../../components/Massage';
// import Rules from '../../components/Rules';
import Footer from '../../components/Footer';
import './Home.scss';
import React from 'react';

const Home = () => {
    return (
        <div className="main">
            <div>
                <Header />
            </div>
            <div>
                <MainSection />
            </div>
            <div>
                <AboutUs />
            </div>
            {/* <div>
                <Masseuses />
            </div>
            <div>
                <Massage />
            </div>
            <div>
                <Rules />
            </div> */}
            <div>
                <Footer />
            </div>
        </div>
    );
};

export default Home;
