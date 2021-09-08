import React from 'react';

const Gif = (props) => {
  const { gifId, setSelectedGif } = props;
  const handleClick = () => {
    setSelectedGif(gifId);
  };
  const url = `https://media.giphy.com/media/${gifId}/giphy.gif`;
  return (
    <img src={url} alt="gif" className="gif" onClick={handleClick} />
  );
};

export default Gif;
