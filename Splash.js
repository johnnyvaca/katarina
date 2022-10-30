import React, {useState} from 'react';
import {
  Image,
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TextInput,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import {re} from '@babel/core/lib/vendor/import-meta-resolve';

export default function Splash() {
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
        Log in
      </Text>
      <Text
        style={{
          color: '#00385D',
          fontSize: 20,
          fontWeight: 'bold',
          marginTop: 20,
          marginBottom: 15,
        }}>
        E-mail address
      </Text>
      <TextInput
        style={[{borderColor: inputBorderColor}, styles.input]}
        //    onChangeText={onChangeNumber}
        //   value="hello"
        placeholder="E-mail address"
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
        Password
      </Text>
      <View style={[{borderColor: inputBorderColor2}, styles.container]}>
        <TextInput
          style={{width: '89%', color: '#00385D'}}
          //    onChangeText={onChangeNumber}
          // value="hello"
          placeholder="Password"
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
            Log in
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
            <Text>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Confidentiality</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>Contact us</Text>
          </TouchableOpacity>
        </View>
      </View>
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
