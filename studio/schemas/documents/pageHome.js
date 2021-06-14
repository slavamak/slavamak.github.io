import { AiOutlineHome } from 'react-icons/ai'

export default {
  title: 'Home',
  name: 'homePage',
  type: 'document',
  icon: AiOutlineHome,
  fields: [
    {
      title: 'Page Modules',
      name: 'modules',
      type: 'array',
      of: [
        { type: 'hero' },
        { type: 'collection' }
      ]
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page'
      }
    }
  }
}
