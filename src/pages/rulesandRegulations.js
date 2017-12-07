
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


export default class  rulesandRegulations extends React.Component {
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
                    <Title>Roules and Regulation</Title>
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

AppRegistry.registerComponent('rulesandRegulations',()=>rulesandRegulations);
