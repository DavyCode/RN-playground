import React from 'react'
import { Text, View, StyleSheet, Image, Linking } from 'react-native';
import Card from './Card'
import Cardsection from './Cardsection'
import Button from './Button'

const Albumdetail = ({album: {title, artist, thumbnail_image, image, url}}) => {
    const { 
        headerContent, 
        headerContentTitle,
        thumbnail, 
        thumbnailContainer,
        bodyImage,
        imageWrapper
    } = styles;

    return (
        <Card>
            <Cardsection>
                <View style={thumbnailContainer}>
                    <Image
                        style={thumbnail}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={headerContent}>
                    <Text style={headerContentTitle}>{title}</Text>
                    <Text>{artist}</Text>
                </View> 
            </Cardsection>
            <Cardsection>
                <View style={imageWrapper}>
                    <Image 
                        resizeMode="contain" //cover || stretch
                        style={bodyImage}
                        source={{ uri: image}}
                    />
                </View>
            </Cardsection>
            <Cardsection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy now!!!
                </Button>
            </Cardsection>
        </Card>
    )
};

const styles = StyleSheet.create({
    headerContent: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerContentTitle: {
        fontSize: 18
    },
    thumbnailContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    thumbnail: {
        width: 50,
        height: 50
    },
    bodyImage: {
        height: 200,
        width: null,
        flexDirection: "row",
    },
    imageWrapper: {
        flex: 1,
        alignItems: 'stretch'
    }
});

export default Albumdetail;