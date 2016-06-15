import {Command} from '../command'
import {ValueType} from '../data/data_definition'
import Summary from '../summary'

export default class Expression {
  constructor(public command: Command, public data) {

  }

  addParameter(name: string, value: ValueType) {
    this.data[name] = value
  }

  isValid(): boolean {
    return this.command.validate(this.data)
  }

  getSummary(): Summary {
    return this.command.getSummary(this.data)
  }

  execute(depth: number = 0) {
    return this.command.execute(this.data, depth + 1)
  }
}
