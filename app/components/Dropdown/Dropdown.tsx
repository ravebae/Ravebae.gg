import { View, Text } from 'react-native';
import React, { useState } from 'react';
import DropdownArrow from 'assets/dropdown.svg';
import { SelectList } from 'react-native-dropdown-select-list';
import { MultipleSelectList } from 'react-native-dropdown-select-list';
import Arrow from './Arrow/Arrow';

export default function Dropdown({ data, placeholder = '', multiple = true }) {
  const [selected, setSelected] = useState([]);
  return (
    <>
      {multiple ? (
        <MultipleSelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          dropdownStyles={{
            backgroundColor: '#766a81',
            borderColor: '#a94bf3',
            borderWidth: 1,
            width: '100%',
          }}
          boxStyles={{
            backgroundColor: '#031013',
            borderColor: '#a94bf3',
            borderWidth: 1,
          }}
          badgeStyles={{ backgroundColor: '#a94bf3' }}
          dropdownShown={false}
          search={false}
          maxHeight={300}
          save='value'
          label='Languages'
          labelStyles={{ color: 'white' }}
          dropdownTextStyles={{
            color: '#f9e0ff',
          }}
          checkBoxStyles={{ backgroundColor: 'white' }}
          inputStyles={{ color: 'white', width: 100 }}
        />
      ) : (
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save='value'
          dropdownStyles={{
            backgroundColor: '#031013',
            borderColor: '#a94bf3',
            borderWidth: 1,
            width: '100%',
          }}
          dropdownTextStyles={{
            color: 'white',
          }}
          search={false}
          fontFamily='JockeyOne_400Regular'
          boxStyles={{
            backgroundColor: '#031013',
            borderColor: '#a94bf3',
            borderWidth: 1,
          }}
          arrowicon={<Arrow />}
          inputStyles={{ color: 'white', width: 100 }}
          placeholder={placeholder ? 'Select Language' : ''}
        />
      )}
    </>
  );
}
