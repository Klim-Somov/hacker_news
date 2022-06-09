import React from "react";
import { useEffect, useState } from "react";
import { getStoriesIds, getStory } from "../services/api";

const StoriesContainer = () => {
  const [storyIds, setstoryIds] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
   getStoriesIds().then((data) => setstoryIds(data));

   getStory(storyIds[3]).then(data => console.log(data));
   


  }, []);

  return <p>{JSON.stringify(storyIds)}</p>;
};

export default StoriesContainer;
