import defaultResolve, {
  PublishAction,
  DiscardChangesAction
} from 'part:@sanity/base/document-actions'

export const singletons = [
  'siteSettings',
  'headerSettings',
  'footerSettings',
  'homePage'
]

export default function resolveDocumentActions(props) {
  const isSingle = singletons.includes(props.type)

  if (isSingle) {
    return [
      PublishAction,
      DiscardChangesAction
    ]
  }
  
  return [...defaultResolve(props)]
}
