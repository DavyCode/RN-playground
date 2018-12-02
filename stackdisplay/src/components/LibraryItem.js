import React, {Component} from 'react'
import { 
    Text, 
    View, 
    StyleSheet, 
    TouchableWithoutFeedback,
    NativeModules,
    LayoutAnimation, 
} from 'react-native';
import { connect } from 'react-redux'
import * as actions from '../actions'
import { Cardsection } from './common'

// Note that in order to get LayoutAnimation to work on Android 
// you need to set the following flags via UIManager
const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);


class LibraryItem extends Component {
    componentWillUpdate() {
        LayoutAnimation.spring()
    }
    renderDescription () {
        const { library, expanded } = this.props;

        if(expanded) {
            return (
                <Text style={{flex: 1, paddingLeft: 10, paddingRight: 10}}>
                    {library.item.description}
                </Text>
            )
        }
    }
    render () {
        const {titleText} = styles;
        const { title, id } = this.props.library.item;
        
        return (
            <TouchableWithoutFeedback
                onPress={() => this.props.selectLibrary(id)}
            >
                <View>
                    <Cardsection>
                        <Text style={titleText}>
                            {title}
                        </Text>
                    </Cardsection>
                    {this.renderDescription()}
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 20,
        paddingLeft: 5
    }
});

const mapStateToProps = (state, ownProps) => { 
    const expanded = state.SelectLibraryId === ownProps.library.item.id
    return {expanded}
};

export default connect(mapStateToProps, actions)(LibraryItem);
