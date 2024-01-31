import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import Logo from '../../../assets/img/eu.jpg';
import { styles } from './Styles';
import colors from '../../constants/Colors';

export default function HomeScreen() {
  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/amadeo-bon/');
  };

  const openInstagram = () => {
    Linking.openURL('https://www.instagram.com/amadeo_bon/');
  };

  const openGitHub = () => {
    Linking.openURL('https://github.com/Amadeo-Frontend');
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={Logo} style={styles.profileImage} />
      </View>
      <View>
        <Text style={[styles.title, { color: colors.primary }]}>
          Amadeo Bon
        </Text>
        <Text style={[styles.subTitle, { color: colors.primary }]}>
          Frontend Developer Mobile
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={openLinkedIn}>
          <Ionicons
            name="logo-linkedin"
            size={24}
            color={colors.secundary}
            style={{ marginRight: 8 }}
          />
          <Text style={styles.buttonText}>LINKEDIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openInstagram}>
          <Ionicons
            name="logo-instagram"
            size={24}
            color={colors.secundary}
            style={{ marginRight: 8 }}
          />
          <Text style={styles.buttonText}>INSTAGRAM</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={openGitHub}>
          <Ionicons
            name="logo-github"
            size={24}
            color={colors.secundary}
            style={{ marginRight: 8 }}
          />
          <Text style={styles.buttonText}>GITHUB</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
