import VolumeInfo from './volumeInfo.interface';

export interface GetBookResponse {
  volumeInfo: VolumeInfo;
}

export interface GetBooksResponse {
  items: VolumeInfo[];
}
