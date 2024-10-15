import React from 'react';

import Dropdown from '@components/Dropdown';
import { Controller, useForm } from 'react-hook-form';
import { formStore } from 'store';

const Relationship = () => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  const handleContinue = () => {
    formStore.update((s) => {
      s.page += 1;
    });
  };

  const relationshipStatus = [
    { label: 'Looking for a buzz', value: 'fun' },
    { label: 'Short term', value: 'short' },
    { label: 'Long term', value: 'long' },
  ];

  return (
    <>
      <Controller
        name='relationship'
        control={control}
        rules={{}}
        render={({ field: { onChange, onBlur, value } }) => (
          <Dropdown
            placeholder={'Relationship intent'}
            data={relationshipStatus}
            multiple={false}
          />
        )}
      />
    </>
  );
};

export default Relationship;
