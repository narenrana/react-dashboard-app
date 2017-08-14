import {actions} from './actions';

const localStore = {
    showSettings: false,
    variablesPageNumber: +window.localStorage.getItem("variablesPageNumber") || 1
};

export default function localReducer(state = localStore, action = null) {
    switch (action.type) {
        case actions.TOGGLE_SHOW_SETTINGS: return {
            ...state,
            showSettings: !state.showSettings
        };

        case actions.TOGGLE_VARIABLES: return toggleVariables(state, action);

        default: return state;
    }
}

function toggleVariables(state, { number }) {
    window.localStorage.setItem("variablesPageNumber", number);
    return {
        ...state,
        variablesPageNumber: number
    };
}
