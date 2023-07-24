import { CarAnimation } from '../../types/types';
import { addWinnerToServer } from '../winner-handler/add-winner-to-server';

const carAnimations: { [carID: number]: CarAnimation } = {};

export function startCarAnimation(car: HTMLElement, distance: number, duration: number, carID: number): void {
  if (!carAnimations[carID]) {
    carAnimations[carID] = {
      animation: addCarAnimation(car, distance, duration),
      isRunning: true,
    };
  } else if (!carAnimations[carID].isRunning) {
    carAnimations[carID].animation = addCarAnimation(car, distance, duration);
    carAnimations[carID].isRunning = true;
  }
}

export function stopCarAnimation(carID: number): void {
  if (carAnimations[carID] && carAnimations[carID].isRunning) {
    carAnimations[carID].animation.stop();
    carAnimations[carID].isRunning = false;
  }
}

let raceResult = [];
export function addCarAnimation(car: HTMLElement, distance: number, duration: number): { stop: () => void } {
  raceResult = [];
  const raceButton = document.querySelector('#race-button');
  let startTime: number | null = null;
  let animationId: number | null = null;

  function step(timestamp: number) {
    if (startTime === null) {
      startTime = timestamp;
    }

    const progress = (timestamp - startTime) / duration;
    const translationX = progress * distance;
    car.style.transform = `translateX(${translationX}px)`;

    if (progress < 1) {
      animationId = window.requestAnimationFrame(step);
    }

    if (progress >= 1) {
      if (raceResult.length === 0 && raceButton?.hasAttribute('disabled')) addWinnerToServer(car, duration);
      raceResult.push(car);
    }
  }

  animationId = window.requestAnimationFrame(step);

  return {
    stop: () => {
      if (animationId !== null) {
        window.cancelAnimationFrame(animationId);
      }
    },
  };
}
