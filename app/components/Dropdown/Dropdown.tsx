import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
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
          maxHeight={200}
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

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#081E23',
    borderRadius: 10,
  },
  dropdown: {
    height: 50,
    borderColor: '#736d78',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#031013',
    paddingHorizontal: 8,
    color: '#FFFFFF',
  },
  icon: {
    marginRight: 5,
  },
  itemContainerStyle: {
    marginTop: 10,
    borderColor: '#A94BF3',
    borderRadius: 5,
    borderWidth: 1,
    backgroundColor: '#000',
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    borderRadius: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#030D0F',
  },
  itemTextStyle: {
    color: '#FFFFFF',
    fontFamily: 'JockeyOne_400Regular',
  },
  label: {
    position: 'absolute',
    backgroundColor: '#081E23',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  textItem: {
    flex: 1,
    fontSize: 18,
    borderRadius: 10,
    color: 'white',
    fontFamily: 'JockeyOne_400Regular',
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'JockeyOne_400Regular',
    paddingHorizontal: 8,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'JockeyOne_400Regular',
    paddingHorizontal: 8,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});

const styles2 = StyleSheet.create({
  container: { padding: 16 },
  dropdown: {
    height: 50,
    backgroundColor: 'transparent',
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 14,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  icon: {
    marginRight: 5,
  },
  selectedStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 14,
    backgroundColor: 'black',
    shadowColor: '#000',
    marginTop: 8,
    marginRight: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  textSelectedStyle: {
    marginRight: 5,
    fontSize: 16,
  },
  searchBoxStyle: {
    borderColor: 'transparent',
    borderBlockEndColor: 'white',
    color: 'white',
    fontFamily: 'JockeyOne_400Regular',
  },
});
