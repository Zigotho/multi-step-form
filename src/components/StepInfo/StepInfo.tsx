import { Steps } from './Steps'
import { DemiluneSvg } from '../svgs/Demilune'
import { OvalSVG } from '../svgs/Oval'
import { RainSVG } from '../svgs/Rain'
import { RoseSVG } from '../svgs/Rose'

interface StepInfoProps {
  currentStep: number
  setCurrentStep: (step: number) => void
}
export const StepInfo = ({ currentStep, setCurrentStep }: StepInfoProps) => {
  return (
    <div
      id="info-card"
      className="bg-infoCardBg w-72 h-auto rounded-lg relative"
    >
      <Steps setCurrentStep={setCurrentStep} currentStep={currentStep} />
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
