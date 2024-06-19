import { Controller, useForm } from 'react-hook-form';

import S from './styles';
import {
  Button,
  SafeAreaView,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  Image,
} from 'react-native';
import React, { useEffect } from 'react';
import { formStore } from 'store';

import name from './Name';
import gender from './Gender';
import birthday from './Birthday';
import email from './Email';
import language from './Language';
import race from './Race';
import relationship from './Relationship';
import interest from './Name';
import media from './Name';
import location from './Name';
import Back from '@components/Back';
import { useAnimationState } from 'moti';

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

  const handleContinue = () => {
    // navigation.navigate('details');
    formStore.update((s) => {
      s.page += 1;
    });
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

  const animationState = useAnimationState({
    from: {
      opacity: 0,
      left: 100,
    },
    to: {
      opacity: 1,
      left: 0,
    },
  });

  return (
    <S.ViewContainer>
      <S.ScrollContainer
        nestedScrollEnabled={true}
        contentContainerStyle={{ flexGrow: 1 }}
      >
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
          >
            <Image src='assets/back.svg' />
          </S.PreviousBtn>
          <S.CategoryContainer>
            <S.Title style={{ fontFamily: 'JockeyOne_400Regular' }}>
              {key.toLocaleUpperCase()}
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
          <S.ComponentWrapper style={{ flex: 1, flexGrow: 1 }}>
            <S.FormWrapper>
              <S.Question style={{ fontFamily: 'JockeyOne_400Regular' }}>
                {title}
              </S.Question>
              {render ? <RenderComponent /> : null}
              <TouchableHighlight
                onPress={handleContinue}
                style={{
                  position: 'absolute',
                  flex: 1,
                  bottom: 0,
                  left: 20,
                  width: '100%',
                }}
                activeOpacity={1}
              >
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
            </S.FormWrapper>
          </S.ComponentWrapper>
        </S.ProfileContainer>
      </S.ScrollContainer>
    </S.ViewContainer>
  );
};
