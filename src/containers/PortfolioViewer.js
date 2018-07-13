import React from 'react';
import { connect } from 'react-redux';

import { fetchPortfolioById } from '../actions/portfolioActions';

import Navigation from '../components/Navigation';
import Loading from '../components/Loading';

class PortfolioViewer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id
        } 
    }
    componentDidMount() {
        console.log(this.state.id);
        this.props.dispatch(fetchPortfolioById(this.state.id));
    }
    render() {
        
        return this.props.loading ? <Loading></Loading> :
        (
            <div id="portfolio-viewer">
                <Navigation menulist={ true }></Navigation>
                <section id="portfolio">
                    <div className="container">
                        <div className="section__title"><h1>Portfolio</h1></div>
                        <div className="section__content">
                            <div className="portfolio-viewer__wrapper">
                                <img src={ this.props.portfolio.image } />
                            </div>
                            <div className="portfolio-viewer__description">{ this.props.portfolio.text }</div>
                            <div className="portfolio-viewer__date-publish">{ this.props.portfolio.date }</div>
                            <div className="portfolio-viewer__share">
                                <div className="share__title">Share</div>
                                <div className="share__list">
                                    <a className="share__item share__facebook"></a>
                                    <a className="share__item share__twitter"></a>
                                    <a className="share__item share__whatsapp"></a>
                                    <a className="share__item share__line"></a>
                                    <a className="share__item share__linkedin"></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    };
};

const mapStateToProps = (state) => {
    return {
        loading: state.portfolioReducer.loading,
        portfolio: state.portfolioReducer.portfolio
    }
}

export default connect(mapStateToProps)(PortfolioViewer);