import S from '@sanity/desk-tool/structure-builder'

import { Settings } from './paneItems/settings'
import { Projects } from './paneItems/projects'

export default () =>
  S.list()
    .title('Content')
    .items([
      Projects,
      Settings
    ])
