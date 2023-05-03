import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";

export const UserCard = ({user}) => {

    return (
        <ImageBackground source={{uri: user.coverImage}} style={styles.userCard}>
            <View style={styles.overlayC}/>
            <Image
                style={styles.userImage}
                // src={user.avatar}
                source={{uri: user.avatar}}
            />
            <View>
                <Text style={styles.nameText}>{user.name}</Text>
                <Text style={styles.nicknameText}>@{user.handle}</Text>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    userCard: {
        backgroundColor: 'gray',
        padding: 10,
        flexDirection: 'row',
        alignItems: 'flex-end',

        borderRadius: 10,
        overflow: 'hidden',
        marginVertical: 5,
    },
    overlayC: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        // position: 'absolute',
        // top: 0,
        // bottom: 0,
        // left: 0,
        // right: 0,
        ...StyleSheet.absoluteFill,
    },
    userImage: {
        width: 100,
        height: 100,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3,
        marginRight: 20,
    },
    nameText: {
        color: 'white',
        fontSize: 22,
        fontWeight: '500',
        marginBottom: 5,
    },
    nicknameText: {
        color: 'white',
    }
});