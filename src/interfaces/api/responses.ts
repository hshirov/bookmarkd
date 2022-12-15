import VolumeInfo from './volumeInfo.interface';

export interface GetBookResponse {
  volumeInfo: VolumeInfo;
}

export interface GetBooksResponseItem {
  id: string;
  volumeInfo: VolumeInfo;
}

export interface GetBooksResponse {
  items: GetBooksResponseItem[];
}
