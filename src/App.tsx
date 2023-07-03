import { useState } from 'react'
import { StepInfo } from './components/StepInfo/StepInfo'
import { HandleSteps } from './components/Steps/HandleSteps'
import { steps } from './constants/constants'

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const maxStep = steps.length

  const handleNextStep = () => {
    if (currentStep < maxStep) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div
      id="root"
      className="bg-bg flex w-screen h-screen items-center justify-center"
    >
      <div
        id="container"
        className="flex w-[940px] h-[600px] bg-white rounded-2xl p-4 shadow-[0_25px_40px_-20px_rgba(0,0,0,0.1)] gap-16"
      >
        <StepInfo setCurrentStep={setCurrentStep} currentStep={currentStep} />
        <div className="flex flex-col relative">
          <HandleSteps currentStep={currentStep} />
          <button
            onClick={handleNextStep}
            className="rounded-lg bg-denim px-6 py-4 text-white absolute bottom-4 right-4"
          >
            Next Steps
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
