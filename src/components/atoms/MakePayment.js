import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import Payment from '../../assets/svg/Payment.svg'

const MakePayment = ({ navigation }) => (
    <View style={[styles.linkCard,{backgroundColor:'#9FE1FF'}]}>
        <Payment/>
        <Text style={styles.walletText}>View Payment</Text>
    </View>
)


export default MakePayment;