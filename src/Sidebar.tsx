import {Input, Menu} from 'antd'
import { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import { useStore } from './store/use-store';

interface Props {
    setIndex : Function
    setEdit : Function
    selectedIndex : number
    setSearch : Function
    search : string
}

const Sidebar : FC<Props> = ({setIndex, setEdit, selectedIndex, setSearch, search}) => {
    const note_list = useStore()

    return (
        <div>
            <Menu mode="inline" style={{ height: '100%'}} selectedKeys={[`${selectedIndex}`]}>
                {note_list.list.filter(note => note.title >= search).map((item, index) => {
                    return <Menu.Item key={index} style={{height:80, margin:0, paddingLeft:20, borderBottom:'1px solid rgba(0, 0, 0, 0.06)'}} onClick={(e) => {setIndex(index); setEdit(false)}}>
                            <ReactMarkdown children={`#### ${item.title}\n#### ${item.content}`} />
                        </Menu.Item>
                })}
            </Menu>
            <div style={{padding:20}}>
                <Input bordered onChange={(e) => {setSearch(e.target.value);}}/>
            </div>
        </div>
    )
}

export default Sidebar;