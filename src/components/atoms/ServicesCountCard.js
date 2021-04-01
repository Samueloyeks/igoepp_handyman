import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from './styles';
import NumberFormat from 'react-number-format';


const ServicesCountCard = ({ amount }) => (
    <View style={styles.walletCard}>
        {/* <NumberFormat
            value={2456981}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'₦'}
            renderText={formattedValue =>
                <Text>{formattedValue}</Text>
            }
        /> */}
        <Text style={styles.walletAmount}>25</Text>
        <Text style={styles.walletText}>Services Performed</Text>
    </View>
)


export default ServicesCountCard; 