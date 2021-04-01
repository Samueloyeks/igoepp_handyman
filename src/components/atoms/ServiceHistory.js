import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import History from '../../assets/svg/History.svg'


const ServiceHistory = ({ navigation }) => (
    <View style={[styles.linkCard,{backgroundColor:'#FE8A97'}]}>
        <History/>
        <Text style={styles.walletText}>Service History</Text>
    </View>
)


export default ServiceHistory;