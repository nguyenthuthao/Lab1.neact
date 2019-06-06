import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon,Card, CardItem, Thumbnail, Text, Left, Body, Right, Tab, Tabs, TabHeading } from 'native-base';
export default class User extends React.Component {
    static navigationOptions = {
        title: 'Home',
    };

    render(){
        return (
            <Container>
        <Header>
        <Image style={{width:20,height:20,marginLeft:'auto',marginRight:'auto'}} source={require('../assets/In.png')}></Image>
        <Image style={{width:20,height:20}} source={require('../assets/Del.png')}></Image>
        </Header>
        <Content>
        
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/logo.png')} />
                <Body>
                  <Text>Nguyen Thu Thao</Text>
                  <Text note>Home Beautiful</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/Home.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
            <CardItem>
              <Left>
                <Thumbnail source={require('../assets/logo.png')} />
                <Body>
                  <Text>Nguyen Thu Thao</Text>
                  <Text note>Home Beautiful</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={require('../assets/Home.png')} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 Likes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>11h ago</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
        );
    }
}