import React, { PureComponent } from 'react';
import { Text, View, ActivityIndicator, FlatList } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { Custom } from '../../styles';
import { requestActions } from '../../store/actions';
import { Colors } from '../../styles';
import { getUser } from '../../helpers/auth';


// components 
import RequestCard from '../../components/atoms/RequestCard';


function mapStateToProps(state) {
  const { loading, requests } = state.requests;

  return {
    loading,
    requests
  };
}

function mapDispatchToProps(dispatch) {

  return {
    getRequests: (id) => dispatch(requestActions.getRequests(id)),
  };
}


class RequestScreen extends PureComponent {

  state = {
    user: null
  }

  async componentDidMount() {
    const { getRequests } = this.props;
    let user = await getUser();
    this.setState({ user })

    getRequests(user.id)
  }



  render() {
    const { navigation, loading, requests } = this.props;
    var { searchString, services, user } = this.state;

    return (
      <View style={styles.customBackground}>
        <Text style={styles.titleText}>Requests</Text>

        {
          !loading ?
            <FlatList
              data={requests}
              renderItem={({ item, index }) =>
                <RequestCard
                  key={index}
                  request={item}
                  navigation={navigation}
                />}
              keyExtractor={item => item._id}
              contentContainerStyle={{ paddingBottom: 50 }}
              showsVerticalScrollIndicator={false}
            />
            :
            <ActivityIndicator size="large" />
        }
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestScreen);

