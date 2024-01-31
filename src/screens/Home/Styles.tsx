import { StyleSheet } from 'react-native';
import colors from '../../constants/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.bg,
  },
  imageContainer: {
    borderRadius: wp(45),
    overflow: 'hidden',
    marginBottom: hp(2),
  },
  profileImage: {
    height: wp(45),
    width: wp(45),
    borderWidth: 2,
    borderColor: colors.secundary,
  },
  title: {
    fontSize: 30,
  },
  subTitle: {
    color: colors.primary,
    borderBottomWidth: 2,
    borderBottomColor: colors.tertiary,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  button: {
    width: '80%',
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
