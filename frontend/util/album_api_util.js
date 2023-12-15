export const getAllAlbums = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/albums',
  });
};

export const getAlbum = (albumId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/albums/${albumId}`,
  });
};

export const searchAlbums = (query) => {
  return $.ajax({
    method: 'GET',
    url: `/api/albums/search?search=${query}`,
  });
};