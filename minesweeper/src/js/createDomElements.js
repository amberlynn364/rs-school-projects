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
    addCountersToGameCounter('Timer: ', 'timer', '00:00:00'),
  );

  const minesweeper = document.createElement('div');
  minesweeper.setAttribute('id', 'minesweeper');
  minesweeper.classList.add('game-wrapper');

  const buttonsWrapper = document.createElement('div');
  const buttonsDescription = document.createElement('h2');
  buttonsDescription.classList.add('buttons-title');
  buttonsDescription.textContent = 'Difficulty level:';
  buttonsWrapper.classList.add('buttons-wrapper');
  buttonsWrapper.append(
    buttonsDescription,
    addButton('easy', 'Easy'),
    addButton('medium', 'Medium'),
    addButton('hard', 'Hard'),
  );

  document.body.append(
    title,
    buttonsWrapper,
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

function addButton(id, buttonTextContent, extraSettings) {
  const button = document.createElement('button');
  button.setAttribute('id', `${id}`);
  button.classList.add('button');

  switch (id) {
    case 'medium':
      button.setAttribute('title', '15x15, 40 mines');
      break;
    case 'hard':
      button.setAttribute('title', '25x25, 99 mines');
      break;
    default:
      button.setAttribute('title', '10x10, 10 mines');
  }

  if (extraSettings) {
    button.classList.add(extraSettings);
  }
  button.textContent = `${buttonTextContent}`;
  return button;
}
