import { useState, useEffect } from 'react';
import useFormat from './useFormat.js';


//This hook returns should we show the custom context menu and where to show it.
const useContextMenu = (editor, format, setSelection) => {
    const isFormat = useFormat(editor, format);
    const [showMenu, setShowMenu] = useState(false);
    const [menuLocation, setMenuLocation] = useState({
        top: '0px',
        left: '0px'
    });

    const handleClick = () => {
        setShowMenu(false);
    }
    useEffect(() => {
        const handleContextMenu = (e) => {
            e.preventDefault();
            if (!isFormat) return;
            setSelection(editor.selection);
            setShowMenu(true);
            const xPos = e.pageX + "px";
            const yPos = e.pageY + "px";
            setMenuLocation({
                top: yPos,
                left: xPos
            })
        }
        document.addEventListener('click', handleClick);
        document.addEventListener('contextmenu', handleContextMenu);

        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('contextmenu', handleContextMenu);
        }
    }, [isFormat, editor, setSelection])

    return [showMenu, menuLocation];
}

export default useContextMenu;