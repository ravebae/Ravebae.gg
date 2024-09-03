import React, { useEffect, useRef, useState } from 'react';
import S from './styles';

export default function CodeBox({ code, setVerified }) {
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(['', '', '', '']);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  useEffect(() => {
    if (otp.every((el) => el)) {
      // Correct OTP
      console.log(otp.join(''), code, otp.join('') === code);
      if (otp.join('') === code) {
        setVerified(true);
      } else {
        setOtp(Array(4).fill(''));
        inputRefs.current[0]?.focus();
      }
    }
  }, [otp]);

  const onInputChange = (text, idx) => {
    const val = text;
    if (!isNaN(val)) {
      console.log('Here');
      setOtp((prev) => {
        const newOtp = [...prev];
        newOtp[idx] = val;
        return newOtp;
      });

      if (val !== '' && idx < otp.length - 1) {
        inputRefs.current[idx + 1]?.focus();
      }
    } else {
      setOtp((prev) => {
        const newOtp = [...prev];
        newOtp[idx] = '';
        return newOtp;
      });
    }
    console.log('Done');
  };

  const handleBackspace = (e, idx) => {
    if (e.nativeEvent.key === 'Backspace') {
      setOtp((prev) => {
        const newOtp = [...prev];
        newOtp[idx > 0 ? idx - 1 : 0] = '';
        return newOtp;
      });

      inputRefs.current[idx > 0 ? idx - 1 : 0]?.focus();
    }
  };

  return (
    <S.CodeContainer>
      {otp.map((data, idx) => {
        return (
          <S.CodeBox
            style={{ backgroundColor: data ? '#A94BF3' : 'white' }}
            key={idx}
          >
            <S.Code
              keyboardType='numeric'
              style={{ color: 'white' }}
              ref={(el) => el && (inputRefs.current[idx] = el)}
              textAlignVertical={'center'}
              onChangeText={(text) => {
                onInputChange(text, idx);
              }}
              value={data}
              onKeyPress={(e) => handleBackspace(e, idx)}
              maxLength={1}
            />
          </S.CodeBox>
        );
      })}
    </S.CodeContainer>
  );
}
