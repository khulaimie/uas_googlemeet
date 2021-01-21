import React from 'react';
import { Header, Left, Icon, Button, Body, Title, Right, Thumbnail } from 'native-base';
import { StyleSheet } from 'react-native';

export default class HeaderComp extends React.Component {
  render() {
    const { navigation, user } = this.props;

    return (
      <Header androidStatusBarColor="#fff" iosBarStyle="dark-content" noShadow>
        <Left style={styles.left}>
          <Button transparent onPress={navigation.openDrawer}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body style={styles.body}>
          <Title style={styles.title}>Meet</Title>
        </Body>
        <Right style={styles.right}>
          <Button transparent onPress={this.props.profileClick}>
            <Thumbnail source={{ uri: user.photo }} style={styles.userPhoto} />
          </Button>
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  left: {
    flex: 0,
    margin: 0
  },
  body: {
    alignItems: 'center'
  },
  right: {
    flex: 0,
    margin: 0
  },
  title: {
    fontSize: 25,
    color: '#000',
    marginLeft: 20
  },
  userPhoto: {
    height: 35,
    width: 35
  }
})