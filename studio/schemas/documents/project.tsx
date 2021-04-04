import React from 'react'

export default {
  type: 'document',
  name: 'project',
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
