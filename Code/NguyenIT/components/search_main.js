import React, {Component} from "react";
import {
 View,
 Text,
 StyleSheet,
 TouchableOpacity,
} from "react-native";

export default class SearchMain extends React.Component {
    constructor(props){
        super(props);
        this.state={
            nguyenGetQuyen:1
        }
    }
    render() {
        return(
            <View>
                <TouchableOpacity onPress={()=>{this.clickMe()}}>
                <Text>{this.props.searchValue}</Text>
                </TouchableOpacity>
            </View>
        );
    }
    clickMe(){
        console.log('You love me!');
        this.setState({
            nguyenGetQuyen: this.state.nguyenGetQuyen + 1
        });
    }
}

SearchMain.propType = {
    searchValue:React.PropTypes.string,
}
var sSearchMain = StyleSheet.create({

})