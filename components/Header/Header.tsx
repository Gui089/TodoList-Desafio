import { Image, Text, View } from "react-native"
import { styles } from "./header-style"


export const Header = () => {
  return (
    <View style={styles.container}>
      <Image 
        source={require('../../assets/images/Logo.png')} 
        width={110}
        height={32}
        />
    </View>
  )
}