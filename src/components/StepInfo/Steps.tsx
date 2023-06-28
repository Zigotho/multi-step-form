import { steps } from '../../constants/constants'

interface StepsProps {
  currentStep: number
}
export const Steps = ({ currentStep }: StepsProps) => {
  return (
    <div className="flex flex-col gap-8 ml-8 mt-10">
      {steps.map((step) => (
        <div key={step.id} className="flex gap-4">
          <div
            id="step-number"
            className={`flex justify-center ${
              currentStep === step.id ? 'bg-skyBlue' : 'bg-white'
            } w-8 h-8 rounded-full text-center items-center`}
          >
            <p className="text-denim text-center text-sm font-bold tracking-wider">
              {step.id}
            </p>
          </div>
          <div>
            <p className="text-lightBlue text-xs">STEP {step.id}</p>
            <p className="text-white text-sm font-bold tracking-wider uppercase">
              {step.title}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
