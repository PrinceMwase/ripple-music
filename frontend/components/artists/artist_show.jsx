import React, { useEffect } from 'react';
import { AlbumItem } from '../albums/album_item';
import { Link } from 'react-router-dom';

export const ArtistShow = (props) => {
  useEffect(() => {
    props.getArtist(props.match.params.artistId);
  }, []);

  if (!props.artist || !props.albums) return null;

  return (
    <div className='flex-row-start'>
      <main className='flex-col-start'>
        <h1 className='section-title'>{props.artist.artistName}</h1>
        <div className='image-crop'>
          <img className='artist-photo' src={props.artist.photoUrl} />
        </div>
        <h3 className='subtitle'>Albums by {props.artist.artistName}</h3>
        <ul className='flex-row-start flex-wrap'>
          {props.albums.map((album) => (
            <AlbumItem album={album} likes={props.likedAlbums} key={album.id} />
          ))}
        </ul>
      </main>
    </div>
  );
};