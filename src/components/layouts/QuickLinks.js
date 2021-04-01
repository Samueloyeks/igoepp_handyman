import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import styles from './styles';
import MakePayment from '../atoms/MakePayment';
import ShowRequests from '../atoms/ShowRequests';
import ServiceHistory from '../atoms/ServiceHistory';
import MarketPlace from '../atoms/MarketPlace';
import ViewRequests from '../atoms/ViewRequests';
import { Custom } from '../../styles';


const QuickLinks = ({ navigation }) => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ flex: 1, flexDirection: 'row',overflow:'scroll' }}>
        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.3 }}>
                <MakePayment navigation={navigation} />
            </View>
            <View style={{ flex: 0.7 }}>
                <ShowRequests navigation={navigation} />
            </View>
        </View>

        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.7 }}>
                <ServiceHistory navigation={navigation} />
            </View>
            <View style={{ flex: 0.3 }}>
                <MarketPlace navigation={navigation} />
            </View>
        </View>

        <View style={{ flex: 1 }}>
            <View style={{ flex: 0.7 }}>
                <ViewRequests navigation={navigation} />
            </View>

        </View>
    </ScrollView>
)


export default QuickLinks;