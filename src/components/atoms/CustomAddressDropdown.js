import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_API_KEY } from '@env';
import { Colors, Custom } from '../../styles';
import { mt10 } from '../../styles/custom';



const CustomAddressDropdown = ({ required, updateAddressComponents }) => {
    return (
        // <ScrollView style={{width:'100%'}}>
        <GooglePlacesAutocomplete
            placeholder='Choose a Location'
            minLength={2}
            autoFocus={true}
            returnKeyType={'search'}
            keyboardAppearance={'light'}
            listViewDisplayed='auto'
            fetchDetails={true}
            getDefaultValue={() => ''}

            query={{
                key: GOOGLE_API_KEY,
                language: 'en',
            }}
            renderLeftButton={() => (
                required ?
                    <Text style={{
                        fontWeight: 'bold',
                        color: Colors.DANGER,
                        marginTop: 10
                    }}>*</Text>
                    : null
            )
            }
            styles={{
                textInputContainer: {
                    width: '100%',
                    borderBottomColor: 'gray',
                    borderBottomWidth: 1,
                    height: 50,
                },
                textInput:{
                    backgroundColor:'transparent'
                },
                description: {
                    fontWeight: 'bold'
                },
                predefinedPlacesDescription: {
                    color: '#1faadb'
                },
                listView: {
                    // backgroundColor: 'gray',
                    // height: 500,
                    // marginBottom: 10
                },
            }}

            nearbyPlacesAPI='GooglePlacesSearch'
            GoogleReverseGeocodingQuery={{

            }}
            GooglePlacesSearchQuery={{
                rankby: 'distance',
                type: 'cafe'
            }}

            GooglePlacesDetailsQuery={{
                fields: ['formatted_address', 'geometry'],
            }}
            // predefinedPlaces={[homePlace, workPlace]}

            filterReverseGeocodingByTypes={['locality', 'administrative_area_level_3', 'country', 'landmark', 'street_address', 'country']}
            debounce={200}

            onPress={(data, details = null) => {
                updateAddressComponents(details)
            }}


        />

        // </ScrollView>
    );
};

export default CustomAddressDropdown;