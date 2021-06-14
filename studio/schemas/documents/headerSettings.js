export default {
  title: 'Header Settings',
  name: 'headerSettings',
  type: 'document',
  fields: [
    {
      title: 'Navigation Menu',
      name: 'menu',
      type: 'reference',
      to: [{ type: 'navigationMenu' }]
    },
    {
      title: 'Show actions menu?',
      name: 'showActionsMenu',
      type: 'boolean'
    }
  ],
  initialValue: {
    showActionsMenu: false
  },
  preview: {
    prepare() {
      return {
        title: 'Header Settings'
      }
    }
  }
}
