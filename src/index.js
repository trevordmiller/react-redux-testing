import React from 'react';
import {render} from 'react-dom';
import Example from './components/Example/Example';

render(<Example someProp='hello world' />, document.getElementById('app'));
