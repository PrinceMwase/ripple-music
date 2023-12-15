export const getAllArtists = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/artists',
  });
};

export const getArtist = (artistId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/artists/${artistId}`,
  });
};

export const searchArtists = (query) => {
  return $.ajax({
    method: 'GET',
    url: `/api/artists/search?search=${query}`,
  });
};
