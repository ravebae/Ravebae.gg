import React from 'react';

import { Controller, useForm } from 'react-hook-form';
import DropdownEl from '@components/Dropdown';
import { formStore } from 'store';

const genderList = [
  { label: 'Male', value: '1' },
  { label: 'Female', value: '2' },
  { label: 'Non-binary', value: '3' },
];

const Gender = () => {
  const { control } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  return (
    <>
      <Controller
        name='gender'
        control={control}
        rules={{}}
        render={({ field: { onChange, onBlur, value } }) => (
          <DropdownEl
            placeholder={'Gender'}
            data={genderList}
            multiple={false}
          />
        )}
      />
    </>
  );
};

export default Gender;
