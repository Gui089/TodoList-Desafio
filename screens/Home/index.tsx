import {View,TextInput,Text, TouchableOpacity, Image} from 'react-native';
import { styles } from './style';
import { Header } from '@/components/Header/Header';

export const HomeScreen = () => {
   return (
    <View style={styles.container}>
        <Header />

        <View style={styles.formAdd}>
          <TextInput 
             style={styles.inputAdd} 
             placeholder='Adicione uma nova tarefa'
             placeholderTextColor={'#808080'}
          />
          <TouchableOpacity style={styles.buttonAdd}>
            <Image source={require('../../assets/images/plus.png')} />
          </TouchableOpacity>
        </View>

    </View>
   )
}