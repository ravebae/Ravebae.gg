import { View, Text } from 'react-native';
import React, { useState } from 'react';
import DropdownArrow from 'assets/dropdown.svg';

import S from './styles';
import Arrow from './Arrow/Arrow';

export default function Dropdown({ data }) {
  const [selected, setSelected] = useState();
  return (
    <S.Dropdown
      setSelected={(val) => setSelected(val)}
      data={data}
      save='value'
      dropdownStyles={{
        backgroundColor: '#000000',
        borderColor: '#a94bf3',
        borderWidth: 1,
        width: '100%',
      }}
      dropdownTextStyles={{
        color: 'white',
      }}
      dropdownItemStyles={{
        borderBottomColor: '#a94bf3',
        borderWidth: 1,
      }}
      search={false}
      fontFamily='JockeyOne_400Regular'
      boxStyles={{
        backgroundColor: '#000000',
        borderColor: '#a94bf3',
        borderWidth: 1,
      }}
      arrowicon={<Arrow />}
      inputStyles={{ color: 'white', width: 100 }}
      placeholder={'Select Language'}
    />
  );
}
