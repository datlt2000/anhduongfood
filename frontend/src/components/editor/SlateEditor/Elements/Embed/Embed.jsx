import React, { useRef, useState } from 'react';
import Button from '../../common/Button'
import Icon from '../../common/Icon'
import { isBlockActive } from '../../utils/SlateUtilityFunctions'
import usePopup from '../../utils/customHooks/usePopup'
import { insertEmbed } from '../../utils/embed.js'
import { Transforms } from 'slate';
import { ReactEditor } from 'slate-react'

import './Embed.css'
const Embed = ({ editor, format }) => {
    const urlInputRef = useRef();
    const [showInput, setShowInput] = usePopup(urlInputRef);
    const [formData, setFormData] = useState({
        url: '',
        alt: ''
    })
    const [selection, setSelection] = useState();
    const handleButtonClick = (e) => {
        e.preventDefault();
        setSelection(editor.selection);
        selection && ReactEditor.focus(editor);

        setShowInput(prev => !prev);
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();

        selection && Transforms.select(editor, selection);
        selection && ReactEditor.focus(editor);

        insertEmbed(editor, { ...formData }, format);
        setShowInput(false);
        setFormData({
            url: '',
            alt: ''
        })
    }
    const handleImageUpload = (event) => {
        console.log("aaa")
        selection && Transforms.select(editor, selection);
        selection && ReactEditor.focus(editor);
        const file = event.target.files[0]
        const reader = new FileReader();
        reader.onload = function(readerEvt) {
            var binaryString = readerEvt.target.result;
            insertEmbed(editor, { url: binaryString, alt: file.name }, format);
        };
        reader.readAsDataURL(file);
        setShowInput(false)
    }
    return (
        <div ref={urlInputRef} className='popup-wrapper'>
            <Button active={isBlockActive(editor, format)} style={{ border: showInput ? '1px solid lightgray' : 'none' }} format={format} onClick={handleButtonClick}>
                <Icon icon={format} />
            </Button>
            {
                showInput &&
                <div className='popup'>
                    {
                        format === 'image' &&
                        <div>
                            <input type='file' name="content-image" id="content-image" accept=".png,.jpg,.jpeg,.webp,.gif,.heif" className="d-none" onChange={e => handleImageUpload(e)} />
                            <label htmlFor="content-image" style={{ display: 'flex', gap: '10px' }} >
                                <Icon icon='upload' />
                                <span>Upload</span>
                            </label>
                            <p style={{ textAlign: 'center', opacity: '0.7', width: '100%' }}>OR</p>

                        </div>
                    }
                    <form onSubmit={handleFormSubmit}>
                        <input type="text" placeholder='Enter url' value={formData.url} onChange={e => setFormData(prev => ({ ...prev, url: e.target.value }))} />
                        <input type="text" placeholder='Enter alt' value={formData.alt} onChange={e => setFormData(prev => ({ ...prev, alt: e.target.value }))} />


                        <button type='submit'>Save</button>
                    </form>
                </div>
            }
        </div>
    )
}

export default Embed;