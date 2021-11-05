import NoteItem from "./store/note_item";
import {Menu} from 'antd'
import { FC } from "react";
import ReactMarkdown from "react-markdown";

interface Props {
    item : NoteItem
}

const ListItem : FC<Props> = ({item}) => {
    return (
        <>
            <Menu.Item style={{height:80, margin:0, paddingLeft:20, borderBottom:'1px solid rgba(0, 0, 0, 0.06)'}}>
                <ReactMarkdown children={`# ${item.title} \n # ${item.content}`} />
            </Menu.Item>
        </>
    )
}

export default ListItem;