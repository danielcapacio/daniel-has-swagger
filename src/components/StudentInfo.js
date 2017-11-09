import React, { Component } from 'react';
import { View} from 'react-native';
import { ApiClient,  Student, AccountApi, ManageApi, StudentsapiApi } from 'my_api';
import { Container, Header, Content, List, ListItem, Text, Left, Body, Right, Button, Icon, Title, H3} from 'native-base';

export default class StudentInfo extends Component {

    constructor(props) {
        super(props);
        this.state = {
            students: []
        };
    }

    async componentWillMount() {
        var MyApi = require('my_api');
        var apiInstance = new MyApi.StudentsapiApi();
        var callback = (error, data, response) => {
            if (error) {
                console.error(error);
            } else {
                // console.log('API called successfully. Returned data: ' + data);
                this.setState({
                    students: response.body
                });
            }
        };
        apiInstance.apiStudentsapiGet(callback);
    }

    render() {
        var studentList = [];
        for (let i = 0; i < this.state.students.length; i++ ) {
            let keys = [];
            let values = [];
            for (key in this.state.students[i]) {
                keys.push(key);
                values.push(this.state.students[i][key]);
            }
            studentList.push(
                <View key={i}>
                    <ListItem itemHeader style={{backgroundColor: '#e6e6e6'}}>
                        <H3>{values[1]}&nbsp;{values[2]}</H3>
                    </ListItem>
                    <ListItem>
                        <Text>{keys[0]}:&nbsp;{values[0]}</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{keys[4]}:&nbsp;{values[4]}</Text>
                    </ListItem>
                    <ListItem>
                        <Text>{keys[3]}:&nbsp;{values[3]}</Text>
                    </ListItem>
                </View>
            );
        }
        return (
            <Container>
                <Header>
                    <Body>
                        <Title>Get Students</Title>
                    </Body>
                </Header>
                <Content>
                    <List>
                        {studentList}
                    </List>
                </Content>
            </Container>
        );
    }
}
