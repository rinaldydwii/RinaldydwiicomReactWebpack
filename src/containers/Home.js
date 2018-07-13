import React from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../actions/blogActions';
import { fetchPortfolios } from '../actions/portfolioActions';

import Loading from '../components/Loading';
import Navigation from '../components/Navigation';
import Header from '../components/Header';
import Blog from '../components/Blog';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import '../sass/master.scss';

class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPosts(4));
        this.props.dispatch(fetchPortfolios(8));
    }
    render() {
        return (
            this.props.loadingBlogs && this.props.loadingPortfolios ? <Loading></Loading> :
            <div id="homepage">
                <Navigation menulist={true} home={true}></Navigation>
                <Header title="Welcome." buttonValue="Explore" buttonLink="#blog"></Header>
                <Blog datalist={this.props.blogs}></Blog>
                <Portfolio datalist={this.props.portfolios} home={true}></Portfolio>
                <About></About>
                <Contact></Contact>
                <Footer></Footer>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        loadingBlogs: state.blogReducer.loading,
        loadingPortfolios: state.portfolioReducer.loading,
        blogs: state.blogReducer.posts,
        portfolios: state.portfolioReducer.portfolio
    }
};

export default connect(mapStateToProps)(Home);