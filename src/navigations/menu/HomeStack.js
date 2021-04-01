import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from '../../views/home';
import RequestScreen from '../../views/requests';
import RequestDetailsScreen from '../../views/requestDetails';



const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  Requests: {
    screen: RequestScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  RequestDetails: {
    screen: RequestDetailsScreen,
    navigationOptions: {
      headerShown: false,
    },
  },
  // ReservationType: {
  //   screen: ReservationTypeScreen,
  //   navigationOptions: ({ navigation }) => ({
  //     headerLeft: () => (
  //       <TouchableOpacity onPress={() => navigation.goBack(null)}>
  //         <View style={styles.menu}>
  //           <Text>Back</Text>
  //         </View>
  //       </TouchableOpacity>
  //     ),
  //   }),
  // },
  initialRouteName: 'Home',
});


export default HomeStack;
