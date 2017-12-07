import React from "react";
import {AppRegistry,Image,StatusBar}from "react-native";
import {Container,Content,Text,List,ListItem}from "native-base";
const routes=[
    "News",
    "Rules",
    "Syllabus",
    "Home"
];
export  default  class SlideBar extends React.Component{
    render(){
        return(
            <Container>
                <Content>
                    <Image
                        source={
                            require('../images/sidemenu/Image.png')
                        }
                        style={{
                            height: 150,
                            width:300,
                            alignSelf: "stretch",
                            justifyContent: "center",
                            alignItems: "center"
                        }}/>

                    <List
                    dataArray={routes}
                    renderRow={data=>{
                        return(
                            <ListItem
                            button onPress={()=>this.props.navigation.navigate(data)}>
                                <Text>{data}</Text>
                            </ListItem>
                        );
                    }}/>
                </Content>
            </Container>
        );
    }
}
