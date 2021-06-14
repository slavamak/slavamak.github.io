import React from 'react'
import { AiOutlineProject } from 'react-icons/ai'

export default {
  type: 'document',
  name: 'project',
  icon: AiOutlineProject,
  fields: [
    {
      type: 'string',
      name: 'title'
    },
    {
      type: 'url',
      name: 'url'
    },
    {
      type: 'text',
      name: 'description'
    },
    {
      type: 'array',
      name: 'technologies',
      of: [{ type: 'string' }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      url: 'url'
    },
    prepare({ url, title }) {
      const favicon = `https://s2.googleusercontent.com/s2/favicons?domain=${url}`

      return {
        title,
        subtitle: url,
        media: <img src={favicon} alt={title} />
      }
    }
  }
}
