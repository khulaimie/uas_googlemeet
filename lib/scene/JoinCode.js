import React from 'react';
import { Title, Left, Right, Body, Header, Input, Item, Text, Button, Container, Icon, Content } from 'native-base';
import { StyleSheet } from 'react-native';
import material from '../../native-base-theme/variables/material';

export class HeaderJoin extends React.Component {
  render() {
    const { navigation, data } = this.props;

    return (
      <Header androidStatusBarColor="#fff" iosBarStyle="dark-content" noShadow>
        <Left>
          <Button transparent onPress={navigation.goBack}>
            <Icon name='arrow-back-outline' />
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Join with a code</Title>
        </Body>
        <Right>
          <Button primary bordered style={styles.btnJoin} disabled={!this.props.availableJoin}>
            <Text style={styles.btnJoinText}>Join</Text>
          </Button>
        </Right>
      </Header>
    );
  }
}

export default class JoinCode extends React.Component {
  constructor() {
    super()
    this.state = {
      code: ""
    }
  }

  render() {
    const { code } = this.state

    return (
      <Container>
        <HeaderJoin navigation={this.props.navigation} availableJoin={code !== ""} />
        <Content style={styles.content}>
          <Text>Enter the code provided by the meeting organizer</Text>
          <Item style={styles.inputBox}>
            <Input placeholder="Example: abc-mnop-xyz" autoFocus value={this.state.code} onChangeText={text => this.setState({code: text})} />
          </Item>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 23
  },
  btnJoin: {
    borderColor: 'rgba(0,0,0,0)'
  },
  btnJoinText: {
    fontWeight: 'bold'
  },
  content: {
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  inputBox: {
    borderBottomColor: material.brandPrimary,
    borderBottomWidth: 2,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginTop: 15,
    paddingHorizontal: 10
  }
})