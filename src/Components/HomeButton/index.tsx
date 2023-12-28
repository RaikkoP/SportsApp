import React from "react";
import { Pressable, View, Image } from "react-native";
import { styles } from "./styles";

const HomeButton = ({navigation}) => {

    const onHomePress = () => {
        navigation.navigate("Menu")
    }

    return(
        <View style={styles.container}>
            <Pressable hitSlop={20} onPress={onHomePress}>
                <Image style={styles.image} source={require('../../assets/homeicon.png')}/>
            </Pressable>
        </View>
    )
}

export default HomeButton;