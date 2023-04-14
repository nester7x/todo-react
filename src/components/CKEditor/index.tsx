import React from 'react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';

type EditorProps = {
  data: string;
  onChange: (event: React.FormEvent<HTMLInputElement>, editor: any) => void;
  placeholder: string;
};

const Editor = ({ data, onChange, placeholder, ...rest }: EditorProps): JSX.Element => (
  <CKEditor
    {...rest}
    editor={ClassicEditor}
    data={data}
    onChange={() => onChange}
    config={{
      placeholder: `${placeholder || 'Type something...'}`,
    }}
  />
);

export default Editor;
