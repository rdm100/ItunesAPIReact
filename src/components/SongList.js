import React from 'react';


const SongList = (props) => {

  const songList = props.songs.map((song, index) => {
    return(
    <ul key={index}>
     <li>number {index + 1}: {song.title.label}</li>
     <li>Genre: {song.category.attributes.label}</li>
     <li><img src={song['im:image'][0]['label']} alt={song.title.label}/></li>
   </ul>
 );
  });


  return (
  <div>
    {songList}
  </div>
  )
}

export default SongList;