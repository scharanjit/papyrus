import { Picture, AbstractPicture } from './picture'
import { Point } from 'src/dvu/geometry/cartesian_system'

export class CompositePicture extends AbstractPicture {
  dimensions: [Point, Point]

  constructor(element: Element) {
    super()
    this.element = element
  }
}