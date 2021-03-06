import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback,
    TextInput,
    Dimensions,
    ScrollView,
    ListView,
    TouchableHighlight
} from 'react-native';

import   AllCss              from    '../AllCss';
import   TableCon            from    '../TableCon';    
import   immutable           from    'immutable';
import   NoBuildingAll       from    '../NoBuildingAll';
import   YesBuildingTwoA     from    './YesBuildingTwoA';

export default class TwoPageR extends Component {
    render() {
        return (
            <View style={styles.contrainer}>
            {
                this.props.state == true ? <YesBuildingTwoA/> : <YesBuildingTwoA/>
            }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contrainer: {
        flex: 1
    }
});