export default interface VolumeInfo {
  title: string;
  authors: string[];
  description: string;
  imageLinks: { [key in 'smallThumbnail' | 'thumbnail']: string };
}
