import React, { useState, useEffect } from 'react';

import { LoadingWrapper } from './styles/loading.styles';

type LoadingTypes = 'theme' | 'page';

interface Props {
  loadingType: LoadingTypes;
}

const Loading: React.FC<Props> = props => {
  const { loadingType } = props;

  const [currentTheme, setCurrentTheme] = useState<object | null>(null);

  useEffect(() => {
    if (loadingType === 'theme') {
      const currentThemeFromStorage = localStorage.getItem('currentTheme');

      if (currentThemeFromStorage) {
        setCurrentTheme(JSON.parse(currentThemeFromStorage));
      }
    }
  }, []);

  return (
    <LoadingWrapper theme={currentTheme || undefined}>
      <h1>Loading...</h1>
    </LoadingWrapper>
  );
};

export default Loading;
