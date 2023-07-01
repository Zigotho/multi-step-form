interface InputProps {
  label: string
  placeholder: string
}
export const Input = ({ label, placeholder }: InputProps) => {
  return (
    <div className="flex flex-col ">
      <label className="text-denim text-sm font-normal leading-normal">
        {label}
      </label>
      <input
        placeholder={`e.g. ${placeholder}`}
        type="text"
        className="rounded-lg border-solid border-2 border-borderColor pl-4 py-3"
      />
    </div>
  )
}
