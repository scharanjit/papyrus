import { ValueType } from './data_definition'

export interface Scope {
  data: {}
  isGlobal?: boolean
  parent?: Scope
}

export class ScopeResolver {
  static resolve(name: string, scope: Scope): ValueType {
    if (scope.data[name] !== undefined) {
      return scope.data[name]
    } else if (scope.parent !== undefined) {
      return ScopeResolver.resolve(name, scope.parent)
    }

    return undefined
  }
}
