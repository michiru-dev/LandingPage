import DOMPurify from 'isomorphic-dompurify'

export const sanitizer = (item: string) => {
  const config = {
    ALLOWED_ATTR: ['class', 'href', 'target', 'rel'],
  }
  const sanitizedHTML = DOMPurify.sanitize(item, config)

  return sanitizedHTML
}
