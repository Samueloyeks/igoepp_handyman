import React, {PureComponent} from 'react';
import {Text, View, ActivityIndicator, FlatList} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles';
import {Custom} from '../../styles';
import {requestActions} from '../../store/actions';
import {Colors} from '../../styles';
import {getUser} from '../../helpers/auth';
import {userService} from '../../services';

// components
import RequestCard from '../../components/atoms/RequestCard';

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

class RequestDetailsScreen extends PureComponent {
  state = {
    user: null,
    customer: null,
    request: null,
    loading: false,
  };

  async componentDidMount() {
    this.setState({loading: true});
    const {navigation} = this.props;
    let request = navigation.state.params.request;

    let user = await getUser();
    let customer = (await userService.getCustomer(request.customer_id)).data;
    this.setState({user, customer, request, loading: false});
  }

  render() {
    const {navigation} = this.props;
    const {loading, customer, request} = this.state;

    return (
      <View style={styles.customBackground}>
        <Text style={styles.titleText}>Request Information</Text>
        {!loading && customer && request ? (
          <View>
            <Text>
              Customer Name: {customer.first_name} {customer.last_name}
            </Text>
            <Text>
              Customer Address For Service:{' '}
              {request.help_location !== 'N/A'
                ? request.help_location
                : request.help_lga !== 'N/A'
                ? request.help_lga
                : request.help_landmark !== 'N/A'
                ? request.help_landmark
                : request.help_state !== 'N/A'
                ? request.help_state
                : 'your environment'}
            </Text>
            <Text>Service Date: {request.help_date}</Text>
            <Text>Customer Instructions: {request.help_desc}</Text>
          </View>
        ) : (
          <ActivityIndicator />
        )}
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RequestDetailsScreen);
