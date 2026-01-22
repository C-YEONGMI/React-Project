import React from 'react';
import MainVisual from './visual/MainVisual';
import StoryList from './content/StoryList';
import { storyData } from './content/storyData';

const Index = () => {
  return (
    <div className="story-page">
      <MainVisual />
      <StoryList data={storyData} />
    </div>
  );
};

export default Index;
