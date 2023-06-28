import { useState } from 'react'
import { StepInfo } from './components/StepInfo/StepInfo'
import { HandleSteps } from './components/Steps/HandleSteps'

function App() {
  const [currentStep] = useState(2)
  return (
    <div
      id="root"
      className="bg-bg flex w-screen h-screen items-center justify-center"
    >
      <div
        id="container"
        className="flex w-[940px] h-[600px] bg-white rounded-2xl p-4 shadow-[0_25px_40px_-20px_rgba(0,0,0,0.1)] gap-40"
      >
        <StepInfo currentStep={currentStep} />
        <HandleSteps currentStep={currentStep} />
      </div>
    </div>
  )
}

export default App
