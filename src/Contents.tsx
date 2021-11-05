import { FC } from "react"
import ReactMarkdown from "react-markdown"
import ContentEdit from "./ContentEdit"
import { useStore } from "./store/use-store"

interface Props {
    index : number
    isEdit : boolean
    setTitle : Function
    setContent : Function
}
const Contents : FC<Props> = ({index, isEdit, setTitle, setContent}) => {
    const note_list = useStore()
    return (
        <>
            {index === -1 ?
                isEdit ? <ContentEdit index={index} setTitle={setTitle} setContent={setContent}/> : <ReactMarkdown children={'# First select a note'}/> : 
                isEdit ? <ContentEdit index={index} setTitle={setTitle} setContent={setContent}/> :
            <>
                <ReactMarkdown children={`# ${note_list.list[index].title}`}/>
                <ReactMarkdown children={`##### ${note_list.list[index].content}`}/>
            </>}
        </>
    )
}

export default Contents