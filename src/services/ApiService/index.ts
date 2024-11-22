import ApiService from './ApiService';
import {API_KEY, GET_ALBUM, GET_ARTIST, TOP_ALBUMS} from './constants';

export const getTopAlbums = async () => {
  const response = await ApiService.get(
    `?method=${TOP_ALBUMS}&artist=cher&limit=10&api_key=${API_KEY}&format=json`,
  );
  return response.data;
};

export const getAlbum = async (albumName: string) => {
  const response = await ApiService.get(
    `?method=${GET_ALBUM}&artist=cher&album=${albumName}&api_key=${API_KEY}&format=json`,
  );
  return response.data;
};

export const getArtist = async () => {
  const response = await ApiService.get(
    `?method=${GET_ARTIST}&artist=cher&api_key=${API_KEY}&format=json`,
  );
  return response.data;
};
