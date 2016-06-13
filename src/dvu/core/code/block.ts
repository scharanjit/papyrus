import Expression from './expression'
import { Scope } from './../data/scope.ts'

export default class Block extends Expression {
  scope: Scope

  constructor(public expressions: Expression[], public data) {
    super(expressions[0].command, data)
  }
}
