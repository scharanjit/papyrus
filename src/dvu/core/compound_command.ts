import Command from './command'

export default class CompoundCommand extends Command {
  steps: Step[]
}
