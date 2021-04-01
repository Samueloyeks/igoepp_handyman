import React, { PureComponent } from 'react';
import { Text, View, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { Custom } from '../../styles';
import { userActions, servicesActions } from '../../store/actions';
import { Colors } from '../../styles';
import { getUser } from '../../helpers/auth';

//components
import ServicesCountCard from '../../components/atoms/ServicesCountCard'
import QuickLinks from '../../components/layouts/QuickLinks'

function mapStateToProps(state) {


  return {

  };
}


function mapDispatchToProps(dispatch) {
  return {

  };
}


class HomeScreen extends PureComponent {

  state = {
    user: null
  }

  async componentDidMount() {
    let user = await getUser();
    this.setState({ user })
  }



  render() {
    const { navigation, loading } = this.props;
    var { services, user } = this.state;

    return (
      <View style={styles.customBackground}>
        <Text style={{ color: Colors.PRIMARY }}>Hi {user && user.first_name}</Text>
        <View style={{flex:1}}> 
          <View style={{ flex: 0.3 }}>
            <ServicesCountCard />
          </View>
          <View style={{ flex: 0.6 }}>
          <Text style={{ color: Colors.PRIMARY }}>Quick Links</Text>
            <QuickLinks navigation={navigation} />
          </View>
        </View>
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);