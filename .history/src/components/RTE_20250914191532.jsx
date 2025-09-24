import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'

export default function RTE({name, control}) {
  return (
    <div>
      <Controller
      name={name || "content"}
      control={control}
      render={({field: {onChange}}) => (
        <Editor 
        />
      )}
      />
    </div>
  )
}

