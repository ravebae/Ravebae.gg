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
import React, { useEffect, useState } from 'react';
import { formStore } from 'store';

import name from './Name';
import gender from './Gender';
import birthday from './Birthday';
import language from './Language';
import race from './Race';
import relationship from './Relationship';
import interest from './Name';
import media from './Name';
import location from './Location';
import Back from '@components/Back';
import { useAnimationState } from 'moti';

const stepList = {
  name: 'What is your name?',
  gender: 'What is your gender?',
  birthday: 'When is your birthday?',
  language: 'What can you speak?',
  race: 'What is your race?',
  relationship: 'Relationship intention?',
  interest: 'Your interests',
  media: 'Upload photos & videos',
  location: 'Where are you based?',
};

export const ProfileDetails = ({ navigation }) => {
  let [done, setDone] = useState(false);
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
      if (s.page < Object.keys(stepList).length - 1) {
        s.page += 1;
      } else {
        console.log('Done');
      }
    });
  };

  useEffect(() => {}, [formStore]);
  const componentList: any = {
    name,
    gender,
    birthday,
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
            <Back />
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
              <S.Question
                style={{ fontFamily: 'JockeyOne_400Regular' }}
                state={animationState}
                exit={{ left: -300 }}
                transition={{
                  type: 'spring',
                  delay: 50,
                }}
              >
                {title}
              </S.Question>
              {render ? <RenderComponent /> : null}

              <View style={{ flex: 1, paddingTop: 50, position: 'relative' }}>
                <TouchableHighlight
                  onPress={() => {
                    formStore.update((s) => {
                      let category = Object.keys(stepList);
                      if (s.page < category.length - 1) {
                        console.log(category[s.page + 1]);
                        if (category[s.page + 1] === 'location') {
                          setDone(true);
                        }
                        s.page += 1;
                      } else {
                        setDone(false);
                        navigation.navigate('explore');
                      }
                    });
                    console.log(formStore);
                  }}
                  style={{
                    width: '100%',
                    position: 'absolute',
                    bottom: 0,
                  }}
                  activeOpacity={1}
                >
                  <S.ContinueBtn>
                    <S.Continue>
                      {done ? 'Find my ravebae!' : 'Continue'}
                    </S.Continue>
                  </S.ContinueBtn>
                </TouchableHighlight>
              </View>
            </S.FormWrapper>
          </S.ComponentWrapper>
        </S.ProfileContainer>
      </S.ScrollContainer>
    </S.ViewContainer>
  );
};
