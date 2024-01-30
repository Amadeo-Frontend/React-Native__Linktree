import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './Styles';
import Toast from 'react-native-toast-message';
import { Ionicons } from '@expo/vector-icons';
import colors from '../../constants/Colors';

export default function FormScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');
  const [mensagem, setMensagem] = useState('');

  const [erroNome, setErroNome] = useState('');
  const [erroEmail, setErroEmail] = useState('');
  const [erroTelefone, setErroTelefone] = useState('');
  const [erroMensagem, setErroMensagem] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    if (validarFormulario()) {
      console.log({ nome, email, telefone, mensagem });
      Toast.show({
        type: 'success',
        text1: 'Formulário enviado!',
        text2: 'Sua mensagem foi enviada com sucesso.',
        onHide: () => {
          setNome('');
          setEmail('');
          setTelefone('');
          setMensagem('');
          navigation.navigate('Home');
        },
      });
    }
  };

  const handleErroToast = (mensagemErro: string) => {
    Toast.show({
      type: 'error',
      text1: 'Erro no formulário',
      text2: mensagemErro,
    } as any);
  };

  const validarFormulario = () => {
    let erro = false;
    setErroNome('');
    setErroEmail('');
    setErroTelefone('');
    setErroMensagem('');

    if (!nome) {
      setErroNome('Por favor, insira o seu nome.');
      erro = true;
    }

    if (!email) {
      setErroEmail('Por favor, insira o seu email.');
      erro = true;
    } else if (!email.includes('@')) {
      setErroEmail('Por favor, insira um email válido.');
      erro = true;
    }

    if (!telefone) {
      setErroTelefone('Por favor, insira o seu telefone.');
      erro = true;
    }

    if (!mensagem) {
      setErroMensagem('Por favor, descreva a emergência.');
      erro = true;
    }

    if (erro) {
      handleErroToast('Por favor, corrija os erros no formulário.');
    }

    return !erro;
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Ionicons
            name="person-outline"
            size={18}
            color={colors.primary}
            style={{ marginRight: 4 }}
          />
          <Text style={styles.label}>{' Nome:'}</Text>
        </View>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={setNome}
          placeholder="Digite seu nome"
          placeholderTextColor="gray"
        />
        {!!erroNome && <Text style={styles.erroTexto}>{erroNome}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Ionicons
            name="mail-outline"
            size={18}
            color={colors.primary}
            style={{ marginRight: 4 }}
          />
          <Text style={styles.label}>{' Email:'}</Text>
        </View>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
          keyboardType="email-address"
          placeholderTextColor="gray"
        />
        {!!erroEmail && <Text style={styles.erroTexto}>{erroEmail}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Ionicons
            name="call-outline"
            size={18}
            color={colors.primary}
            style={{ marginRight: 4 }}
          />
          <Text style={styles.label}>{' Telefone:'}</Text>
        </View>
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          placeholder="Digite seu telefone"
          keyboardType="phone-pad"
          placeholderTextColor="gray"
        />
        {!!erroTelefone && <Text style={styles.erroTexto}>{erroTelefone}</Text>}
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.labelContainer}>
          <Ionicons
            name="chatbubbles-outline"
            size={18}
            color={colors.primary}
            style={{ marginRight: 4 }}
          />
          <Text style={styles.label}>{' Escreva sua mensagem'}</Text>
        </View>
        <TextInput
          style={[styles.input, styles.textArea]}
          value={mensagem}
          onChangeText={setMensagem}
          placeholder="Digite aqui sua mensagem"
          multiline
          numberOfLines={4}
          placeholderTextColor="gray"
        />
        {!!erroMensagem && <Text style={styles.erroTexto}>{erroMensagem}</Text>}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Ionicons
          name="enter-outline"
          size={24}
          color="white"
          style={{ marginRight: 8 }}
        />
        <Text style={styles.buttonText}>ENVIAR</Text>
      </TouchableOpacity>
    </View>
  );
}
