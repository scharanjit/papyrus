import CommandInterface from './command_interface'
import Blueprint from 'src/dvu/models/blueprint'

export default class DrawCommand extends CommandInterface {
  name: string = 'draw'

  constructor() {
    super()
  }

  execute(blueprint: Blueprint, evaluationContext) {
    blueprint.steps.forEach((step) => {
    })
  }
}
