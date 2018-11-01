import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { observer, inject } from 'mobx-react';
import {Container, Header, Content, Badge, Text, Icon} from 'native-base';
import { Button } from 'native-base';

@inject('store')
@observer
export default class Home extends Component {
    constructor(props){
     super(props);
        this.WalletStore   = props.store.WalletStore;
    }

    async componentDidMount(){
        this.WalletStore.setTotal()
    }
    render() {
        <Container>
            <Header />
            <Content>
                <Form>
                    <Item>
                        <Input placeholder="Add Money" />
                    </Item>
                    <Item last>
                        <Button rounded danger>
                            <Text>Save</Text>
                        </Button>
                    </Item>
                    <Item last>
                        <Badge>
                            <Text>{this.WalletStore.total()}</Text>
                        </Badge>
                    </Item>
                </Form>
            </Content>
        </Container>
    }
}