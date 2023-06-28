import { PersonalInfo } from '../components/Steps/PersonalInfo/PersonalInfo'
import { SelectPlan } from '../components/Steps/SelectPlan/SelectPlan'

export const steps = [
  {
    id: 1,
    title: 'your info',
    component: <PersonalInfo />,
  },
  {
    id: 2,
    title: 'select plan',
    component: <SelectPlan />,
  },
  {
    id: 3,
    title: 'add-ons',
  },
  {
    id: 4,
    title: 'summary',
  },
]
