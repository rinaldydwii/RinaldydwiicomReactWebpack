import React from 'react';
import '../sass/portfolio.scss';

class Portfolio extends React.Component {
    render() {
        let buttonHome = <a className="button" href="/portfolio">See More</a>;
        let buttonPortfolio = <a className="button">Load More</a>;
        let button = buttonPortfolio, limit = 8;
        if (this.props.home != undefined) {
            if (this.props.home == true) {
                button = buttonHome;
                limit = 5;
            }
        }
        let portfolios = this.props.datalist.map((portfolio, index) => {
            let portfolioClassName = "";
            if (index > limit) portfolioClassName = "hidden-xs";
            return (
                <a className={"portfolio__item " + portfolioClassName} href={'/portfolio/'+ portfolio.id} key={portfolio.id}>
                    <div className="portfolio__item__thumbnail">
                        <img src={portfolio.image} alt="portfolio" />
                    </div>
                    <div className="portfolio__item__overlay"></div>
                    <div className="portfolio__item__info">{portfolio.text}</div>
                </a>
            )
        });
        
        return (
            <section id="portfolio">
                <div className="container">
                    <div className="section__title"><h1>Portfolio</h1></div>
                    <div className="section__content">
                        <div className="portfolio__list">
                            { portfolios }
                        </div>
                        { button }
                    </div>
                </div>
            </section>
        )
    }
}

export default Portfolio;