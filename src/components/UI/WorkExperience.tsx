import { WorkExperienceType } from '@/types/workExperienceTypes'
import { hoverFlowClass } from './NavbarContents'

const dotLineOuterDivClass = 'flex justify-center items-center'
const dotLineInnerDivClass =
  'h-[65px] border-dotted border-l-4 border-slate-300 mx-4 h-1'
const outerDivClass =
  'gap-2 min-[560px]:gap-20 text-sm min-[560px]:text-base flex flex-col min-[560px]:flex-row items-center'
const innerDivClass = 'w-[100px] text-center'
const nestedInnerDivClass =
  'flex flex-col justify-center items-center w-[300px] min-[560px]:w-[350px] h-[80px] p-3'

type WorkExperienceProps = {
  experience: WorkExperienceType
  index: number
  workExperience: WorkExperienceType[]
}

function WorkExperience({
  experience,
  index,
  workExperience,
}: WorkExperienceProps) {
  return (
    <>
      <div className={`${outerDivClass}`}>
        <div className={`${innerDivClass} font-decol`}>{experience.date}</div>
        <div
          className={` ${hoverFlowClass}  ${nestedInnerDivClass} border border-solid border-slate-300 rounded-tl-[20px] rounded-br-[20px] rounded-tr-[2px] rounded-bl-[2px]`}
        >
          <p> {experience.name}</p>
          <p>{experience.moreInfo}</p>
        </div>
      </div>
      {/* ↓dots div */}
      <div className={`${outerDivClass}`}>
        <div className={`${innerDivClass}`} />
        <div className={`${nestedInnerDivClass}`}>
          {index !== workExperience.length - 1 && (
            <div className={dotLineOuterDivClass}>
              <div className={dotLineInnerDivClass} />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default WorkExperience
