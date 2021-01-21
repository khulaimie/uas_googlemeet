import React from 'react';
import { Modal, StyleSheet, Image } from 'react-native';
import { View, Text, Content, Header, Left, Button, Icon, Body, ListItem, Thumbnail, List, Footer } from 'native-base';
import Account from './Account';


export default class ModalAccount extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { user, users } = this.props;

    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.props.visible}
      >
        <View style={styles.centeredView}>
          <View style={styles.backdrop} onTouchStart={this.props.closeModal} />
          <View style={styles.modalView}>
            <Content>
              <Header noShadow style={styles.header}>
                <Body style={styles.bodyHeader}>
                  <Button transparent style={styles.buttonClose} onPress={this.props.closeModal}>
                    <Icon style={styles.buttonIcon} name="close" />
                  </Button>
                  <Image style={styles.image} source={{uri: 'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png'}} />
                </Body>
              </Header>
              <View style={styles.selectedAccountBox}>
                <ListItem avatar button noBorder>
                  <Left>
                    <Thumbnail style={styles.avatar} source={{ uri: user.photo }} />
                  </Left>
                  <Body>
                    <View>
                      <Text style={styles.name}>{user.name}</Text>
                      <Text note style={styles.email}>{user.email}</Text>
                      <Button rounded bordered small style={styles.buttonManage}>
                        <Text style={styles.buttonManageText}>Manage your Google Account</Text>
                      </Button>
                    </View>
                  </Body>
                </ListItem>
              </View>
              <List dataArray={users} renderRow={item => <Account user={item} style={styles.list} />} />
             
              <ListItem icon noBorder style={styles.menu}>
                <Left>
                  <Icon style={styles.iconMenu} name="add" />
                </Left>
              <Body>
                <Text style={styles.textMenu}>Add another account</Text>
              </Body>
              </ListItem>
              <ListItem icon noBorder style={styles.menu}>
                <Left>
                  <Icon style={styles.iconMenu} name="settings" />
                </Left>
              <Body>
                <Text style={styles.textMenu}>Manage accounts on this device</Text>
              </Body>
              </ListItem>
            </Content>

            <Footer style={styles.footer}>
              <View style={styles.footerContent}>
                <Text note>Privacy Policy</Text>
                <Icon style={styles.footerdivider} name="ellipse" />
                <Text note>Term of Service</Text>
              </View>
            </Footer>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center'
  },
  backdrop: {
    backgroundColor: 'rgba(0,0,0,.6)',
    position: 'absolute',
    height: '100%',
    width: '120%'
  },
  modalView: {
    backgroundColor: '#fff',
    height: '80%',
    marginTop: -25,
    borderRadius: 10
  },
  header: {
    backgroundColor: 'rgba(0,0,0,0)'
  },
  buttonClose: {
    position: 'absolute',
    left: 0
  },
  buttonIcon: {
    color: '#000'
  },
  image: {
    width: 71,
    height: 23,
    alignSelf: 'center'
  },
  bodyHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
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
  },
  buttonManage: {
    marginTop: 20,
    borderColor: '#ddd'
  },
  buttonManageText: {
    color: '#333',
    fontWeight: 'bold'
  },
  selectedAccountBox: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 15
  },
  list: {
    flex: 1
  },
  footer: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
  },
  footerContent: {
    flex: 1,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10
  },
  footerdivider: {
    marginHorizontal: 20,
    fontSize: 4
  },
  iconMenu: {
      fontSize: 20,
      color: '#808080'

  },
  textMenu: {
      fontSize: 15,
      fontWeight: 'bold',
      color: '#333'
  },
})