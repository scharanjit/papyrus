import { CommandType } from 'src/dvu/enums/command_types'

export class Command {
  name: string = 'unnamed'
  shortcutKey: string
  type: CommandType

  validate(data: {}): boolean {
    return true
  }

  execute(data, depth: number = 0) {

  }
  
  getSummary(data: {}): string {
    return 'This method has not been overridden and should be done for all commands'
  }
}
