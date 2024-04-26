import React, { useCallback, useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { withHistory } from "slate-history";
import { Slate, Editable, withReact, } from 'slate-react';
import Toolbar from './Toolbar/Toolbar';
import { getMarked, getBlock } from './utils/SlateUtilityFunctions';
import withLinks from './plugins/withLinks';
import withTables from './plugins/withTable';
import withEmbeds from './plugins/withEmbeds';
import withEquation from './plugins/withEquation';
import './Editor.css'
import CodeToText from './Elements/CodeToText/CodeToText'
import { serialize } from './utils/serializer';


const Element = (props) => {
    return getBlock(props);
}
const Leaf = ({ attributes, children, leaf }) => {
    children = getMarked(leaf, children);
    return <span {...attributes}>{children}</span>
}
const SlateEditor = (props) => {
    const editor = useMemo(() => withEquation(withHistory(withEmbeds(withTables(withLinks(withReact(createEditor())))))), []);
    const renderElement = useCallback(props => <Element {...props} />, [])
    const renderLeaf = useCallback(props => {
        return <Leaf {...props} />
    }, [])


    const [htmlAction, setHtmlAction] = useState({
        showInput: false,
        html: '',
        action: '',
        location: '',
    })
    const handleCodeToText = (partialState) => {
        setHtmlAction(prev => ({
            ...prev,
            ...partialState,
        }))
    }

    return (
        <Slate editor={editor} initialValue={props.initialValue} onChange={props.onChange} >
            <Toolbar handleCodeToText={handleCodeToText} />
            <div className="editor-wrapper border">
                <Editable
                    placeholder='Write something'
                    renderElement={renderElement}
                    renderLeaf={renderLeaf}
                />
            </div>
            {
                htmlAction.showInput &&
                <CodeToText {...htmlAction} handleCodeToText={handleCodeToText} />
            }
        </Slate>
    )
}

export default SlateEditor