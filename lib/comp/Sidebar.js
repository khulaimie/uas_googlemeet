import React from 'react';
import { Container, View, Text, List, ListItem, Left, Body } from 'native-base';
import { StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'

export default class Sidebar extends React.Component {
  render() {
    return (
      <Container>
        <View style={styles.header}>
          <Image style={styles.image} source={{uri: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png'}} />
          <Text style={styles.title}>Meet</Text>
        </View>
        <List style={styles.menuTop}>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="settings" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Settings</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="feedback" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Send Feedback</Text>
            </Body>
          </ListItem>
          <ListItem icon noBorder style={styles.menu}>
            <Left>
              <Icon style={styles.iconMenu} name="help-outline" />
            </Left>
            <Body>
              <Text style={styles.textMenu}>Help</Text>
            </Body>
          </ListItem>
        </List>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 85,
    alignItems: 'flex-start',
    paddingTop: 45,
    paddingHorizontal: 20
  },
  image: {
    width: 71,
    height: 23
  },
  title: {
    fontSize: 20,
    marginLeft: 3,
    marginTop: -3,
    color: '#808080'
  },
  iconMenu: {
    fontSize: 20,
    color: '#808080'
  },
  textMenu: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333'
  }
})