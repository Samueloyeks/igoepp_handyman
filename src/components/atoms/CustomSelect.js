
import React, { useState } from "react";
import styles from './styles';
import { View, StyleSheet, Text } from "react-native";
import RNPickerSelect from 'react-native-picker-select';
import { Colors } from "../../styles";




const CustomSelect = ({
    options,
    selected,
    updateSelected,
    customStyle,
    placeholder,
    required = false,
    showText = false,
    ...rest
}) => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (

        <View style={{ flex: 1, flexDirection: 'row' }}>
            {
                required ?
                    <View style={styles.selectAsteriskContainer}>
                        <Text style={{ color: Colors.DANGER, fontWeight: 'bold' }}>*</Text>
                    </View>
                    : null
            }
            <View style={{ flex: 1 }}>
                <RNPickerSelect
                    value={selected}
                    fixAndroidTouchableBug={true}
                    placeholder={placeholder}
                    useNativeAndroidPickerStyle={true}
                    style={pickerSelectStyles}
                    onValueChange={(itemValue, itemIndex) => updateSelected(itemValue)}
                    items={options}
                />
                {showText ? <Text>{selected}</Text> : null}
            </View>
        </View>

    );
}

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 15,
        marginHorizontal: 10,
        borderBottomWidth: 0.5,
        color: 'black',
        paddingLeft: 20,
        width: '95%',
        fontFamily: 'Poppins-Regular',
        height: 50,
        marginBottom:20
    },
    inputAndroid: {
        fontSize: 15,
        marginHorizontal: 10,
        borderBottomWidth: 0.5,
        color: 'black',
        paddingLeft: 20,
        width: '95%',
        fontFamily: 'Poppins-Regular',
        height: 50,
        marginBottom:20
    },
});

export default CustomSelect