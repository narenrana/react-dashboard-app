// Set up your application entry point here...
import 'babel-polyfill'; // extra ES6 features, will take 50k
import React from 'react';
import { render } from 'react-dom';
import { Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import injectTapEventPlugin from 'react-tap-event-plugin';
import routes from './routes';
import { language, messages } from './language';
import configureStore from './store/configureStore';
 
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
 
//import all css:
import './styles/main.js';


// Needed for onTouchTap (material ui)
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

//no initial state needed, that is handled by our reducers
const store = configureStore();

 
 

const renderLocal = () => {
    render(
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <IntlProvider locale={language} message={messages}>
                <div>
                    <Provider store={store}>
                        <Router history={hashHistory} routes={routes} />
                    </Provider>
                </div>
            </IntlProvider>
        </MuiThemeProvider>,
        document.getElementById('app')
    );
};

//Provider is used to connect redux-Store with React, eg attaches app to the store
//https://medium.freecodecamp.com/internationalization-in-react-7264738274a0#.1wtczl1gr
if (!window.Intl) {
    require.ensure([
        'intl',
        'intl/locale-data/jsonp/en.js',
        // 'intl/locale-data/jsonp/sv.js',
    ], (require) => {
        require('intl');
        require('intl/locale-data/jsonp/en.js');
        // require('intl/locale-data/jsonp/sv.js');
        renderLocal();
    });
} else {
    renderLocal();
}

