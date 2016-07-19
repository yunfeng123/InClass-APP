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
    Dimensions
} from 'react-native';

import  styles        from   '../common/commonCss';
import  controlCss    from   './controlCss';
import  classPage     from   '../classPage/classPage';
import  applyPage     from   '../applyPage/applyPage';
import  mePage        from   '../mePage/mePage';
import  TableCon      from   './TableCon';

class homePage extends Component {
    renderScene(route, navigator) {
        return <route.component navigator={navigator}  {...route.passProps} />;
    }
    configureScene(route, routeStack) {
        if (route.type == "Right") {
            return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
        }
        return Navigator.SceneConfigs.PushFromLeft; // 左侧弹出
    }
    render() {
        return (
          <Navigator
            style={{flex:1}}
            initialRoute={{component: classPage}}
            configureScene={this.configureScene}
            renderScene={this.renderScene}/>
        );
    }
}

////////////////////////////////////////////////////controlPage
class controlPage extends Component {
    _tabClass(type = 'Left') {
        this.props.navigator.push({
            component: classPage,
            type: type
        })
    }
    _tabApply(type = 'Left') {
        this.props.navigator.push({
            component: applyPage,
            type: type
        })
    }
    _tabControl(type = 'Right') {
        this.props.navigator.push({
            component: controlPage,
            type: type
        })
    }
    _tabMe(type = 'Right') {
        this.props.navigator.push({
            component: mePage,
            type: type
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.tabBar}>
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabClass('Left')}>
                        <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/class.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'教室'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabApply('Left')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/apply.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'申请'}</Text>
                        </View>
                    </TouchableOpacity>
    
                    <View style={styles.containerStyleTab}>
                       <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/control.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'控制'}</Text>
                        </View>
                    </View>
    
                    <TouchableOpacity style={styles.containerStyleTab}
                    onPress={()=>this._tabMe('Right')}>
                       <View style={styles.tabContainer}>
                            <Image source={require('../common/commonImg/me.png')} style={styles.tabImg}/>
                        </View>
                        <View style={styles.tabTextContainer}>
                             <Text style={styles.tabText}>{'我'}</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.containerCon}>
                     <View style={controlCss.headText}>
                        <Text style={controlCss.tabText}>{"X11010教室"}</Text>
                    </View>
                    <View style={controlCss.tableContainer}>
                        <TableCon num="编号" place="位置"  condition="状态" conditionTime="状态变更时间" mode="人控模式" operate="操作" remark="备注" style={controlCss.containerTableConCellHead}></TableCon>
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellGray}></TableCon>
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellGray}></TableCon>
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                        <TableCon num="1111" place="X6405" condition="关闭" conditionTime="2016/5/13"    mode="off"      operate="开启" remark="普通" style={controlCss.containerTableConCellBlue}></TableCon> 
                    </View>
                </View>
            </View>
        );
    }
}
AppRegistry.registerComponent('controlPage', () => controlPage);
module.exports = controlPage;