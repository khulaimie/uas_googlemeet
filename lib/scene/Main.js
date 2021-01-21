import React from 'react';
import { Button, Container, Text, Thumbnail, View, Icon, ActionSheet } from 'native-base';
import { StyleSheet, Dimensions } from 'react-native';
import Header from '../comp/Header';
import Carousel from 'react-native-snap-carousel';
import ModalAccount from '../comp/ModalAccount';
import { users as usersDummy } from '../../dummy/data';

export class MyCarousel extends React.Component {
  constructor() {
    super();
    this.state = {
      entries: [
        {
          title: "Get a link you can share",
          subtitle: "Tap New meeting to get a link you can send to people you want to meet with",
          image: require('../../assets/getlink.jpg')
        },
        {
          title: "Your meeting is safe",
          subtitle: "No one can join a meeting unless invited or admitted by the host",
          image: require('../../assets/meeting.jpg')
        }
      ]
    }
  }

  _renderItem = ({item, index}) => {
    return (
      <View style={styles.slide}>
        <Thumbnail style={styles.image} large source={item.image} />
        <Text style={styles.title}>{ item.title }</Text>
        <Text style={styles.subtitle} note>{ item.subtitle }</Text>
      </View>
    );
  }

  render () {
    return (
      <Carousel
        ref={(c) => { this._carousel = c; }}
        data={this.state.entries}
        renderItem={this._renderItem}
        sliderWidth={Dimensions.get('window').width}
        itemWidth={Dimensions.get('window').width}
        onBeforeSnapToItem={this.props.onChange}
      />
    );
  }
}

export default class Main extends React.Component {
  constructor() {
    super();
    const users = [...usersDummy];
    const user = users.shift();
    this.state = {
      users,
      user,
      carouselActive: 0,
      showModal: false
    }
  }

  showActionSheet() {
    const buttons = [
      { text: "Get a meeting link to share", icon: "link-outline", iconColor: "#333" },
      { text: "Start an instant meeting", icon: "videocam-outline", iconColor: "#333" },
      { text: "Schedule in Google Calendar", icon: "calendar-outline", iconColor: "#333" },
      { text: "Close", icon: "close-outline", iconColor: "#333" }
    ];

    ActionSheet.show(
      {
        options: buttons,
        cancelButtonIndex: 3
      },
      buttonIndex => {
        
      }
    )
  }

  toJoinCode() {
    this.props.navigation.navigate('JoinCode');
  }

  showModal() {
    this.setState({
      showModal: true
    })
  }

  hideModal() {
    this.setState({
      showModal: false
    })
  }

  render() {
    const { carouselActive, showModal, user, users } = this.state;

    return (
      <Container>
        <ModalAccount visible={showModal} users={users} user={user} closeModal={this.hideModal.bind(this)} />
        <Header navigation={this.props.navigation} user={user} profileClick={this.showModal.bind(this)} />
        <View style={styles.buttons}>
          <Button style={styles.button} primary full onPress={this.showActionSheet}>
            <Text style={styles.buttonText}>New meeting</Text>
          </Button>
          <Button style={[styles.button, {borderColor: '#ccc'}]} primary full bordered onPress={this.toJoinCode.bind(this)}>
            <Text style={styles.buttonText}>Join with a code</Text>
          </Button>
        </View>
        <View style={styles.carousel}>
          <MyCarousel onChange={active => this.setState({carouselActive: active})} />
          <View style={styles.legendaCarousel}>
            <Icon name="ellipse" style={[styles.ellipseIcon, carouselActive == 0 ? styles.active : {}]} />
            <Icon name="ellipse" style={[styles.ellipseIcon, carouselActive == 1 ? styles.active : {}]} />
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    marginTop: 20
  },
  button: {
    marginHorizontal: 3,
    flex: 1,
    alignItems: 'center',
    borderRadius: 5,
    height: 38
  },
  buttonText: {
    fontWeight: 'bold'
  },
  carousel: {
    flex: 1
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '15%'
  },
  title: {
    fontSize: 22,
    marginBottom: 10
  },
  subtitle: {
    textAlign: 'center'
  },
  image: {
    width: 200,
    height: 200,
    marginTop: -50,
    borderRadius: 100,
    marginVertical: 15,
  },
  legendaCarousel: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingBottom: 20
  },
  ellipseIcon: {
    fontSize: 9,
    marginHorizontal: 2,
    color: '#1a73e866'
  },
  active: {
    color: '#1a73e8'
  }
})