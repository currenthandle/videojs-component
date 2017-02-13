import React, { Component } from 'react'
import Video from './Video'
const videoJsOptions = {
   autoPlay: true,
   controls: true,
   sources: [{
     src: 'http://checkers-music.com/assets/video/precomp.mp4',
     type: 'video/mp4'
   }]
 }

export default class App extends Component {
  render() {
    return <Video { ...videoJsOptions } />

  }
}
