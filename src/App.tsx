import './App.css';
import { Button, Layout } from 'antd';
import Sidebar from './Sidebar';
import React, { useState } from 'react';
import Contents from './Contents';
import { useStore } from './store/use-store';

const {Sider, Content} = Layout

const App = () => {
  const note_list = useStore()
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [isEdit, setIsEdit] = useState(false)
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [search, setSearch] = useState("")

  const setEdit = () => {
    setIsEdit(true)
  }

  const setUpdate = () => {
    setIsEdit(false)
  }

  const addItem = () => {
    note_list.addNote(`{"title": "${title}", "content": "${content}"}`)
    setIsEdit(false)
  }

  const deleteItem = () => {
    note_list.removeNote(note_list.list[selectedIndex])
    setSelectedIndex(-1)
  }

  return (
    <Layout className="app-root background-white">
      <Sider theme="light" width="250px">
        <Sidebar setIndex={setSelectedIndex} setEdit={setIsEdit} selectedIndex={selectedIndex} setSearch={setSearch} search={search}/>
      </Sider>
      <Content style={{padding:40}}>
        <div>
          <Contents index={selectedIndex} isEdit={isEdit} setTitle={setTitle} setContent={setContent}/>
        </div>
        {!isEdit ? 
          <Button type="primary" className="mybtn" onClick={() => {setSelectedIndex(-1); setIsEdit(true)}}>New</Button> :
          selectedIndex === -1 ? <Button type="primary" className="mybtn" onClick={() => addItem()}>Add</Button> : ''
        }
        {selectedIndex === -1 ? '' : 
          <>
            <Button type="primary" className="mybtn" onClick={() => deleteItem()}>Delete</Button>
            {isEdit ? <Button type="primary" className="mybtn" onClick={() => {setUpdate()}}>Update</Button> : <Button type="primary" className="mybtn" onClick={() => {setEdit()}}>Edit</Button>}
          </>
        }
      </Content>
    </Layout>
  );
}

export default App;
