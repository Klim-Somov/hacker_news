import React, { useEffect, useState } from "react";
import { getStory } from "../services/api";

const Story = ({ storyId }) => {
  const [story, setstory] = useState({});
  useEffect(() => {
    getStory(storyId).then((data) => data && data.url && setstory(data));
  }, []);

  return (
    <div>
      <h2>{story.title}</h2>
      {story.by ? <p>Автор: {story.by}</p> : ""}
      {story.url ? <a href={story.url}>читать полностью</a> : ""}
    </div>
  );
};
export default Story;
