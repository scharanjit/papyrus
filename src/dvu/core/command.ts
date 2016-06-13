import { Point } from '../geometry/cartesian_system'
import { CommandType } from '../enums/command_types'

export default class Command {
  name: string = 'unnamed'
  shortcutKey: string
  type: CommandType

  validate(data: {}): boolean {
    return true
  }

  execute(data, depth: number = 0) {

  }
  
  getSummary(data: {}): string {
    return 'This method has not been overriden and should be done for all commands'
  }
}
