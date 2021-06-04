import React,{Component} from "react"
import {Header,Icon,Badge} from "react-native-elements"
const MyHeader = (props)=>{
    return(
        <Header backgroundColor = "#eaf8fe" centerComponent = {{text:props.title,styles:{color:"#90a5a9",fontSize:20,fontWeight:"bold"}}}></Header>
    )
}
export default MyHeader