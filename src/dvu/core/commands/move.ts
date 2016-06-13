import AdjustCommand from './adjust'
import { Scope, ScopeResolver } from 'src/dvu/data/scope'
import { Point } from 'src/dvu/geometry/cartesian_system'

interface AdjustCommandDataInterface {
  pictureName: string
  initPoint: Point
  endPoint: Point
}

export default class MoveCommand extends AdjustCommand {
  name: 'move'

  execute(data: AdjustCommandDataInterface, scope: Scope) {
    const element: Picture = <Picture> ScopeResolver.resolve(data.pictureName, scope)
  }
}
