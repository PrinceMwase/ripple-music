import * as APIUtil from '../util/album_api_util';

export const RECEIVED_ALL_ALBUMS = 'RECEIVED_ALL_ALBUMS';
export const RECEIVED_ALBUM = 'RECEIVED_ALBUM';
export const CLEARED_ALBUMS = 'CLEARED_ALBUMS';
export const SEARCHED_ALBUMS = 'SEARCHED_ALBUMS';

// Regular Action Creators

export const receivedAllAlbums = (albums) => ({
  type: RECEIVED_ALL_ALBUMS,
  albums,
});

export const receivedAlbum = (album) => ({
  type: RECEIVED_ALBUM,
  album,
});

export const searchedAlbums = (albums) => ({
  type: SEARCHED_ALBUMS,
  albums,
});

// Thunk Action Creators

export const clearAlbums = () => ({
  type: CLEARED_ALBUMS,
});

export const getAllAlbums = () => (dispatch) =>
  APIUtil.getAllAlbums().then((albums) => dispatch(receivedAllAlbums(albums)));

export const getAlbum = (albumId) => (dispatch) =>
  APIUtil.getAlbum(albumId).then((album) => dispatch(receivedAlbum(album)));

export const searchAlbums = (query) => (dispatch) =>
  APIUtil.searchAlbums(query).then((albums) => dispatch(searchedAlbums(albums)));