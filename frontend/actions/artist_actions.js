import * as APIUtil from "../util/artist_api_util";

export const RECEIVED_ALL_ARTISTS = "RECEIVED_ALL_ARTISTS";
export const RECEIVED_ARTIST = "RECEIVED_ARTIST";
export const RECEIVED_SEARCHED_ARTISTS = "RECEIVED_SEARCHED_ARTISTS";

export const receivedAllArtists = (artists) => ({
  type: RECEIVED_ALL_ARTISTS,
  artists,
});

export const receivedSearchedArtists = (artists) => ({
  type: RECEIVED_SEARCHED_ARTISTS,
  artists,
});

export const receivedArtist = (artist) => ({
  type: RECEIVED_ARTIST,
  artist,
});

export const searchArtists = (query) => (dispatch) =>
  APIUtil.searchArtists(query).then((artists) =>
    dispatch(receivedSearchedArtists(artists))
  );

export const getAllArtists = () => (dispatch) =>
  APIUtil.getAllArtists().then((artists) =>
    dispatch(receivedAllArtists(artists))
  );

export const getArtist = (artistId) => (dispatch) =>
  APIUtil.getArtist(artistId).then((artist) =>
    dispatch(receivedArtist(artist))
  );
