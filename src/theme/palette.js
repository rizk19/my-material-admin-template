import {
  white,
  black,
  grey,
  primary,
  success,
  info,
  warning,
  danger
} from './colors';

export default {
  common: {
    black,
    white,
    neutral: grey['50'],
    muted: grey['400']
  },
  primary: {
    contrastText: white,
    main: primary.main,
    light: primary.light,
    dark: primary.dark
  },
  secondary: {
    contrastText: white,
    main: '#7d58ff',
    light: '',
    dark: '#37248F'
  },
  success: {
    contrastText: white,
    main: success.main,
    light: success.light,
    dark: success.dark
  },
  info: {
    contrastText: white,
    main: info.main,
    light: info.light,
    dark: info.dark
  },
  warning: {
    contrastText: white,
    main: warning.main,
    light: warning.light,
    dark: warning
  },
  danger: {
    contrastText: white,
    main: danger.main,
    light: danger.light,
    dark: danger.dark
  },
  text: {
    primary: '#12161B',
    secondary: '#66788A',
    disabled: grey['300']
  },
  background: {
    default: white,
    dark: '#172B4D',
    paper: grey['50']
  },
  border: grey['100'],
  divider: grey['200']
};