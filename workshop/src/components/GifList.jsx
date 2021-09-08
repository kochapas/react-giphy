import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  // const gifIds = ['gG6OcTSRWaSis', '13HgwGsXF0aiGY', '13UZisxBxkjPwI'];
  const { gifIds, setSelectedGif } = props;

  return (
    <div className="gif-list">
      {gifIds.map((id) => <Gif gifId={id} key={id} setSelectedGif={setSelectedGif} />) }
    </div>
  );
};

export default GifList;
