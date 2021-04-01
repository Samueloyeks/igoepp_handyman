import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import Check from '../../assets/svg/Check.svg'


const ServiceHistory = ({ navigation }) => (
    <View style={[styles.linkCard,{backgroundColor:'#0EB90E'}]}>
        <Check/>
        <Text style={styles.walletText}>Accepted Requests</Text>
    </View>
)


export default ServiceHistory;