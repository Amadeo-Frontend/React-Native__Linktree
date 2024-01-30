import AppNavigation from './src/routes/BottomTabs.routes';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <>
      <AppNavigation />
      <Toast />
    </>
  );
}
