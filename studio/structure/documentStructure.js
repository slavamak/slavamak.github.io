import S from "@sanity/base/structure-builder"

import { singletons } from "../resolve/documentActions"

const hiddenDocumentTypes = (listItem) => !singletons.includes(listItem.getId())

export default [
  ...S.defaultInitialValueTemplateItems().filter(hiddenDocumentTypes),
]
