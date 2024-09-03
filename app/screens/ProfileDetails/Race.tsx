import React from 'react';

import Dropdown from '@components/Dropdown';
import { Controller, useForm } from 'react-hook-form';
import { formStore } from 'store';

const raceList = [
  { label: 'Prefer not to say', value: 'Prefer not to say' },
  { label: 'African', value: 'African' },
  { label: 'Caribbean', value: 'Caribbean' },
  { label: 'Indian', value: 'Indian' },
  { label: 'Melanesian', value: 'Melanesian' },
  { label: 'Australasian/Aboriginal', value: 'Australasian/Aboriginal' },
  { label: 'Chinese', value: 'Chinese' },
  { label: 'Guamanian', value: 'Guamanian' },
  { label: 'Japanese', value: 'Japanese' },
  { label: 'Korean', value: 'Korean' },
  { label: 'Polynesian', value: 'Polynesian' },
  { label: 'European/Anglo Saxon', value: 'European/Anglo Saxon' },
  { label: 'Other Pacific Islander', value: 'Other Pacific Islander' },
  { label: 'Latin American', value: 'Latin American' },
  { label: 'Arabic', value: 'Arabic' },
  { label: 'Vietnamese', value: 'Vietnamese' },
  { label: 'Micronesian', value: 'Micronesian' },
  { label: 'Other Hispanic', value: 'Other Hispanic' },
  { label: 'US or Canadian Indian', value: 'US or Canadian Indian' },
  { label: 'Other Asian', value: 'Other Asian' },
  { label: 'Puerto Rican', value: 'Puerto Rican' },
  { label: 'Filipino', value: 'Filipino' },
  { label: 'Mexican', value: 'Mexican' },
  { label: 'Alaskan Native', value: 'Alaskan Native' },
  { label: 'Cuban ', value: 'Cuban ' },
];

const Race = () => {
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
          <Dropdown
            placeholder={'Race'}
            multiple={false}
            search={true}
            data={raceList}
          />
        )}
      />
    </>
  );
};

export default Race;
