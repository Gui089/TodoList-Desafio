import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    backgroundColor:'#1A1A1A',
    flex:1
  },
  inputAdd:{
    backgroundColor:'#1A1A1A',
    width:271,
    height:54,
    borderRadius:5,
    borderWidth:0.7,
    padding:10,
    fontSize:16,
  },
  formAdd: {
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    top:150,
    flexDirection:'row',
    alignSelf:'center',
    gap:10,
  },
  buttonAdd: {
    backgroundColor:'#1E6F9F',
    width:52,
    height:52,
    borderRadius:5,
    alignItems:'center',
    justifyContent:'center'
  }
});