'use strict';

import 'nodelist-foreach-polyfill';
import '@babel/polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeTeamPhoto from './modules/changeTeamPhoto';
import checkCalcInput from './modules/checkCalcInput';
import calc from './modules/calc';
import sendForm from './modules/sendForm';


countTimer('14 october 2019');

toggleMenu();

togglePopup();

tabs();

slider();

changeTeamPhoto();

checkCalcInput();

calc();

sendForm();
