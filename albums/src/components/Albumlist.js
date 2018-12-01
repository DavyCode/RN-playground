import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import axios from 'axios';
import Albumdetail from './Albumdetail'

class Albumlist extends Component {
    constructor (props) {
        super(props);

        this.state = {
            albums: []
        }
        this.renderAlbums = this.renderAlbums.bind(this);
    }
    componentWillMount () {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => {
            this.setState(() => ({ albums: response.data}))
        })
    }
    renderAlbums () {
        return this.state.albums.map(album => <Albumdetail key={album.title} album={album}/>)
    }

    render () {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        )
    }
};

export default Albumlist;
