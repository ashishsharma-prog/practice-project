import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './Navigator/AppNavigator';
import { legacy_createStore as createStore} from 'redux'
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ProductReducer from './store/reducers/ProductReducer';
import CartReducer from './store/reducers/CartReducer';
import OrderReducer from './store/reducers/OrderReducer';
const rootreducer=combineReducers({
  products:ProductReducer,
  cartreducer:CartReducer,
  orderreducer:OrderReducer
})
const store=createStore(rootreducer)
export default function App() {
  return (
    
    <Provider store={store}>
    
    
    
    <AppNavigator/>
    
        </Provider>
    
  );
}

const styles = StyleSheet.create({
  
});
