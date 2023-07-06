import './style.scss';
import './index.html';
import LevelChanger from './components/levels/level-changer';
import NewGame from './components/new-game/new-game';
import BurgerMenu from './components/burger-menu/burger-menu';
import LevelsListFiller from './components/levels/levels-list-filler';
import LevelsHelper from './components/helpers/levels-helper';

new LevelsListFiller(LevelsHelper.getLevelsList());

new LevelsHelper();

new LevelChanger();

// new NewGame();

new BurgerMenu();

