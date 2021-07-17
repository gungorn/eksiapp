import * as types from '../types';

const initialState = {
    active: false,
    height: 0
};

export const keyboard = (state = initialState, { type, payload }) => {
    switch (type) {
        case types.KEYBOARD_OPEN:
            return { ...state, active: true, height: payload };

        case types.KEYBOARD_CLOSE:
            return { ...state, active: false, height: 0 };

        case types.SET_KEYBOARD_ACTIVE:
            return { ...state, active: payload };

        case types.SET_KEYBOARD_HEIGHT:
            return { ...state, height: payload };
    }
};