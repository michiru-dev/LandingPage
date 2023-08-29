import type { TechSkills } from '@/const/skills'

export type CategoryType = keyof TechSkills

export type TechSkillType = {
  name: TechSkills[CategoryType][number]['name']
  icon?: TechSkills[CategoryType][number]['icon']
  className?: string
}
