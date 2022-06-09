import React from "react";
import { useEffect, useState } from "react";
import { getStoriesIds, getStory } from "../services/api";
import Story from "./Story";

const StoriesContainer = () => {
  const [storyIds, setstoryIds] = useState([]);


  useEffect(() => {
    getStoriesIds().then((data) => setstoryIds(data));

    getStory(31678913).then((data) => console.log(data));
  }, []);

  return storyIds.map((storyId) => <Story key={storyId} storyId={storyId} />);
};

export default StoriesContainer;
