import { Point } from 'src/dvu/geometry/cartesian_system'
import { SVG } from 'src/dvu/core/helpers'

export interface Picture {
  name: string
  element: Element
  boundingElement: Element
  magnets: Element[]

  move: (initPoint: Point, endPoint: Point) => any
  rotate: (initPoint: Point, endPoint: Point) => any
  scale: (initPoint: Point, endPoint: Point) => any
  duplicate: () => Picture
  getHandle: () => Element
}

export abstract class AbstractPicture implements Picture {
  name: string
  element: Element
  boundingElement: Element
  magnets: Element[]

  moveOffset: Point = { x: 0, y: 0 }
  rotateAngle: number = 0
  scaleFactor: Point = { x: 0, y: 0 }

  move(initPoint: Point, endPoint: Point): any {
    this.moveOffset.x += (endPoint.x - initPoint.x)
    this.moveOffset.y += (endPoint.y - initPoint.y)
    
    this.updateTransform()
  }

  rotate(initPoint: Point, endPoint: Point): any {
    const RADIAN_TO_DEGREE_FACTOR = 180/Math.PI
    const rotationSlope = (endPoint.y - initPoint.y)/(endPoint.x - initPoint.x)

    this.rotateAngle += (Math.atan(rotationSlope) * RADIAN_TO_DEGREE_FACTOR)
    
    this.updateTransform()
  }

  scale(initPoint: Point, endPoint: Point): any {
    this.scaleFactor.x *= (endPoint.x/initPoint.x)
    this.scaleFactor.y *= (endPoint.y/initPoint.y) 

    this.updateTransform()
  }
  
  duplicate(): Picture {
    return this
  }
  
  getHandle(): Element {
    return SVG.createGroup([this.boundingElement, ...this.magnets])
  }

  /**
   * Update the transform property of the current picture since scale has changed
   */
  private updateTransform() {
    const translateProperty = `translate(${this.moveOffset.x}, ${this.moveOffset.y})`,
          rotateProperty = `rotate(${this.rotateAngle})`,
          scaleProperty = `scale(${this.scaleFactor.x}, ${this.scaleFactor.y})`
    
    this.element.setAttributeNS(null, 'transform', `${translateProperty} ${rotateProperty} ${scaleProperty}`)
  }
}