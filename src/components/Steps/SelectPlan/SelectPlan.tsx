import { Card } from '../../Card'
import { ArcadeIcon } from '../../svgs/ArcadeIcon'

export const SelectPlan = () => (
  <div id="form" className="w-full mt-10">
    <h1 className="text-denim text-4xl font-bold">Select your Plan</h1>
    <p className="text-grey text-base">
      Please provide your name, email address, and phone number.
    </p>
    <div>
      <Card.Root>
        <Card.Icon icon={<ArcadeIcon />} />
        <Card.Title title="Arcade" />
        <Card.Value isPerMonth text="9" />
      </Card.Root>
    </div>
  </div>
)
