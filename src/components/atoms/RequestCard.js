import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Header} from 'react-native';
import Menu from '../../assets/svg/Menu.svg';
import {Colors, Custom, Typography} from '../../styles';
import styles from './styles';

// components
import CustomButton from '../atoms/CustomButton';

const RequestCard = ({request, navigation}) => (
  <TouchableOpacity>
    <View style={styles.requestCard}>
      <View style={[Custom.row]}>
        <View>
          <Text style={[styles.cardTitle]}>
            {request.cat_name} request at{' '}
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
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flex: 0.4}}>
            <CustomButton
              customStyle={{
                backgroundColor: 'white',
                borderColor: '#BB2222',
                borderWidth: 1,
              }}
              title={'Cancel'}
            />
          </View>

          <View style={{flex: 0.4}}>
            <CustomButton
              customStyle={{
                backgroundColor: Colors.PRIMARY,
                color: '#FFF',
              }}
              title={'View Request'}
              onPress={() =>
                navigation.navigate('RequestDetails', {request: request})
              }
            />
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

export default RequestCard;
