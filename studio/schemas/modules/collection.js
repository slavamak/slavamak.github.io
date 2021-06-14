import { AiOutlineUnorderedList } from 'react-icons/ai'

export default {
  title: 'Collection',
  name: 'collection',
  icon: AiOutlineUnorderedList,
  type: 'object',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'items',
      type: 'array',
      title: 'Collection Items',
      of: [
        {
          type: 'reference',
          to: [
            {type: 'project'}
          ]
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      count: 'items'
    },
    prepare({ title, count }) {

      return {
        title,
        subtitle: count && `Total: ${count.length}`,
        media: AiOutlineUnorderedList
      }
    }
  }
}
