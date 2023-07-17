import { createElement } from '../../helpers/create-element';
import { garageSection } from './garage-section/garage-section';
import './main.scss';

export const main = createElement({
  tag: 'main',
  classLists: ['main', 'content-wrapper'],
});
main.append(garageSection);
document.body.append(main);
