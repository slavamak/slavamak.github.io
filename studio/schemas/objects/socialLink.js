import {
  FaInstagram,
  FaGithub,
  FaTelegram,
} from 'react-icons/fa'

import {
  IconUpwork
} from '../../icons'

const getIcon = icon => {
  switch (icon) {
    case 'Instagram':
      return FaInstagram
    case 'Github':
      return FaGithub
    case 'Telegram':
      return FaTelegram
    case 'Upwork':
      return IconUpwork
    default:
      return false
  }
}

export default {
  title: 'Social Link',
  name: 'socialLink',
  type: 'object',
  options: {
    columns: 2,
    collapsible: false
  },
  fields: [
    {
      title: 'Icon',
      name: 'icon',
      type: 'string',
      options: {
        list: [
          { title: 'Instagram', value: 'Instagram' },
          { title: 'Github', value: 'Github' },
          { title: 'Telegram', value: 'Telegram' },
          { title: 'Upwork', value: 'Upwork' }
        ]
      }
    },
    {
      title: 'URL',
      name: 'url',
      type: 'url'
    },
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    }
  ],
  preview: {
    select: {
      icon: 'icon',
      url: 'url'
    },
    prepare({ icon, url }) {
      return {
        title: icon,
        subtitle: url ? url : '(url not set)',
        media: getIcon(icon)
      }
    }
  }
}
