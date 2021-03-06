import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity,
    Image,
    TextInput,
    BackAndroid,
    Platform,
    ToastAndroid,
} from 'react-native';

import   styles      from    './commonCss';
import   homePage    from    './homePage';
import   Tool        from    './Tool';

export default class LogSign extends Component {
    _navigate(type = 'Normal') {
        this.props.navigator.push({
            component: logPage2,
            type: type
        })
    }
    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
        console.disableYellowBox = true;
    }
    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
        console.disableYellowBox = true;
    }
    onBackAndroid = () => {
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再点击一次退出应用',ToastAndroid.SHORT);
        return true;
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('./commonImg/start.png')} style={styles.bgColor}>
                    <View style={styles.logBox}>
                        <TouchableOpacity style={styles.containerStyleLog}
                        onPress={()=>this._navigate('Right')}>
                            <Text style={styles.styleLog}>{'登 录'}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.containerStyleSign}
                        onPress={()=>this._navigate('Right')}>
                            <Text style={styles.styleSign}>{'注 册'}</Text>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        );
    }
}
class logPage2 extends Component {
    constructor(props){
        super(props);
        this.state={
          valueNum: '学号',
          valuePass: '******'
        };
    }
    onChangeText(text){
        this.setState({valueNum:text});
    }
    handleChange(text){
        this.setState({valuePass:text});
    }
    componentWillMount() {
        console.disableYellowBox = true;
    }
    componentWillUnmount() {
        console.disableYellowBox = true;
    }
    postData(){
        valueNum = Number(this.state.valueNum);
        valuePass = Number(this.state.valuePass);
        if (!(valueNum && valuePass)){
            alert("用户名或密码未输入");
        };
        var url = Tool.url();
        fetch(url+"api/student/login?number="+valueNum+"&password="+valuePass)
        .then((response) => response.text())
        .then((responseText) => {
            var data = JSON.parse(responseText);
            if (data.status == 0){
                this.props.navigator.push({
                    component: homePage,
                });
            }
        })
        .catch((error) => {
            console.warn(error);
            alert("用户名或密码错误")
        })
    }
    postData1(){
        this.props.navigator.push({
            component: homePage,
        });
    }
    render() {
        valueNum = this.state.valueNum;
        valuePass = this.state.valuePass;
        return (
            <View style={styles.containerLS}>
                <Image source={require('./commonImg/logsign.png')} style={styles.bgColor}>
                    <View style={styles.backIcon}>
                        <TouchableOpacity style={styles.backIcon}
                        onPress={()=>this.props.navigator.pop()}>
                            <Image source={require('./commonImg/back.png')} style={styles.backImg}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.logPanel}>

                        <TextInput
                        style={styles.textinput}
                        placeholder="学号"
                        placeholderTextColor="#ccc"
                        multiline = {false}
                        onChangeText={ (text) => this.onChangeText(text)}/>

                        <TextInput
                        style={styles.textinput}
                        placeholder="密码"
                        placeholderTextColor="#ccc"
                        secureTextEntry={true}
                        multiline = {false}
                        onChangeText={ (text) => this.handleChange(text)}/>

                    </View>
                    <View style={styles.sureIcon}>
                        <TouchableOpacity style={styles.logBtn}
                        onPress={()=>{
                            this.postData();
                        }}>
                            <Text style={styles.styleLog}
                            >{'登 录'}</Text>
                        </TouchableOpacity>
                    </View>
                </Image>
            </View>
        );
    }
};
