import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Logo from '../../../assets/img/eu.jpg';
import { styles } from './Styles';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={{ height: wp(45), width: hp(45) }} />
      <View>
        <TouchableOpacity>
          <Text>Ativar Bat Sinal</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
