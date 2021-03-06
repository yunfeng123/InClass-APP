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

export default class Building extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Building: "",
        };
    }
    componentWillMount() {
        console.disableYellowBox = true;
        this.getBuilding();
    }
    componentWillUnmount() {
        console.disableYellowBox = true;
        this.getBuilding();
    }
    getBuilding(){
        switch (Number(this.props.num)){
            case 1:
                this.setState({Building: "第一教学楼"});
                break;
            case 2:
                this.setState({Building: "第二教学楼"});
                break;
            case 3:
                this.setState({Building: "第三教学楼"});
                break;
            case 4:
                this.setState({Building: "第四教学楼"});
                break;
            case 5:
                this.setState({Building: "第五教学楼"});
                break;
            case 6:
                this.setState({Building: "第六教学楼"});
                break;
            case 7:
                this.setState({Building: "第七教学楼"});
                break;
            case 8:
                this.setState({Building: "第八教学楼"});
                break;
            case 9:
                this.setState({Building: "第九教学楼"});
                break;
            default:
                alert("no");
        }
    }
    render() {
        return (
            <View style={styles.contrainer}>
                <TouchableOpacity style={styles.contrainer} onPress={this.props.closeModal}>
                    <Text style={styles.text}>{this.state.Building}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    contrainer: {
        width: Dimensions.get('window').width*0.7,
        height: 35,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: "#0187d6",
    },
    text: {
        width: Dimensions.get('window').width*0.6,
        height: 35,
        fontSize: 20,
        textAlign: "center",
        textAlignVertical: "center",
    }
});