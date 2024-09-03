import React, { useEffect, useState } from 'react';
import { TouchableHighlight } from 'react-native';

import { FIREBASE_AUTH } from 'firebaseConfig';
import S from './styles';

import CodeBox from '@components/CodeBox';

const OTP = ({ navigation, route: { params } }) => {
  const { code } = params;
  const [verified, setVerified] = useState(false);

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
