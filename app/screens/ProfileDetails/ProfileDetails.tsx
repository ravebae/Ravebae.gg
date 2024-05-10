import { Controller, useForm } from 'react-hook-form';
import data from '../../helper/languages.json';

import S from './styles';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import React, { useEffect } from 'react';
import { formStore } from 'store';
import Inputbox from '@components/Inputbox';
import Dropdown from '@components/Dropdown';

import name from './Name';
import gender from './Name';
import birthday from './Name';
import email from './Name';
import language from './Language';
import race from './Race';
import relationship from './Relationship';
import interest from './Name';
import media from './Name';
import location from './Name';

const stepList = {
  name: 'What is your name?',
  gender: 'What is your gender?',
  birthday: 'When is your birthday?',
  email: 'What is your email?',
  language: 'What language(s) do you speak?',
  race: 'What is your race?',
  relationship: 'Relationship intention?',
  interest: 'Your interests',
  media: 'Upload photos & videos',
  location: 'Where are you based?',
};

export const ProfileDetails = ({ navigation }) => {
  const { register, control, handleSubmit } = useForm({
    defaultValues: formStore.useState((s) => s),
  });

  const page = formStore.useState((state) => state.page);

  useEffect(() => {
    formStore.update((s) => {
      s.page = 0;
    });
  }, []);
  const onSubmit = (formData) => {
    formStore.update((s) => {
      s.firstName = formData.firstName;
      s.lastName = formData.lastName;
      s.languageSpoken = formData.languageSpoken;
      s.religion = formData.religion;
      s.familyPlan = formData.familyPlan;
      s.race = formData.race;
    });
    console.log('SUBMITTED', formData);
  };

  useEffect(() => {}, [formStore]);
  const componentList: any = {
    name,
    gender,
    birthday,
    email,
    language,
    race,
    relationship,
    interest,
    media,
    location,
  };

  const key = Object.keys(stepList)[page];
  const title = Object.values(stepList)[page];

  let RenderComponent = null;
  const render = componentList[key] || null;
  if (render) {
    RenderComponent = render;
  }
  return (
    <S.ScrollContainer>
      <S.ProfileContainer>
        <S.PreviousBtn
          onPress={() => {
            if (page === 0) {
              navigation.goBack();
            } else {
              formStore.update((s) => {
                s.page -= 1;
              });
            }
          }}
        />
        <S.CategoryContainer>
          <S.Title style={{ fontFamily: 'JockeyOne_400Regular' }}>
            {page + 1}. {key.toLocaleUpperCase()}
          </S.Title>
          <S.StepRow>
            {Object.keys(stepList).map((step, idx) => {
              return (
                <S.Step
                  key={idx}
                  style={{
                    backgroundColor:
                      `${idx}` === `${page}` ? '#A94BF3' : '#D9D9D9',
                  }}
                />
              );
            })}
          </S.StepRow>
        </S.CategoryContainer>

        {/* <S.FormWrapper>
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

        <Controller
          name='languageSpoken'
          control={control}
          rules={{}}
          render={({ field: { onChange, onBlur, value } }) => (
            <Dropdown data={data} />
          )}
        />

        <Controller
          name='religion'
          control={control}
          rules={{}}
          render={({ field: { onChange, onBlur, value } }) => (
            <Inputbox
              placeholder='Religion'
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />

        <Controller
          name='familyPlan'
          control={control}
          rules={{}}
          render={({ field: { onChange, onBlur, value } }) => (
            <Inputbox
              placeholder='Family Plan'
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />

        <Controller
          name='race'
          control={control}
          rules={{}}
          render={({ field: { onChange, onBlur, value } }) => (
            <Inputbox
              placeholder='Race'
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />

        <TouchableHighlight onPress={handleSubmit(onSubmit)}>
          <S.ContinueBtn>
            <S.Continue
              style={{ fontFamily: 'JockeyOne_400Regular' }}
              onPress={() => {
                formStore.update((s) => {
                  s.page += 1;
                });
                console.log(formStore);
              }}
            >
              Continue
            </S.Continue>
          </S.ContinueBtn>
        </TouchableHighlight>
      </S.FormWrapper> */}
        <S.Title style={{ fontFamily: 'JockeyOne_400Regular' }}>
          {title}
        </S.Title>
        <S.ComponentWrapper>
          {render ? <RenderComponent /> : null}
        </S.ComponentWrapper>
      </S.ProfileContainer>
    </S.ScrollContainer>
  );
};
