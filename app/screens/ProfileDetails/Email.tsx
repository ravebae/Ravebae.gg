import { View, Text, TouchableHighlight } from 'react-native';
import React from 'react';

import S from './styles';
import { Controller, useForm } from 'react-hook-form';
import Inputbox from '@components/Inputbox';
import Dropdown from '@components/Dropdown';
import { formStore } from 'store';

const Email = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  return (
    <>
      <Controller
        name='email'
        control={control}
        rules={{}}
        render={({ field: { onChange, onBlur, value } }) => (
          <Inputbox
            placeholder='Email'
            onChange={onChange}
            onBlur={onBlur}
            value={value}
          />
        )}
      />
    </>
  );
};

export default Email;
