import { AiOutlineRedo } from 'react-icons/ai'
import S from '@sanity/desk-tool/structure-builder'

export const Redirects = S.listItem()
  .title('Redirects')
  .icon(AiOutlineRedo)
  .child(
    S.documentTypeList('redirect')
      .title('Redirects')
      .filter('_type == $type')
      .params({ type: 'redirect' })
  )
