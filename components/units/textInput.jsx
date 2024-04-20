import {useState} from "react";
import {StyleSheet, Text, View} from 'react-native';
import {Input, Icon} from '@rneui/themed';

const CustomTextInput = ({
     label, value,
     onChange,
     secureTextEntry,
     placeholder
 }) => {
    const [state, setState] = useState({
        isHidden: true
    });
    const toggleHidden = () => {
        setState({
            ...state,
            isHidden: !state.isHidden
        });
    }
    return (
        <View style={styles.wrapper}>
            <Text style={styles.label}>{label}</Text>
            <Input
                secureTextEntry={secureTextEntry && state.isHidden}
                value={value}
                placeholder={placeholder}
                style={styles.input}
                onChange={onChange}
                rightIcon={secureTextEntry?<Icon name={state.isHidden
                    ? 'eye-off'
                    : 'eye'} onPress={toggleHidden
                } />:false}
            />
        </View>
    );
}

CustomTextInput.defaultProps = {
    label: 'Label',
    value: undefined,
    onChange: () => false,
    secureTextEntry: false,
}

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
    },
    label: {
        fontSize: 20,
        marginBottom: 5,
        paddingLeft: 10
    },
    input: {
        width: '100%',
        height: 40,
        // borderWidth: 1,
        // borderColor: 'black',
        paddingLeft: 10
    }
})

export default CustomTextInput;