import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { convertDuration } from "../../util/helper_util";
import TrackHeartContainer from "../heart_button/track_heart_container";
import { AddToPlayListButton } from "../playlists/add_to_playlist_button";
import { FaRegPlayCircle } from "react-icons/fa";
import { ImDownload } from "react-icons/im";
import { storeAudioData, getAudioData } from './indexedDB';


export const TrackItem = (props) => {
  const { track } = props;
  let songList = props.songList;
  let idx;
  props.num ? (idx = props.num - 1) : (idx = track.num - 1);
  songList = songList.slice(idx).concat(songList.slice(0, idx));

  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [downloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOnline(navigator.onLine);
    };

    window.addEventListener("online", handleOnlineStatusChange);
    window.addEventListener("offline", handleOnlineStatusChange);

    return () => {
      window.removeEventListener("online", handleOnlineStatusChange);
      window.removeEventListener("offline", handleOnlineStatusChange);
    };
  }, []);

  const playSong = async () => {
    if (!isOnline) {
      // Handle offline playback here
      const locallyStoredAudio = await getAudioData(track.id);
      if (locallyStoredAudio) {
        // Use locally stored audio for offline playback
        const audio = new Audio(locallyStoredAudio);
        audio.play();
      } else {
        alert("You are currently offline, and the audio is not cached.");
      }
      return;
    }

    // Online playback
    props.receivedNewPlaylist(songList);
    props.setToPlay({ isPlaying: true });
  };

  const blobToBase64 = (blob) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  };

  async function storeLocally() {
    setIsDownloading(true);
    try {
      console.log("downloading");
      console.log(track.audioUrl)
      const response = await fetch(track.audioUrl);
      console.log("accepted");
      const audioBlob = await response.blob();
      console.log("got the blob");
      const audioData = URL.createObjectURL(audioBlob);
      console.log("got the audio data");

      // Store audio data in local storage
      console.log("....adding to local storage");
       // Store audio data in IndexedDB
       await storeAudioData(track.id, audioData);
      setIsDownloading(false)
      alert("this song can be accessed offline")
    } catch (error) {
      console.log(error);
      alert("failed to download");
      setIsDownloading(false)
    }
  }

  return (
    <div
      className="flex-row-between vertical-center full-width track-row"
      onDoubleClick={() => playSong()}
    >
      <div className="flex-row-end w-5 midgray table-pad">
        {props.num ? props.num : track.num}
      </div>
      <div
        className="flex-row-start flex-wrap w-25 table-pad hover-cyan cursor-pointer"
        onClick={() => playSong()}
      >
        {track.title}&nbsp;
        <span className="midgray inline-play hover-cyan">
          <FaRegPlayCircle />
        </span>
      </div>
      <div className="flex-row-start flex-wrap w-20 table-pad">
        <Link className="hover-line" to={`../../../artists/${props.artist.id}`}>
          {props.artist.artistName}
        </Link>
      </div>
      <div className="flex-row-start flex-wrap w-20 table-pad">
        <Link
          className="hover-line"
          to={`/artists/${props.artist.id}/albums/${props.album.id}`}
        >
          {props.album.title}
        </Link>
      </div>
      <div className="flex-row-end w-10 table-pad">
        {convertDuration(track.seconds)}
      </div>
      <div className="flex-row-center w-10 table-pad">
        <AddToPlayListButton
          userId={props.userId}
          trackId={track.id}
          postPlaylistTrack={props.postPlaylistTrack}
          playlists={props.playlists}
        />
        <TrackHeartContainer
          itemId={props.itemId}
          hearts={props.hearts}
          itemKey={props.itemKey}
          classStyle="trackId"
        />
        <button onClick={storeLocally} disabled={downloading} className="button-small">
          <ImDownload />
        </button>
      </div>
    </div>
  );
};
