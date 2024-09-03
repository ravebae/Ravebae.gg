import { TouchableHighlight } from 'react-native';
import React from 'react';

import S from './styles';
import { Controller, useForm } from 'react-hook-form';
import Dropdown from '@components/Dropdown';
import { formStore } from 'store';

import location from 'app/helper/suburbs.json';

const Location = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  return (
    <>
      <Controller
        name='location'
        control={control}
        rules={{}}
        render={({ field: { onChange, onBlur, value } }) => (
          <Dropdown
            placeholder={'Location'}
            data={location}
            multiple={false}
            search={true}
          />
        )}
      />
    </>
  );
};

export default Location;
