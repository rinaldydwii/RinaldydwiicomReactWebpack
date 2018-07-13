import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/blogActions';
import { fetchPortfolios } from '../actions/portfolioActions';

import Navigation from '../components/Navigation';
import PortfolioC from '../components/Portfolio';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

class Portfolio extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPortfolios(8));
    }
    render() {
        return this.props.loadingPortfolios ? <Loading></Loading> :
        (
            <div className="portfolio">
                <Navigation menulist={true}></Navigation>
                <PortfolioC datalist={this.props.portfolios}></PortfolioC>
                <Footer></Footer>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        loadingPortfolios: state.portfolioReducer.loading,
        portfolios: state.portfolioReducer.portfolios
    }
};

export default connect(mapStateToProps)(Portfolio);