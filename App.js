import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import ToastExample from './Components/Mytoast';

const App: () => React$Node = () => {

function Mytoast  () 
{
  ToastExample.show('Ela', ToastExample.SHORT);

}
  return (
    
     <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
     <TouchableOpacity onPress={() =>   ToastExample.show('Ela', ToastExample.SHORT)} >
       <Text> Click </Text>
</TouchableOpacity>
  
     </View>
  );
};

export default App;
