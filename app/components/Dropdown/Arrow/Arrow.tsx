import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const Arrow = (props) => (
  <Svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 18 18' {...props}>
    <Path fill='#a94bf3' d='m4 7 5 6 5-6H4z' />
  </Svg>
);
export default Arrow;
