import React from "react";
import "../styles/meme.css";
import { useState, useEffect } from "react";

function Meme() {
  const [allMemes, setAllMemes] = useState([]);

  let [urlLink, setUrlLink] = useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });
  // Api call
  useEffect(() => {
    async function getMemes() {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  const handleClick = function (e) {
    e.preventDefault();
    const memesArray = allMemes;
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setUrlLink((pervState) => ({
      ...pervState,
      randomImage: url,
    }));
  };

  function handleChange(event) {
    const { name, value } = event.target;
    setUrlLink((pervData) => ({
      ...pervData,
      [name]: value,
    }));
  }

  return (
    <main>
      <form className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          onChange={handleChange}
          name="topText"
          value={urlLink.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          onChange={handleChange}
          name="bottomText"
          value={urlLink.bottomText}
        />
        <button
          onClick={(e) => {
            handleClick(e);
          }}
          className="form--button"
        >
          Get a new meme image 🖼️
        </button>
      </form>
      <div className="meme-txt">
        <img className="img-meme" src={urlLink.randomImage} />
        <h2 className="meme--text top">{urlLink.topText}</h2>
        <h2 className="meme--text bottom">{urlLink.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
