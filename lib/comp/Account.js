import React from 'react';
import { ListItem, Left, Thumbnail, Body, View, Text, Button } from 'native-base';
import { StyleSheet } from 'react-native';

export default class Account extends React.Component {
  render() {
    const { user } = this.props;
    
    return (
      <ListItem avatar button noBorder>
        <Left>
          <Thumbnail style={styles.avatar} source={{ uri: user.photo }} />
        </Left>
        <Body>
          <View>
            <Text style={styles.name}>{user.name}</Text>
            <Text note style={styles.email}>{user.email}</Text>
          </View>
        </Body>
      </ListItem>
    );
  }
}

const styles = StyleSheet.create({
  avatar: {
    height: 40,
    width: 40
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15
  },
  email: {
    fontSize: 14
  }
})