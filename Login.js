import React, {useRef, useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Alert,
  ActionSheetIOS,
} from 'react-native';
import './i18n';
import {useTranslation} from 'react-i18next';

import i18next from 'i18next';
import Options from 'react-native-actionsheet/lib/options';

export default function Login() {
  const {t, i18n} = useTranslation('header', 'global');
  const changeLanguage = value => {
    console.log(value);
  };

  const [inputBorderColor, setInputBorderColor] = useState('#E4EAEEFF');
  const [inputBorderColor2, setInputBorderColor2] = useState('#E4EAEEFF');
  const [password, setPassword] = useState(true);
  const customOnFocus = () => {
    setInputBorderColor('#237DF1');
  };

  const customOnBlur = () => {
    setInputBorderColor('#E4EAEEFF');
  };

  const customOnFocus2 = () => {
    setInputBorderColor2('#237DF1');
  };

  const customOnBlur2 = () => {
    setInputBorderColor2('#E4EAEEFF');
  };
  const passwordClick = () => {
    setPassword(!password);
  };

  let actionSheet = useRef();
  let optionArray = [
    'Option1',
    'Option2',
    'Option3',
    'Option4',
    'Option5',
    'Option6',
    'Option7',
    'Cancel',
  ];

  const onPress = () => {
    ActionSheetIOS.showActionSheetWithOptions({
      Options: ['Cancel', 'sdf', 'Cwerw', 'Caeerel', 'Cancerterel'],
    });
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: '#fefdfd',
        height: '100%',
        width: '100%',
        paddingHorizontal: 15,
      }}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image source={require('./logo.png')} style={styles.image} />
      </View>
      <Text
        style={{
          marginTop: 10,
          marginBottom: 10,
          fontFamily: 'Source Sans Pro',
          fontWeight: 'bold',
          fontSize: 24,
          lineHeight: 30,

          color: '#00385D',
        }}>
        {t('login')}
      </Text>
      <Text
        style={{
          color: '#00385D',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 20,
          marginBottom: 15,
        }}>
        {t('email')}
      </Text>
      <TextInput
        style={[{borderColor: inputBorderColor}, styles.input]}
        //    onChangeText={onChangeNumber}
        //   value="hello"
        placeholder={t('email')}
        //   keyboardType="numeric"
        onFocus={customOnFocus}
        onBlur={customOnBlur}
      />
      <Text
        style={{
          color: '#00385D',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 20,
          marginBottom: 15,
        }}>
        {t('password')}
      </Text>
      <View style={[{borderColor: inputBorderColor2}, styles.container]}>
        <TextInput
          style={{width: '89%', color: '#00385D'}}
          //    onChangeText={onChangeNumber}
          // value="hello"
          placeholder={t('password')}
          //  keyboardType="numeric"
          secureTextEntry={password}
          passwordRules={require}
          onFocus={customOnFocus2}
          onBlur={customOnBlur2}
        />
        <TouchableOpacity
          onPress={passwordClick}
          style={{margin: 0, padding: 0}}>
          <Image
            source={
              password ? require('./oeil.png') : require('./oeil-off.png')
            }
            style={styles.image2}
          />
        </TouchableOpacity>
      </View>
      <Text>React Native Bottom action Menu</Text>
      <TouchableOpacity>
        <Text>Open Bottom actionSheet</Text>
      </TouchableOpacity>
      <View
        style={{
          height: '45%',
          justifyContent: 'flex-end',
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#237DF1',
            height: 48,
            width: '100%',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginBottom: 20,
          }}>
          <Image
            style={{
              width: '7%',
              resizeMode: 'contain',
              marginRight: 10,
            }}
            source={require('./arrow2.png')}
          />
          <Text
            style={{
              color: '#fefdfd',
              fontFamily: 'Source Sans Pro',
              fontSize: 16,
            }}>
            {t('log')}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            height: '20%',
          }}>
          <TouchableOpacity>
            <Text>{t('help')}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{t('confidentiality')}</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>{t('contact')}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/*  <ActionSheet
        ref={actionSheet}
        title={'Which do you like?'}
        options={optionArray}
        cancelButtonIndex={7}
        destructiveButtonIndex={1}
        onPress={index => {
          alert(optionArray[index]);
        }}
      /> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 0,
    alignItems: 'center',
    borderWidth: 1.5,
    borderRadius: 7,
    height: 40,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  unchecked: {width: 56, height: 56, left: 1},
  bin: {width: 56, height: 56, left: 30},
  image: {
    width: 150,
    height: 120,
    resizeMode: 'contain',
  },
  image2: {
    width: 27,
    height: 37,
    resizeMode: 'contain',
    padding: 0,
    margin: 0,
  },
  viewImage: {
    width: 150,
    height: 100,
    marginRight: 0,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1.5,
    borderRadius: 7,
    padding: 10,
    fontFamily: 'Source Sans Pro',
    color: '#00385D',
  },
});
