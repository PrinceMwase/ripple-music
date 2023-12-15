import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AlbumItem } from '../albums/album_item';
import { ArtistItem } from '../artists/artist_item';

export const Search = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Extract search query from URL params
    const match = document.location.href.split('?')[1].match(/search=([^#]+)/);

    // Set searchQuery based on URL or input value
    setSearchQuery(match ? match[1] : '' )

    // Fetch data based on the search query
    if (match[1]) {
      props.searchAlbums(match[1]);
      props.searchArtists(match[1]);
    } else {
      props.getAllAlbums();
      props.getAllArtists();
    }

    return function cleanup() {
      props.clearAlbums();
    };
  }, [location]);


  return (
    <div className='flex-row-start'>
      <main className='flex-col-start'>
        <h1 className='section-title'>Albums</h1>
        <ul className='flex-row-start flex-wrap'>
          {searchQuery
            ? props.albums.map((album) => (
                <AlbumItem album={album} likes={props.albumLikes} key={album.id} />
              ))
            : null}
        </ul>
        <div className='break'></div>
        <h1 className='section-title'>Artists</h1>
        <ul className='flex-row-start flex-wrap'>
          {searchQuery
            ? props.artists.map((artist) => (
                <ArtistItem
                  artist={artist}
                  follows={props.follows}
                  key={artist.id}
                />
              ))
            : null}
        </ul>
      </main>
    </div>
  );
};
