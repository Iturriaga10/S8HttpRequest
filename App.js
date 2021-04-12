import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import {Header} from './Header';
import {Feed} from './Feed';
import {UserProfile} from './UserProfile';

export default function App() {
  const dataUser = {
    "name": "Carlos Fuentes",
    "image": "https://cnnespanol.cnn.com/wp-content/uploads/2020/07/200703104728-labrador-retriever-stock-super-169.jpg?quality=100&strip=info&w=940&h=530&crop=1",
  }
  
  const dogstagramURL = 'http://0.0.0.0:5000/feed';
  
  const [dataFeed, setDataFeed] = useState([]); 
  
  fetch(dogstagramURL)
  .then( (response) => response.json())
  .then((json) => setDataFeed(json) )
  .catch((error) => alert(error)); 

  return (
    <>
    <Header />
    <UserProfile data = {dataUser}/>
    <FlatList 
      keyExtractor={ (item) => String(item['_id']['$oid']) }
      data = {dataFeed}
      renderItem = { ({item}) =>(
        <Feed data={item}/>
      )}
    />
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 1,
    borderTopColor: 'grey',
    borderTopWidth: 1,
  },
  text:{
    //fontFamily: 'sans-serif-light',
    fontSize: 20,
    color: 'black' 
  },
  descriptionText:{
    margin: 8,
  },
  image:{
    backgroundColor:'violet',
    marginTop: 5,
    marginLeft: 16,
    marginRight: 16,
    width: 30, 
    height:30
  },
});
