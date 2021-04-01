import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Header } from 'react-native';
import Menu from '../../assets/svg/Menu.svg';
import styles from './styles'

const CustomHeader = ({ navigation }) => (
    <View style={styles.header}>
        <View style={styles.headerLeft}>
            <TouchableOpacity onPress={navigation.toggleDrawer}>
                <Menu />
            </TouchableOpacity>
        </View>
    </View>
);


export default CustomHeader;