import VolumeInfo from './volumeInfo.interface';

export interface GetBookResponse {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface GetBooksResponse {
  items: GetBookResponse[];
}
