import S from '@sanity/desk-tool/structure-builder'

import { Settings } from './paneItems/settings'
import { Projects } from './paneItems/projects'
import { Redirects } from './paneItems/redirects'
import { Home } from './paneItems/pageHome'

export default () =>
  S.list()
    .title('Content')
    .items([
      Home,
      Projects,
      Settings,
      Redirects
    ])
