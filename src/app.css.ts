import { globalStyle, style } from '@vanilla-extract/css';

globalStyle('body', {
    fontFamily: 'sans-serif'
  });

export const container = style({
    backgroundColor: '#eeeeee',
    padding: 10
});

export const h1 = style({
    color: 'green'
})