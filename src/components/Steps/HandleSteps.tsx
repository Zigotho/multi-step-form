import { steps } from '../../constants/constants'

interface HandleStepsProps {
  currentStep: number
}
export const HandleSteps = ({ currentStep }: HandleStepsProps) => {
  return <>{steps.find((step) => step.id === currentStep)?.component}</>
}
