import React from "react";
import {
    StatusBar,
    ActivityIndicator,
    ListView,
    StyleSheet,
    View,
    Alert
} from "react-native";
import {
    Container,
    Header,
    Title,
    Left,
    Icon,
    Right,
    Button,
    Body,
    Content,
    Text,
    Card,
    CardItem
} from "native-base";
const reafreshing =false;
const data=[];
export default class syllabus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {

        return fetch('https://yengapp.com/Syllabus/getChildById/Syllabus')
            .then((response) => response.json())
            .then((responseJson) => {
                let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
                this.setState({
                    isLoading: false,
                    dataSource: ds.cloneWithRows(responseJson.children),

                });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    ListViewItemSeparator = () => {
        return (
            <View
                style={{
                    height: .5,
                    width: "100%",
                    backgroundColor: "#000",
                }}
            />
        );
    }

    GetItem(fruit_name) {

        Alert.alert(fruit_name);

    }
    render() {
        if (this.state.isLoading) {
            return (
                <View style={{flex: 1, paddingTop: 20}}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <Container>
                <Header>
                    <Left>
                        <Button
                            transparent
                            onPress={() => this.props.navigation.navigate("DrawerOpen")}>
                            <Icon name="menu" />
                        </Button>
                    </Left>
                    <Body>
                    <Title>Syllabus</Title>
                    </Body>
                    <Right />
                </Header>
                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                            <Text>Yeng Syllabus</Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <View style={styles.MainContainer}>

                        <ListView

                            dataSource={this.state.dataSource}


                            renderSeparator= {this.ListViewItemSeparator}

                            renderRow={(rowData) => <Text style={styles.rowViewContainer}
                                                          onPress={this.GetItem.bind(this, rowData)} >{rowData}</Text>}

                        />

                    </View>
                </Content>
            </Container>
        );
    }
}
const styles = StyleSheet.create({

    MainContainer :{

// Setting up View inside content in Vertically center.
        justifyContent: 'center',
        flex:1,
        margin: 10

    },

    rowViewContainer: {
        fontSize: 20,
        paddingRight: 10,
        paddingTop: 10,
        paddingBottom: 10,
    }

});