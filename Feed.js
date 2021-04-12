import React, {useState} from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

export const Feed = (props) => {

  const [data, setData] = useState(props.data);

  const [like, setLike] = useState(props.data.like);

  const [likeCounter, setLikeCounter] = useState(props.data.likeCounter);
  
  const dogstagramURL = 'http://b098ba2f1199.ngrok.io/feed';

  const _onPressButton = () => {
    console.log(String(data['_id']['$oid']))
    if (like){
      fetch(dogstagramURL + '/like/decrease/' + String(data['_id']['$oid']), {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      setLikeCounter(likeCounter-1);
    } else{
      fetch(dogstagramURL + '/like/increase/' + String(data['_id']['$oid']), {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      });
      setLikeCounter(likeCounter+1);
    }
    
    setLike(!like);
  }
        
  return(
    <>  
      <View style={styles.headerContainer}>
        <Image 
          source={{ uri: data.image }}
          style={styles.imageIcon}
        />
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <Text style={styles.descriptionText}>{data.description}</Text>
      <View style={styles.imageFeedContainer}>
        <Image 
          source={{ uri: data.image }}
          style={styles.imageFeed}
        />
      </View>
      <View style={styles.imageReactionContainer}>
      <TouchableHighlight onPress={ _onPressButton } underlayColor="white">
        <View style={styles.iconContainer}>
          { like ? <Entypo name="baidu" size={20} color="blue" /> : <Entypo name="baidu" size={20} color="rgb(110,110,110)" /> }
        </View>
      </TouchableHighlight>
      <Text>{likeCounter}</Text>
        <View style={styles.iconContainer}>
          <Feather name="share-2" size={20} color="rgb(110,110,110)" />
        </View>
      </View>
    </>
  );
}
  
const styles = StyleSheet.create({
  headerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 1,
  },
  text:{
    //fontFamily: 'sans-serif-light',
    fontSize: 20,
    color: 'black' 
  },
  descriptionText:{
    margin: 8,
  },
  imageIcon:{
    marginTop: 5,
    marginLeft: 16,
    marginRight: 16,
    width: 30, 
    height:30,
    borderRadius: 40,
  },
  imageReactionContainer:{
    flexDirection:'row',
    borderBottomColor: 'rgb(110,110,110)',
    borderBottomWidth: 7,
  },
  iconContainer: {
    paddingTop: 5,
    paddingBottom: 5,
    paddingLeft: 10
  },
  imageReaction:{
      marginLeft: 16,
      width: 30, 
      height:30
  },
  imageFeedContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageFeed:{
    width: 200, 
    height:200
},
});
  