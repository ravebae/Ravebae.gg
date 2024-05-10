import { View, Text, StyleSheet, Image } from 'react-native';
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
        <View style={styles.container}>
          {renderLabel}
          <S.DropdownList
            style={[
              styles.dropdown,
              (isFocus || value) && { borderColor: '#a94bf3' },
            ]}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            iconStyle={styles.iconStyle}
            containerStyle={styles.itemContainerStyle}
            data={data}
            maxHeight={300}
            labelField='label'
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            valueField='value'
            placeholder={`Select ${placeholder.toLocaleLowerCase()}`}
            searchPlaceholder='Search...'
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
            renderItem={renderItem}
          ></S.DropdownList>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#081E23',
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
    borderColor: '#000',
    borderRadius: 5,
    backgroundColor: '#000',
  },
  item: {
    padding: 17,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#030D0F',
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
