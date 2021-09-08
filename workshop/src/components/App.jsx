import React, { useState } from 'react';
import Gif from './Gif';
import GifList from './GifList';
import SearchBar from './SearchBar';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

// rs / rcc
const App = () => {
  // const selectedGif = "VIPdgcooFJHtC";
  // const gifList = ['gG6OcTSRWaSis', '13HgwGsXF0aiGY', '13UZisxBxkjPwI'];
  const [selectedGif, setSelectedGif] = useState("VIPdgcooFJHtC");
  const [gifList, setGifList] = useState(['gG6OcTSRWaSis', '13HgwGsXF0aiGY', '13UZisxBxkjPwI']);
  const changeGifList = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const arrayGifId = res.data.map((gif) => gif.id);
      setSelectedGif(arrayGifId[0]);
      setGifList(arrayGifId);
    });
  };
  return (
    <div>
      <div className="left-scene">
        <SearchBar changeGifList={changeGifList} />
        <div className="selected-gif">
          <Gif gifId={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifList} setSelectedGif={setSelectedGif} />
      </div>
    </div>
  );
};

export default App;
