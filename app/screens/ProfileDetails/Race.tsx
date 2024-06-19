import { TouchableHighlight } from 'react-native';
import React from 'react';

import S from './styles';
import { Controller, useForm } from 'react-hook-form';
import Dropdown from '@components/Dropdown';
import { formStore } from 'store';

import languages from 'app/helper/languages.json';

const raceList = [
  { key: 'African', value: 'African' },
  { key: 'Caribbean', value: 'Caribbean' },
  { key: 'Indian', value: 'Indian' },
  { key: 'Melanesian', value: 'Melanesian' },
  { key: 'Australasian/Aboriginal', value: 'Australasian/Aboriginal' },
  { key: 'Chinese', value: 'Chinese' },
  { key: 'Guamanian', value: 'Guamanian' },
  { key: 'Japanese', value: 'Japanese' },
  { key: 'Korean', value: 'Korean' },
  { key: 'Polynesian', value: 'Polynesian' },
  { key: 'European/Anglo Saxon', value: 'European/Anglo Saxon' },
  { key: 'Other Pacific Islander', value: 'Other Pacific Islander' },
  { key: 'Latin American', value: 'Latin American' },
  { key: 'Arabic', value: 'Arabic' },
  { key: 'Vietnamese', value: 'Vietnamese' },
  { key: 'Micronesian', value: 'Micronesian' },
  { key: 'Declined to Respond', value: 'Declined to Respond' },
  { key: 'Other Hispanic', value: 'Other Hispanic' },
  { key: 'US or Canadian Indian', value: 'US or Canadian Indian' },
  { key: 'Other Asian', value: 'Other Asian' },
  { key: 'Puerto Rican', value: 'Puerto Rican' },
  { key: 'Filipino', value: 'Filipino' },
  { key: 'Mexican', value: 'Mexican' },
  { key: 'Alaskan Native', value: 'Alaskan Native' },
  { key: 'Cuban ', value: 'Cuban ' },
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
          <Dropdown data={raceList} />
        )}
      />
    </>
  );
};

export default Race;
