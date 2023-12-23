import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { toggleTheme } from './actions/themeActions';

const ThemeProvider = ({ children }) => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const themeProps = {
    mode: theme,
    toggleTheme: () => dispatch(toggleTheme()),
  };

  return <StyledThemeProvider theme={themeProps}>{children}</StyledThemeProvider>;
};

export default ThemeProvider;
