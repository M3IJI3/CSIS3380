import React from 'react';
import Gif from './Gif.jsx';
import NoGifs from './NoGifs.jsx';

const GifList = props => {
  const results = props.data;
  let gifs;
  if (results.length) {
    gifs = results.map(
        gif => <Gif url={gif.images.fixed_height.url} key={gif.id} />
    );
  } else {
    gifs = <NoGifs />
  }

  return(
    <ul className="gif-list">
      {gifs}
    </ul> 
  );
}

export default GifList;
