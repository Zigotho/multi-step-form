interface CardTitleProps {
  title: string
}

export const CardTitle = ({ title }: CardTitleProps) => (
  <p className="text-denim text-base font-bold">{title}</p>
)
