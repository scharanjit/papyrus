import { ElementRef } from 'angular2/core'
import { Visualizable, AppendableViz } from '../../../interfaces/visualization'
import { SVG } from '../../../helpers/svg'
import { Command } from '../../../interfaces/command'
import { CommandType } from '../../../interfaces/enums/command_types'

export class LineElement implements Visualizable {
  parent: AppendableViz
  element: ElementRef
  
  draw({x1, y1, x2, y2}) {
    let line = SVG.createLine(x1, y1, x2, y2)
    this.parent.append(element)
  }
  
  move(x, y) {
    
  }
  
  scale(xRatio, yRatio) {
    
  }
  
  rotate(angle) {
    
  }
}

export class Line implements Command {
  type: CommandType = CommandType.PRIMITIVE
  actionKey: string = 'x'
  
  onClick() {
    console.error('Unsupported event by command: Line')
  }
  
  onDrag() {
    
  }
}
