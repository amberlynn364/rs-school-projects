export default function createDomElements() {
  const title = document.createElement('h1');
  title.classList.add('app-title');
  title.textContent = 'Minesweeper';

  const gameCounters = document.createElement('div');
  gameCounters.classList.add('game-counters');
  gameCounters.append(
    addCountersToGameCounter('Mines remaining: ', 'mine-counter'),
    addCountersToGameCounter('Moves made: ', 'move-counter'),
    addCountersToGameCounter('Flags set: ', 'flag-counter'),
    addCountersToGameCounter('Game status: ', 'game-status', 'Playing'),
    addCountersToGameCounter('Timer: ', 'timer', '00:00,00'),
  );

  const minesweeper = document.createElement('div');
  minesweeper.setAttribute('id', 'minesweeper');
  minesweeper.classList.add('game-wrapper');

  const difficultyWrapper = document.createElement('div');
  difficultyWrapper.classList.add('difficulty-wrapper');
  const difficultyDescription = document.createElement('h2');
  difficultyDescription.classList.add('difficulty-title');
  difficultyDescription.textContent = 'Difficulty level:';
  const inputWrapper = document.createElement('div');
  inputWrapper.classList.add('input-wrapper');
  const mineInput = document.createElement('input');
  mineInput.setAttribute('id', 'mine-input');
  mineInput.classList.add('input');
  const fieldLabel = document.createElement('label');
  fieldLabel.setAttribute('for', 'mine-input');
  fieldLabel.classList.add('label');
  fieldLabel.textContent = 'from 10 to 99 mines';
  inputWrapper.append(mineInput, fieldLabel, addButton('update-field', 'Update field', 'button-input', 'button'));
  difficultyWrapper.append(
    difficultyDescription,
    addButton('easy', 'Easy'),
    addButton('medium', 'Medium'),
    addButton('hard', 'Hard'),
    inputWrapper,
  );

  document.body.append(
    title,
    difficultyWrapper,
    addButton('new-game', 'New game!', 'button-big'),
    gameCounters,
    minesweeper,
  );
}

function addCountersToGameCounter(title, id, textContent) {
  const counterWrapper = document.createElement('div');
  counterWrapper.classList.add('counter-wrapper');

  const counterTitle = document.createElement('span');
  counterTitle.classList.add('counter-title');
  counterTitle.textContent = `${title}`;

  const counter = document.createElement('span');
  counter.setAttribute('id', `${id}`);
  counter.textContent = textContent ? `${textContent}` : '0';

  counterWrapper.append(counterTitle, counter);

  return counterWrapper;
}

function addButton(id, buttonTextContent, extraSettings, className = 'button') {
  const button = document.createElement('button');
  button.setAttribute('id', `${id}`);
  button.classList.add(className);

  switch (id) {
    case 'easy':
      button.setAttribute('title', '10x10, 10 mines');
      break;
    case 'medium':
      button.setAttribute('title', '15x15, 40 mines');
      break;
    case 'hard':
      button.setAttribute('title', '25x25, 99 mines');
      break;
    default:
  }

  if (extraSettings) {
    button.classList.add(extraSettings);
  }
  button.textContent = `${buttonTextContent}`;
  return button;
}
