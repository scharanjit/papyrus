import { ElementRef } from 'angular2/core'
import { Coordinates } from './cartesian'

export type CommandType = 'primitive' | 'adjust' | 'flow' | 'modifier' | 'group'

export class Command {
  static type: CommandType
  static actionKey: string
  static initEvent: string
  static modifyEvent: string
  static endEvent: string
  
  type: CommandType
  
  validate(): boolean {
    return true
  }
  
  getSummary(): string {
    return 'This method has not been overriden and should be done for all commands'
  }
}

export class DrawCommand extends Command {
  static initEvent: string = 'mousedown'
  static modifyEvent: string = 'mousemove'
  static endEvent: string = 'mouseup'
  
  startCoordinates: Coordinates
  endCoordinates: Coordinates
  state: 'initiated' | 'drawing' | 'terminated'
  type = 'primitive'
  
  constructor(private parent: ElementRef) {
    super()
  }
  
  onMouseDown(x: number, y: number) {
    this.startCoordinates = { x, y }
    this.endCoordinates = this.startCoordinates
    this.state = 'initiated'
  }
  
  onMouseMove(x: number, y: number) {
    this.endCoordinates = { x, y }
    this.state = 'drawing'
  }
  
  onMouseUp(x: number, y: number) {
    this.endCoordinates = { x, y }
    this.state = 'terminated'
  }
  
  validate(): boolean {
    const init = this.startCoordinates, end = this.endCoordinates
    
    if (init.x === end.x && init.y === end.y) {
      return false
    }
    return true
  }
  
  getSummary(): string {
    return `Draw ${this.constructor.name} from (${this.startCoordinates.x}, ${this.startCoordinates.y}) to (${this.endCoordinates.x}, ${this.endCoordinates.y})`
  }
}

export class AdjustCommand extends Command {
  constructor(private element: ElementRef) {
    super()
  }
}
