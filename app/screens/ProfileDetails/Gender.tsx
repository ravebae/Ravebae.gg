import React from 'react';

import { Controller, useForm } from 'react-hook-form';
import Dropdown from '@components/Dropdown';
import { formStore } from 'store';

const genderList = [
  { key: 'Male', value: 'Male' },
  { key: 'Female', value: 'Female' },
  { key: 'Non-binary', value: 'Non-binary' },
];

const Gender = () => {
  const { control } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  return (
    <>
      <Controller
        name='race'
        control={control}
        rules={{}}
        render={({ field: { onChange, onBlur, value } }) => (
          <Dropdown data={genderList} />
        )}
      />
    </>
  );
};

export default Gender;
