import { Input } from '../../Input/Input'

export const PersonalInfo = () => (
  <div id="form" className="w-full mt-10 max-w-[29rem] flex flex-col gap-10">
    <div>
      <h1 className="text-denim text-4xl font-bold">Personal info</h1>
      <p className="text-grey text-base">
        Please provide your name, email address, and phone number.
      </p>
    </div>
    <div className="flex flex-col gap-6">
      <Input label="Name" placeholder="Stephen King" />
      <Input label="Name" placeholder="stephenking@lorem.com" />
      <Input label="Name" placeholder="+1 234 567 890" />
    </div>
  </div>
)
