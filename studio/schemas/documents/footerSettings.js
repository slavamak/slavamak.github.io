export default {
  title: 'Footer Settings',
  name: 'footerSettings',
  type: 'document',
  fields: [
    {
      title: 'Referral link',
      name: 'referral',
      type: 'string'
    }
  ],
  preview: {
    prepare() {
      return {
        title: 'Footer Settings'
      }
    }
  }
}
