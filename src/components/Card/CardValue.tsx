interface CardValueProps {
  text: string
  isPerMonth?: boolean
}

export const CardValue = ({ text, isPerMonth }: CardValueProps) => (
  <p className="text-grey text-sm font-normal">
    {`$${text}/${isPerMonth ? 'mo' : 'y'}`}
  </p>
)
