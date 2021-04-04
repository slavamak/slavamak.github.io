import S from '@sanity/base/structure-builder'

const hiddenDocumentTypes = (listItem) => ![
  'siteSettings',
  'homePage'
].includes(listItem.getId())

export default [
  ...S.defaultInitialValueTemplateItems()
    .filter(hiddenDocumentTypes)
]
