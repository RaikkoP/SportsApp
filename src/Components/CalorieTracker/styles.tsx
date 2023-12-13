import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        height: '20%',
    },
    innerContainer1: {
        width: '60%',
    },
    innerContainer2: {
        backgroundColor: '#f41',
        width: '40%',
    },
    icon: {
        width: 30,
        height: 30,
    },
    iconContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderRadius: 100,
        width: '30%',
        height: '30%',
        padding: 10,
    }
});
