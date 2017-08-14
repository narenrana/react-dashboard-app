import { actions } from './actions';

export function toggleSettings() {
    return {
        type: actions.TOGGLE_SHOW_SETTINGS
    };
}

export function toggleVariables(number) {
    return {
        type: actions.TOGGLE_VARIABLES,
        number
    };
}
