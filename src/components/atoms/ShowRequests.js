import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import styles from './styles';
import Request from '../../assets/svg/Request.svg'


const ShowRequests = ({ navigation }) => (
    <TouchableOpacity
        style={[styles.linkCard, { backgroundColor: '#C79BFF' }]}
        onPress={() => navigation.navigate('Requests')}>
        <View >
            <Request />
            <Text style={styles.walletText}>View Requests</Text>
        </View>
    </TouchableOpacity>

)


export default ShowRequests;