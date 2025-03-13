import React from "react";
import ItemList from "./ItemList";
import { artistsArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";
const Main = ({ type }) => {
  return (
    <div className="main">
      {type === "artists" || type === undefined ? (
        <ItemList
          title="Artistas"
          items={5}
          itemsArray={artistsArray}
          path="/artists"
          idPath="/artist"
        />
      ) : (
        <></>
      )}

      {type === "songs" || type === undefined ? (
        <ItemList
          title="Musicas"
          items={10}
          itemsArray={songsArray}
          path="/songs"
          idPath="/song"
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Main;
