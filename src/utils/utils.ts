export const scrollToTargetId = (targetId: string) => {
  if (!targetId) return
  const section = document.querySelector(targetId)
  if (!section) return
  section.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
