import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import React from 'react';
import Logo from '../../../assets/img/eu.jpg';
import { styles } from './Styles';
import { Ionicons } from '@expo/vector-icons';

export default function PortfolioScreen() {
  const batSinal = () => {
    Linking.openURL(
      'https://github.com/Amadeo-Frontend/React-native__bat-signal',
    );
  };
  const snake = () => {
    Linking.openURL(
      'https://github.com/Amadeo-Frontend/React-Native__snake-game',
    );
  };
  const batPass = () => {
    Linking.openURL(
      'https://github.com/Amadeo-Frontend/React-Native__bat-pass',
    );
  };

  const lottieApp = () => {
    Linking.openURL(
      'https://github.com/Amadeo-Frontend/React-native__lottie-app',
    );
  };

  return (
    <View style={styles.container}>
      {/* Título e Ícone do React */}
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Conheça Meus Projetos em </Text>
        <View style={styles.subTitle}>
          <Ionicons
            name="logo-react"
            size={24}
            color={'#61DAFB'}
            style={{ marginRight: 8 }}
          />
          <Text style={styles.titleText}>{'React Native'}</Text>
        </View>
      </View>

      {/* Cards */}
      <View style={styles.cardsContainer}>
        {/* Card 1 */}
        <TouchableOpacity onPress={snake} style={styles.card}>
          <Image source={Logo} style={styles.cardImage} />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>Projeto Snake Game</Text>
          </View>
        </TouchableOpacity>

        {/* Card 2 */}
        <TouchableOpacity onPress={batSinal} style={styles.card}>
          <Image source={Logo} style={styles.cardImage} />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>Projeto Bat Sinal</Text>
          </View>
        </TouchableOpacity>

        {/* Card 3 */}
        <TouchableOpacity onPress={batPass} style={styles.card}>
          <Image source={Logo} style={styles.cardImage} />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>Projeto Bat Pass</Text>
          </View>
        </TouchableOpacity>

        {/* Card 4 */}
        <TouchableOpacity onPress={lottieApp} style={styles.card}>
          <Image source={Logo} style={styles.cardImage} />
          <View style={styles.overlay}>
            <Text style={styles.overlayText}>Projeto Lottie app</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
