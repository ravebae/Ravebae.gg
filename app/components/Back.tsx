import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function Back(props) {
  return (
    <Svg
      fill='#A94BF3'
      viewBox='0 0 52 52'
      data-name='Layer 1'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path d='M50 24H6.83L27.41 3.41a2 2 0 000-2.82 2 2 0 00-2.82 0l-24 24a1.79 1.79 0 00-.25.31 1.19 1.19 0 00-.09.1c0 .07-.07.13-.1.2l-.06.2a.84.84 0 000 .17 2 2 0 000 .78.84.84 0 000 .17l.06.2c0 .07.07.13.1.2a1.19 1.19 0 00.09.15 1.79 1.79 0 00.25.31l24 24a2 2 0 102.82-2.82L6.83 28H50a2 2 0 000-4z' />
    </Svg>
  );
}

export default Back;
