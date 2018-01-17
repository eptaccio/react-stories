import React, { Component } from 'react'
import logo from './logo.svg'

import '../node_modules/zuck.js/zuck.min.css'
import '../node_modules/zuck.js/skins/snapgram.css'
import '../node_modules/zuck.js/zuck.js'

class App extends Component {
  buildItem (id, type, length, src, preview, link, linkText, seen, time) {
    return {
      'id': id,
      'type': type,
      'length': length,
      'src': src,
      'preview': preview,
      'link': link,
      'linkText': linkText,
      'seen': seen,
      'time': time
    }
  }

  timestamp () {
    var timeIndex = 0
    var shifts = [35, 60, 60 * 3, 60 * 60 * 2, 60 * 60 * 25, 60 * 60 * 24 * 4, 60 * 60 * 24 * 10]
    var now = new Date()
    var shift = shifts[timeIndex++] || 0
    var date = new Date(now - shift * 1000)

    return date.getTime() / 1000
  }

  componentDidMount () {
    window.ZuckitaDaGalera('stories', {
      id: 'stories',                // timeline container id or reference
      skin: 'snapgram',      // container class
      avatars: true,         // shows user photo instead of last story item preview
      list: false,           // displays a timeline instead of carousel
      openEffect: true,      // enables effect when opening story - may decrease performance
      cubeEffect: true,     // enables the 3d cube effect when sliding story - may decrease performance
      autoFullScreen: false, // enables fullscreen on mobile browsers
      backButton: true,      // adds a back button to close the story viewer
      backNative: true,     // uses window history to enable back button on browsers/android
      previousTap: true,     //
      stories: [{
        id: 'ramon',
        photo: 'https://avatars1.githubusercontent.com/u/2271175?v=3&s=460',
        items: [
          this.buildItem('ramon-1', 'photo', 3, 'https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10810091_1527190460857578_541280638_n.jpg', 'https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10810091_1527190460857578_541280638_n.jpg', '', false, false, this.timestamp()),
          this.buildItem('ramon-2', 'photo', 3, 'https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10597412_455246124639813_1360162248_n.jpg', 'https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10597412_455246124639813_1360162248_n.jpg', 'https://ramon.codes', 'Visit my Portfolio', false, this.timestamp()),
          this.buildItem('ramon-3', 'video', 0, 'https://scontent-gru2-2.cdninstagram.com/t50.2886-16/14965218_193969377722724_482497862983221248_n.mp4', 'https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10597412_455246124639813_1360162248_n.jpg', '', false, false, 1504023497)
        ]
      }, {
        id: 'ramon2',
        photo: 'https://avatars1.githubusercontent.com/u/2271175?v=3&s=460',
        items: [
          this.buildItem('ramon-1', 'photo', 3, 'https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10810091_1527190460857578_541280638_n.jpg', 'https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10810091_1527190460857578_541280638_n.jpg', '', false, false, this.timestamp()),
          this.buildItem('ramon-2', 'photo', 3, 'https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10597412_455246124639813_1360162248_n.jpg', 'https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10597412_455246124639813_1360162248_n.jpg', 'https://ramon.codes', 'Visit my Portfolio', false, this.timestamp()),
          this.buildItem('ramon-3', 'video', 0, 'https://scontent-gru2-2.cdninstagram.com/t50.2886-16/14965218_193969377722724_482497862983221248_n.mp4', 'https://scontent-gru2-2.cdninstagram.com/t51.2885-15/e15/10597412_455246124639813_1360162248_n.jpg', '', false, false, 1504023497)
        ]
      }]
    })
  }
  render () {
    return (
      <div className='App'>
        <div id='stories' />
      </div>
    )
  }
}

export default App
