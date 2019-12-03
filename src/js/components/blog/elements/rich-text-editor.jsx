import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const RichTextEditor = ({ index, name, data, saveListItemState }) => {
    return (
        <div className="editor">
            <CKEditor
                editor={ClassicEditor}
                // data="<p>Hello from CKEditor 5!</p>"
                data={data}
                onInit={editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log('Editor Data', editor.getData());
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                }}
                onBlur={(event, editor) => {
                    saveListItemState(editor.getData(), index);
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
        </div>
    );
};

export default RichTextEditor;