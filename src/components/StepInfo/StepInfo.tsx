import { Steps } from './Steps'
import { DemiluneSvg } from '../svgs/Demilune'
import { OvalSVG } from '../svgs/Oval'
import { RainSVG } from '../svgs/Rain'
import { RoseSVG } from '../svgs/Rose'

interface StepInfoProps {
  currentStep: number
}
export const StepInfo = ({ currentStep }: StepInfoProps) => {
  return (
    <div
      id="info-card"
      className="bg-infoCardBg w-[35rem] h-auto rounded-lg relative"
    >
      <Steps currentStep={currentStep} />
      <div className="absolute bottom-0 left-0">
        <DemiluneSvg />
      </div>
      <div className="absolute bottom-0 right-0">
        <RoseSVG />
      </div>
      <div className="absolute bottom-0 left-0">
        <OvalSVG />
      </div>
      <div className="absolute bottom-14 right-16">
        <RainSVG />
      </div>
    </div>
  )
}
