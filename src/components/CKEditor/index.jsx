import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import React from 'react';
import PropTypes from 'prop-types';

const Editor = ({ value, onChange, placeholder, ...rest }) => (
  <CKEditor
    {...rest}
    editor={ClassicEditor}
    value={value}
    onChange={onChange}
    config={{ placeholder: `${placeholder || 'Type something...'}` }}
  />
);

Editor.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired
};

export default Editor;
