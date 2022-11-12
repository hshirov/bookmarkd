export default interface VolumeInfo {
  title: string;
  authors: string[];
  description: string;
  pageCount: number;
  categories: string;
  imageLinks: { [key in 'smallThumbnail' | 'thumbnail']: string };
}
