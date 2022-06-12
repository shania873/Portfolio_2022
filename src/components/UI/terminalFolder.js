import React from 'react';
import './terminalFolder.scss';
import Moment from 'moment'


import FileBrowser, { FileRenderers, FolderRenderers, Groupers, Icons } from 'react-keyed-file-browser'
import 'font-awesome/css/font-awesome.min.css'

const mount = document.querySelectorAll('div.demo-mount-flat-simple')
// import 'react-keyed-file-browser/dist/react-keyed-file-browser.css';

export default function TerminalFolder() {
    return (
        <>
        <FileBrowser
              icons={Icons.FontAwesome(4)}
              files={[
                {
                  key: 'cat.png',
                  modified: +Moment().subtract(1, 'hours'),
                  size: 1.5 * 1024 * 1024,
                },
                {
                  key: 'kitten.png',
                  modified: +Moment().subtract(3, 'days'),
                  size: 545 * 1024,
                },
                {
                  key: 'elephant.png',
                  modified: +Moment().subtract(3, 'days'),
                  size: 52 * 1024,
                },
                {
                  key: 'dog.png',
                  modified: +Moment().subtract(1, 'hours'),
                  size: 1.5 * 1024 * 1024,
                },
                {
                  key: 'turtle.png',
                  modified: +Moment().subtract(3, 'months'),
                  size: 545 * 1024,
                },
                {
                  key: 'gecko.png',
                  modified: +Moment().subtract(2, 'days'),
                  size: 52 * 1024,
                },
                {
                  key: 'centipede.png',
                  modified: +Moment().subtract(0.5, 'hours'),
                  size: 1.5 * 1024 * 1024,
                },
                {
                  key: 'possum.png',
                  modified: +Moment().subtract(32, 'days'),
                  size: 545 * 1024,
                },
              ]}
              renderStyle="list"
              nestChildren
              headerRenderer={null}
              group={Groupers.GroupByModifiedRelative}
              fileRenderer={FileRenderers.ListThumbnailFile}
              folderRenderer={FolderRenderers.ListThumbnailFolder}
      />      
        </>
        
    )
}


