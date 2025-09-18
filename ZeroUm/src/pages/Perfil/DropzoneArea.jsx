import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './DropzoneArea.css';

export function DropzoneArea() {
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    multiple: false,
  });

  return (
    <div className="dropzone-wrapper">
      <div
        {...getRootProps({
          className: isDragActive ? 'dropzone active' : 'dropzone',
        })}
      >
        <input {...getInputProps()} />
        <p>
          {isDragActive
            ? 'Solte a imagem aqui...'
            : 'Arraste e solte uma imagem aqui, ou clique para selecionar'}
        </p>
      </div>

      {preview && (
        <div className="preview-container">
          <p>Pré-visualização:</p>
          <img src={preview} alt="Preview" className="preview-image" />
        </div>
      )}
    </div>
  );
}
