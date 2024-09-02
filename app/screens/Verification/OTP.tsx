import { View, Text, TouchableHighlight } from 'react-native';
import React, { useEffect, useState } from 'react';

import S from './styles';
import { FIREBASE_AUTH } from 'firebaseConfig';

import axios from 'axios';
import CodeBox from '@components/CodeBox';

const OTP = ({ navigation, route: { params } }) => {
  let { code } = params;
  let [verified, setVerified] = useState(false);

  useEffect(() => {
    if (verified) navigation.navigate('profile');
  }, [verified]);

  const auth = FIREBASE_AUTH;
  return (
    <S.ViewContainer>
      <S.ScrollContainer
        nestedScrollEnabled={true}
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <S.VerificationContainer>
          <CodeBox setVerified={setVerified} code={code} />
          <TouchableHighlight
            onPress={async () => {
              console.log('Verify code!');
              navigation.navigate('profile');
            }}
            activeOpacity={1}
          >
            <S.ContinueBtn>
              <S.Continue onPress={() => {}}>Verify code</S.Continue>
            </S.ContinueBtn>
          </TouchableHighlight>
        </S.VerificationContainer>
      </S.ScrollContainer>
    </S.ViewContainer>
  );
};

export default OTP;
