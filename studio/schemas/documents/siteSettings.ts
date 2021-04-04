export default {
  name: 'siteSettings',
  type: 'document',
  title: 'Site Settings',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'email',
      type: 'string',
      title: 'Email'
    },
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      fields: [
        {
          name: 'logo_alt',
          type: 'string',
          title: 'Logo alternate text'
        }
      ]
    }
  ]
}
