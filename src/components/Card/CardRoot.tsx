import { ReactNode } from 'react'

interface CardRootProps {
  children: ReactNode
}

export const CardRoot = ({ children }: CardRootProps) => {
  return (
    <div className="bg-white w-32 p-4 border h-40 rounded-lg relative border-borderColor">
      {children}
    </div>
  )
}
