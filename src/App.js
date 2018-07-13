import React from 'react';
import PropTypes from 'prop-types';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './containers/Home';
import Portfolio from './containers/Portfolio';
import PortfolioViewer from './containers/PortfolioViewer';
import About from './containers/About';
import NotFound from './containers/NotFound';
import Loading from './components/Loading';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Portfolio} />
                <Route exact path="/portfolio/:id" component={PortfolioViewer} />
                <Route exact path="/about" component={About} />
                <Route exact path="/loading" component={Loading} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
};

export default App;