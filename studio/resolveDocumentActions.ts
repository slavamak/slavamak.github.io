import defaultResolve from 'part:@sanity/base/document-actions'

export default function resolveDocumentActions(props) {
  if (props.type !== 'siteSettings') {
    return [...defaultResolve(props)]
  }

  const filteredDocumentActions = [...defaultResolve(props)].filter((action) => {
    return (action.name !== 'DeleteAction' && action.name !== 'DuplicateAction')
  })
  
  return [...filteredDocumentActions]
}
