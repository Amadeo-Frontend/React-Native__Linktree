import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bg,
    color: colors.primary,
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    color: colors.primary,
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    color: colors.primary,
    borderWidth: 1,
    borderColor: colors.secundary,
    padding: 10,
    marginBottom: 10,
    borderRadius: 4,
  },
  textArea: {
    height: 100,
    marginBottom: 25,
  },
  erroTexto: {
    color: colors.accent,
    fontSize: 14,
    marginBottom: 5,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: colors.secundary,
    borderRadius: 5,
    marginHorizontal: 5,
    marginBottom: 15,
    marginTop: 15,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    textAlign: 'center',
    color: colors.secundary,
  },
});
