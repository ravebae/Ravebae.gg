import React from 'react';

import Dropdown from '@components/Dropdown';
import { Controller, useForm } from 'react-hook-form';
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
