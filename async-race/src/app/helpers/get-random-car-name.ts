import { carBrandsArr } from '../car-data/car-brands';
import { carModelsArr } from '../car-data/car-models';

export function getRandomCarName(): string {
  const randomIndexForBrandsCarArr = Math.floor(Math.random() * carBrandsArr.length);
  const randomIndexForModelsCarArr = Math.floor(Math.random() * carModelsArr.length);

  return `${carBrandsArr[randomIndexForBrandsCarArr]} ${carModelsArr[randomIndexForModelsCarArr]}`;
}
