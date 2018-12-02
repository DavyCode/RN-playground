import React, {Component} from 'react'
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux'
import LibraryItem from './LibraryItem'

class LibraryList extends Component {
    renderItem (library) {
        return (
            <LibraryItem library={library}/>
        )
    }
    render () {
        return (
            <View>
                <FlatList
                    data={this.props.Library}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                />
            </View>
        )
    } 
};

const mapStateToProps = ({ Library }) => ({ Library });

export default connect(mapStateToProps)(LibraryList);