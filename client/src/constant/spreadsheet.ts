export const TAB_TYPE = {
  Info: 'info',
  Portfolio: 'portfolio',
  Skill: 'skill',
} as const

export type TabType = (typeof TAB_TYPE)[keyof typeof TAB_TYPE]
