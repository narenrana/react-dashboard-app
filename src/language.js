
import { addLocaleData } from 'react-intl';
import en from 'react-intl/locale-data/en';
// import sv from 'react-intl/locale-data/sv';


// Our translated strings
import localeData from './../service_data/language/locales/data.json';
// addLocaleData([...en, ...sv]);
addLocaleData([...en]);

//with or without region code:
let withRegionCode = false;


    // Define user's language. Different browsers have the user locale defined
    // on different fields on the `navigator` object, so we make sure to account
    // for these different by checking all of them
let language = (navigator.languages && navigator.languages[0]) ||
        navigator.language ||
        navigator.userLanguage;

if(!withRegionCode) {
    // Split locales with a region code
    language = language.toLowerCase().split(/[_-]+/)[0];
}

//lets override to english, later we will remove this..
language = "en";

// Try full locale, try locale without region code, fallback to 'en'
const messages = localeData[language] || localeData.en;

// If browser doesn't support Intl (i.e. Safari), then we manually import
// the intl polyfill and locale data.

export { language, messages };
