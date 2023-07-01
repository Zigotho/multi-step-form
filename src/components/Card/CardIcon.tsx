import { ReactNode } from 'react'

interface CardIconProps {
  icon: ReactNode
}

export const CardIcon = ({ icon }: CardIconProps) => {
  return <>{icon}</>
}
