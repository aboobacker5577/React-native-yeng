
import React from 'react';
import {
    StatusBar,
    AppRegistry
} from 'react-native';
import{
    Container,
    Header,
    Title,
    Left,
    Right,
    Button,
    Body,
    Content,
    Text,
    Card,
    CardItem
} from 'native-base'


export default class  home extends React.Component {
    render() {
        return(
            <Container>
                <Header>
                    <Left>
                        <Button
                        transparent
                        onPress={()=>this.props.navigation.navigate("DrawerOpen")}>
                            <Title>#</Title>
                        </Button>
                    </Left>
                    <Body>
                    <Title>HomeScreen</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text>Chat App to talk some !</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

AppRegistry.registerComponent('home',()=>home);
