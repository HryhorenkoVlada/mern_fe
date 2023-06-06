import { ICoords } from './coords';

export interface IPlace {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  address: string;
  location: ICoords;
  creator: string;
}
