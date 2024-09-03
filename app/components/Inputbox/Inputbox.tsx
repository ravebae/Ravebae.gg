import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import S from './styles';

import { Calendar } from 'react-native-calendars';

const CalendarInput = ({ setShow, setSelected, selected }) => {
  return (
    <Calendar
      style={{
        borderRadius: 10,
        width: '100%',
      }}
      theme={{
        backgroundColor: '#DAACFF',
        calendarBackground: '#DAACFF',
        textSectionTitleColor: '#2d4150',
        selectedDayBackgroundColor: '#A94BF3',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        textDayHeaderFontFamily: 'Poppins_400Regular',
        dayTextColor: '#ffffff',
        textDayFontFamily: 'Poppins_600SemiBold',
        textMonthFontFamily: 'Poppins_600SemiBold',
        monthTextColor: '#A94BF3',
        arrowColor: '#ffffff',
        textDisabledColor: '#9c81a3',
      }}
      onDayPress={({ dateString }) => {
        setSelected(dateString);
        setShow(false);
      }}
      markedDates={{
        [selected]: {
          selected: true,
          disableTouchEvent: true,
        },
      }}
    />
  );
};

export default function Inputbox({ placeholder, onChange, onBlur, value }) {
  const [focus, setFocus] = useState(false);
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (selected) {
      const [year, month, day] = selected.split('-');
      setDate(`${day}/${month}/${year}`);
    }
  }, [selected]);

  return (
    <View>
      <S.InputLabelBG colors={['#081E23', '#081E23', '#031013']}>
        <S.InputLabel>{placeholder}</S.InputLabel>
      </S.InputLabelBG>
      {placeholder == 'Birthday' ? (
        <S.InputBox
          style={[
            { fontFamily: 'JockeyOne_400Regular' },
            (focus || value) && { borderColor: '#a94bf3' },
          ]}
          placeholder={'DD/MM/YYYY'}
          onPress={() => setShow(true)}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          value={date ? date : ''}
        />
      ) : (
        <S.InputBox
          style={[
            { fontFamily: 'JockeyOne_400Regular' },
            (focus || value) && { borderColor: '#a94bf3' },
          ]}
          placeholder={''}
          onChangeText={onChange}
          onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
          value={value}
        />
      )}
      {show ? (
        <CalendarInput
          setShow={setShow}
          setSelected={setSelected}
          selected={selected}
        />
      ) : null}
    </View>
  );
}
