import React from 'react';
import ReactWordCloud from 'react-wordcloud';
import styled from 'styled-components';
import { words } from './WordList';

const WordCloudContainer = () => {
  return <WordCloud words={words} />;
};

const WordCloud = styled(ReactWordCloud)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default WordCloudContainer;
