import { AiOutlineProject } from 'react-icons/ai'
import S from '@sanity/desk-tool/structure-builder'

export const Projects = S.listItem()
  .title('Projects')
  .icon(AiOutlineProject)
  .child(
    S.documentTypeList('project')
      .title('Projects')
      .filter('_type == $type')
      .params({ type: 'project' })
  )
