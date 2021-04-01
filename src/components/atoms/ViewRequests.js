import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import Request from '../../assets/svg/Request.svg'


const ViewRequests = ({ navigation }) => (
    <View style={[styles.linkCard,{backgroundColor:'#9FE1FF'}]}>
        <Request/>
        <Text style={styles.walletText}>Service History</Text>
    </View>
)


export default ViewRequests;