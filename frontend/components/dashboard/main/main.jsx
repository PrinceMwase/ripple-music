import React, { useEffect } from 'react';
import { AlbumItem } from '../../albums/album_item';
import { ArtistItem } from '../../artists/artist_item';
import { shuffle } from '../../../util/helper_util';

export const Main = (props) => {
  let featuredAlbums;
  let featuredArtists;

  useEffect(() => {
    props.getAllFeatures();
    return function cleanup() {
      props.clearAlbums();
    };
  }, []);

  if (!props.user.username || !props.albums || !props.artists) {
    return null;
  } else {
    featuredAlbums = shuffle(props.albums);
    featuredArtists = shuffle(props.artists);
  }

  return (
    <div className='flex-row-start black-bg'>
      <main className='flex-col-start'>
        <div className='main-bg'></div>
        <div className='flex-col-start full-width z1'>
          <div className='flex-row-between full-width artist-heading'>
            <h1 className='artist-h1'>Welcome back, {props.user.username}!</h1>
          </div>
          <h1 className='section-title'>Albums</h1>
          <ul className='flex-row-start flex-wrap'>
            {featuredAlbums.map((album) => (
              <AlbumItem
                album={album}
                likes={props.albumLikes}
                key={album.id}
              />
            ))}
          </ul>
          <div className='break'></div>
          <h1 className='section-title'>Artists</h1>
          <ul className='flex-row-start flex-wrap'>
            {featuredArtists.map((artist) => (
              <ArtistItem
                artist={artist}
                follows={props.follows}
                key={artist.id}
              />
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};
