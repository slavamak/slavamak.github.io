import { AiOutlineSetting, AiOutlineMenu, AiOutlineIdcard } from 'react-icons/ai'
import S from '@sanity/desk-tool/structure-builder'

export const Settings = S.listItem()
  .title('Preferences')
  .icon(AiOutlineSetting)
  .child(
    S.list()
      .title('Preferences')
      .items([
        S.listItem()
          .title('Navigation')
          .icon(AiOutlineMenu)
          .child(
            S.documentTypeList('navigationMenu')
              .title('Menus')
              .filter('_type == $type')
              .params({ type: 'navigationMenu' })
          ),
        S.listItem()
          .title('Site Meta')
          .icon(AiOutlineIdcard)
          .child(
            S.editor()
              .schemaType('siteSettings')
              .documentId('siteSettings')
          )
      ])
  )