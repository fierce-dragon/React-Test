import { Input } from "antd";
import React, { FC } from "react";
import { useStore } from "./store/use-store";

interface Props {
    index : number
    setTitle : Function
    setContent : Function
}
const ContentEdit : FC<Props> = ({index, setTitle, setContent}) => {
    const note_list = useStore()

    const onTitleChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
        if (index !== -1)
            note_list.list[index].setTitle(e.target.value)
    }

    const onContentChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setContent(e.target.value)
        if (index !== -1)
            note_list.list[index].setContent(e.target.value)
    }

    return (
        <>
            <div>
                <Input className="title" defaultValue={index !== -1 ? note_list.list[index].title : ''} onChange={(e) => onTitleChange(e)} />
            </div>
            <div>
                <Input className="content" defaultValue={index === -1 ? '' : note_list.list[index].content} onChange={(e) => onContentChange(e)}/>
            </div>
        </>
    )
}

export default ContentEdit;