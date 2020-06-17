/* eslint-disable prettier/prettier */
import { Platform } from 'react-native';

// export const baseUrl = 'http://localhost:3001/';
// export const baseUrl = 'http://10.0.2.2:3001/';
let dummy = ''
Platform.OS === 'ios' ? dummy = 'http://localhost:3001/' : dummy = 'http://10.0.2.2:3001/';
// export const baseUrl = dummy;
export const baseUrl = 'https://confusion-react-native.herokuapp.com/';