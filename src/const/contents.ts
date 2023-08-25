import { PiProjectorScreenChartDuotone } from 'react-icons/pi'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonFill } from 'react-icons/bs'
import { MdWorkHistory } from 'react-icons/md'

export const contents = {
  aboutMe: { jp: '自己紹介', en: 'aboutMe', IconComponent: BsFillPersonFill },
  workExperience: {
    jp: '経歴',
    en: 'workExperience',
    IconComponent: MdWorkHistory,
  },
  projects: {
    jp: 'プロジェクト',
    en: 'projects',
    IconComponent: PiProjectorScreenChartDuotone,
  },
  contact: { jp: 'コンタクト', en: 'contact', IconComponent: HiOutlineMail },
}
