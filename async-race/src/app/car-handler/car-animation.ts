import { CarAnimation } from '../../types/types';

const carAnimations: { [carId: number]: CarAnimation } = {};

export function handleStartCarButtonClick(car: HTMLElement, distance: number, duration: number, carId: number) {
  if (!carAnimations[carId]) {
    carAnimations[carId] = {
      animation: addCarAnimation(car, 200, 1000),
      isRunning: true,
    };
  } else if (!carAnimations[carId].isRunning) {
    carAnimations[carId].animation = addCarAnimation(car, 200, 1000);
    carAnimations[carId].isRunning = true;
  }
}

export function handleStopCarButtonClick(carId: number) {
  if (carAnimations[carId] && carAnimations[carId].isRunning) {
    carAnimations[carId].animation.stop();
    carAnimations[carId].isRunning = false;
  }
}

export function addCarAnimation(car: HTMLElement, distance: number, duration: number) {
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
  }

  animationId = window.requestAnimationFrame(step);

  return {
    stop: () => {
      if (animationId !== null) {
        window.cancelAnimationFrame(animationId);
        car.style.transform = 'translateX(0px)';
      }
    },
  };
}
