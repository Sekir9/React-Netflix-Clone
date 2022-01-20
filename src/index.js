import 'normalize.css'

import App from './app';
import { GlobalStyles } from './global-styles'
import React from 'react';
import {render} from 'react-dom';

render(
    <>
        <GlobalStyles/>  
        <App />
    </>, 
    document.getElementById('root'));
