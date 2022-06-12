import React from 'react'
// import Terminal from 'react-animated-term';
import Terminal from 'terminal-in-react';
const spinner = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
const termLines = [
    {
      text: 'node Welcome to my website',
      cmd: true,
      delay: 80
    },
    {
      text: '✔ Enjoy !',
      cmd: false,
      repeat: true,
      repeatCount: 5,
      frames: spinner.map(function (spinner) {
        return {
          text: spinner + ' Loading app',
          delay: 40
        }
      })
    },
    {
      text: '',
      cmd: true
    }
  ]

export default function TerminalSet() {
    return (
        <>
            {/* <div className='title-terminal'>
                <h1>Terminal</h1>
            </div> */}
            <div className='content-terminal'>
                {/* <p><span className="item-userName">User@Visitor</span></p> */}
                {/* <Terminal
                    lines={termLines}
                    interval={80}
                /> */}
                 <Terminal
                    color='green'
                    backgroundColor='#1b1b1b'
                    startState="maximised"
                    // barColor='black'
                    commandPassThrough="help"
                    showActions="true"
                    style={{ fontWeight: "bold", fontSize: "1em" }}
                    commands={{
                        'open-projects': () => window.open('http://localhost:3000/projects', '_blank'),
                        showmsg: "test",
                        popup: () => alert('Terminal in React')
                    }}
                    hideTopBar="false"
                    descriptions={{
                        'open-projects': 'opens projects',
                        showmsg: 'shows a message',
                        alert: 'alert', popup: 'alert'
                    }}
                    msg='You can write anything here. Example - open-projects'
                 />
            </div>  
        </>      
    )
}