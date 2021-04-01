import React, { Component, createRef } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { Colors, Custom } from '../../styles';
import { userActions } from '../../store/actions';
import { connect } from 'react-redux';
import { getUser } from '../../helpers/auth';




// components 
import CustomActionSheet from '../atoms/CustomActionSheet';


const options = [
  'Cancel',
  'Yes'
];
const title = <Text style={{ fontSize: 15 }}>Log out?</Text>;


function mapStateToProps(state) {
  const loggedOut = state.user.loggedOut;

  return {
    loggedOut
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(userActions.logout()),
  };
}

class SideMenu extends Component {

  state = {
    user: null
  }

  navigateToScreen = route => () => {
    const { navigation } = this.props;
    navigation.navigate(route);
  };

  handlePress = async index => {
    const { logout } = this.props;

    if (index === 1) {
      logout();
    }
  };



  componentDidUpdate(prevProps) {
    if (this.props.loggedOut !== prevProps.loggedOut && this.props.loggedOut) {
      this.props.navigation.navigate('Auth')
    }
  }

  async componentDidMount() {
    let user = await getUser();
    this.setState({ user })
  }

  actionSheet = createRef();
  showActionSheet = () => this.actionSheet.current.show();

  render() {
    const { user } = this.state;

    return (
      <View style={{flex:1}}>
        <View style={styles.topView}>
          <Text style={[Custom.boldText,styles.fullName]}>{user && user.first_name} {user && user.last_name}</Text>
          <Text style={styles.email}>{user && user.email}</Text>
        </View>
        <View style={styles.background}>

          <TouchableOpacity onPress={this.navigateToScreen('Account')} style={styles.navSectionStyle}>
            <Text style={[Custom.boldText, styles.navItemStyle]}>SERVICE HISTORY</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToScreen('Tasks')} style={styles.navSectionStyle}>
            <Text style={[Custom.boldText, styles.navItemStyle]}>PAYMENTS</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToScreen('About')} style={styles.navSectionStyle}>
            <Text style={[Custom.boldText, styles.navItemStyle]}>REQUESTS</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToScreen('Contact')} style={styles.navSectionStyle}>
            <Text style={[Custom.boldText, styles.navItemStyle]}>MARKET PLACE</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.navigateToScreen('Help')} style={styles.navSectionStyle}>
            <Text style={[Custom.boldText, styles.navItemStyle]}>TERMS & CONDITIONS</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.showActionSheet} style={styles.navSectionStyle}>
            <Text style={[Custom.boldText, styles.navItemStyle, styles.signoutStyle]}>SIGN OUT</Text>
          </TouchableOpacity>

          <CustomActionSheet
            customRef={this.actionSheet}
            title={title}
            options={options}
            cancelIndex={0}
            handlePress={this.handlePress}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  background: {
    backgroundColor: '#FFF',
    flex: 0.7,
    padding: 40,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  navItemStyle: {
    color: '#000',
    paddingVertical: 25,
    fontSize: 12,
  },
  navSectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signoutStyle: {
    color: Colors.PRIMARY
  },
  topView: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.PRIMARY,
    flex:0.3,
    padding:20
  },
  fullName:{
    fontSize:18,
    textTransform:'capitalize',
    color:'#FFF'
  },
  email:{
    color:'#FFF'
  }
}



export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideMenu);
