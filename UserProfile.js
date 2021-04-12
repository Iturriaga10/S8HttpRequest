import React, {useState} from 'react';
import { StyleSheet, View, Image, TextInput, Button } from 'react-native';

export const UserProfile = (props) => {
  
  const data = props.data; 

  const [text, onChangeText] = React.useState("");
  
  const [isFocus, setIsFocus] = useState(false);

  const onFocus = () =>{
    setIsFocus(!isFocus)
  }
  
  return(
    <>
    <View style={styles.container}>
      <Image 
        source={{ uri: data.image }}
        style={styles.imageIcon}
      />
      <TextInput 
        style={styles.textInput}
        placeholder="What's your dog doing?"
        clearTextOnFocus={true}
        multiline
        numberOfLines={2}
        maxLength={80}
        textBreakStrategy='balanced'
        onChangeText={onChangeText}
        value={text}
        onFocus={() => onFocus()}
      />
    </View>
    <View style={styles.button}>
      { isFocus ? <Button title="Post" onPress={() => Alert.alert('Simple Button pressed')} />  
                : null }
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 15
  },
  textInput:{
    //fontFamily: 'sans-serif-light',
    fontSize: 15,
    width: 330,
    color: 'black', 
  },
  imageIcon:{
    marginLeft: 5,
    marginRight: 5,
    width: 30, 
    height:30,
    borderRadius: 40,
  },
  button: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
  }
});