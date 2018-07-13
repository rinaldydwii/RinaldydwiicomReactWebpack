import React from 'react';
import Navigation from '../components/Navigation';
import AboutC from '../components/About';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

class About extends React.Component {
    constructor() {
        super();
        this.state = {
            fetched: true
        };
    }
    render() {
        return this.state.fetched ? 
        (
            <div className="about">
                <Navigation menulist={true}></Navigation>
                <AboutC></AboutC>
                <Footer></Footer>
            </div>
        ) : <Loading></Loading>;
    }
};

export default About;