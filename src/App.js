import React, { Component } from 'react';
import Wrapper from "./components/Wrapper/Wrapper";
import Header from "./components/Header/Header";
import ImageCard from "./components/ImageCard/ImageCard";
import images from "./images.json";
//import './App.css';

export default class App extends Component{
  constructor(props){
    super(props);

    console.log("first");
  }

  compnentDidMount(){
    console.log("mounting");
  }

  render() {
    return (
      <Wrapper>
        <Header>Click Click Zoologique</Header>
          { images.map( images => <ImageCard 
          key={images.id}
          image={images.image}  />)
           }
      </Wrapper>
    )
  }     

}
