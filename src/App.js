import React, { Component } from 'react';
import {ReplacEmoji} from 'replacemoji';
import './App.css';

const replacementArray = [
  {
    searchFor: '💩',
    replaceWith: 'https://i.gifer.com/1E2h.gif'
  },
  {
    searchFor: '😺',
    replaceWith: 'http://myfirstchat.com/bookcity2/profile10/1f701f42db7761e2d0f70c7feceb946ea91c51f4.gif'
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">ReplacEmoji</h1>
          <ReplacEmoji replacements={replacementArray}>
            😺
          </ReplacEmoji>
          <h2>Easily replace any Unicode emoji with an image</h2>
        </header>
        <section>
          <br />
          <code>
            npm install --save replacemoji
          </code><br />
          <h3>Simply create an array containing object(s) with two properties; <code>searchFor</code> and <code>replaceWith</code>, both being strings.</h3>
          <h4>
            Like this...<br /><br />
            <code>
              {`const replacementArray = [
                {
                  searchFor: '💩',
                  replaceWith: 'https://i.gifer.com/1E2h.gif'
                },
                {
                  searchFor: '😺',
                  replaceWith: 'http://myfirstchat.com/bookcity2/profile10/1f701f42db7761e2d0f70c7feceb946ea91c51f4.gif'
                }
              ]`}
            </code>
          </h4><br />
          <ReplacEmoji replacements={replacementArray}>
            This is some text with a thing 💩
          </ReplacEmoji>
        </section>
      </div>
    );
  }
}

export default App;
