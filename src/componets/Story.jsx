import React, { useEffect, useState } from "react";
import { getStory } from "../services/api";

const Story = ({ storyId }) => {
  const [story, setstory] = useState({});
  useEffect(() => {
    getStory(storyId).then((data) =>data && data.url && setstory(data));
   
  }, []);

  return (
    <div>
      <h2>{story.title}</h2>
      <p>Автор: {story.by || "Неизвестен"}</p>
      <a href={story.url}>читать полностью</a>
    </div>
  );
};
export default Story;
