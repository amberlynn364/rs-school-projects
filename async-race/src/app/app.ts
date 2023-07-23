/* eslint-disable import/no-duplicates */
import './view/header/header';
import './view/main/main';
import './view/footer/footer';
import './view//winner-popup/winner-popup';
import './garage-handler/garage-api-handlers';
import './view/car-module/car-module';
import './garage-handler/garage-button-listeners';
import { updateView } from './helpers/update-view';

export const App = () => {
  updateView('garage');
  updateView('winners');
};
