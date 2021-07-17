import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { Navigation } from '~/Navigation';

import store from './store';

const Redux = () => {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
};

export { Redux };