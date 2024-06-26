import React from 'react'
import { useSelected, useFocused } from "slate-react";


const Image = ({ attributes, element, children }) => {
  const { url, alt } = element;
  const selected = useSelected();
  const focused = useFocused();


  return (
    <div
      {...attributes}
      className='embed'
      style={{ display: 'flex', boxShadow: selected && focused && '0 0 3px 3px lightgray' }}
      {...element.attr}
    >
      <div contentEditable={false} >

        <img alt={alt} src={url} style={{ maxWidth: '100%', maxHeight: '500px' }} />

      </div>
      {children}
    </div>
  );
};
export default Image;