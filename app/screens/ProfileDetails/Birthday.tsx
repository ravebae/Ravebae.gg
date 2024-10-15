import React, { useState } from 'react';
import { Modal } from 'react-native';

import { Calendar } from 'react-native-calendars';

import Inputbox from '@components/Inputbox';
import { MotiView } from 'moti';
import { Controller, useForm } from 'react-hook-form';
import { formStore } from 'store';

const Birthday = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  const [selected, setSelected] = useState('');
  const [show, setShow] = useState(false);

  return (
    <>
      {show ? (
        <Modal
          animationType='slide'
          transparent={true}
          style={{ top: '50%', height: '50%', position: 'absolute' }}
        >
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
            onDayPress={(day) => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: {
                selected: true,
                disableTouchEvent: true,
              },
            }}
          />
        </Modal>
      ) : (
        <MotiView
          from={{ opacity: 0, left: 100 }}
          animate={{ opacity: 1, left: 0 }}
          transition={{ type: 'timing' }}
        >
          <Controller
            name='birthday'
            control={control}
            rules={{}}
            render={({ field: { onChange, onBlur, value } }) => (
              <Inputbox
                placeholder='Birthday'
                onChange={onChange}
                onBlur={onBlur}
                value={value}
              />
            )}
          />
        </MotiView>
      )}
    </>
  );
};

export default Birthday;
