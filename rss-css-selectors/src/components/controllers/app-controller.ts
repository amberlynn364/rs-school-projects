import BurgerMenu from '../burger-menu/burger-menu';
import LevelsHelper from '../helpers/levels-helper';
import MyLocalStorage from '../helpers/my-local-storage';
import InputValidator from '../input-validator/input-validator';
import LevelChanger from '../levels/level-changer';
import LevelsListFiller from '../levels/levels-list-filler';
import SetLevel from '../levels/set-level';
import ButtonController from './button-controller';

export default class AppController {
  constructor() {
    new LevelsListFiller(LevelsHelper.getLevelsList());
    new SetLevel(MyLocalStorage.getItem('level') || 1);
    new LevelChanger();
    new ButtonController();
    new InputValidator();
    new BurgerMenu();
  }
}