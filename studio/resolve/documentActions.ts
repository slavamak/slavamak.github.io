import defaultResolve, {
  PublishAction,
  DiscardChangesAction
} from 'part:@sanity/base/document-actions'

const singletons = [
  'siteSettings',
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
