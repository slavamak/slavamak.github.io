import S from '@sanity/desk-tool/structure-builder'

import { Settings } from './settings'
import { Projects } from './projects'

export default () =>
  S.list()
    .title('Content')
    .items([
      Projects,
      Settings
    ])