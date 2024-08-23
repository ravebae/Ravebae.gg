import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';

import S from './styles';
import { Controller, useForm } from 'react-hook-form';
import Inputbox from '@components/Inputbox';
import Dropdown from '@components/Dropdown';
import { formStore } from 'store';

import { MotiSafeAreaView, MotiView } from 'moti';

const Name = ({ navigation }) => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  return (
    <MotiSafeAreaView
      from={{ opacity: 0, left: 100 }}
      animate={{ opacity: 1, left: 0 }}
      transition={{ type: 'timing' }}
    >
      <Controller
        name='firstName'
        control={control}
        rules={{}}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputbox
            placeholder='First name'
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
      <Controller
        name='lastName'
        control={control}
        rules={{}}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputbox
            placeholder='Last name'
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
    </MotiSafeAreaView>
  );
};

export default Name;
