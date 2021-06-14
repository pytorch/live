/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import Foundation
import UIKit

@objc(DrawingCanvasView)
class DrawingCanvasView: UIView {

    @objc public var onContext2D: RCTBubblingEventBlock?
    var ref: [String:String] = [:] //initialized to allow using self in init()

    var strokeRectangles = [CGRect]()
    var fillRectangles = [CGRect]()
    var arcs = [CGArc]()

    override public init(frame: CGRect) {
        super.init(frame: frame)
        ref = JSContext.wrapObject(view: self).getJSRef()
    }

    required init?(coder aDecoder: NSCoder) {
        super.init(coder: aDecoder)
        ref = JSContext.wrapObject(view: self).getJSRef()
    }

    override func draw(_ rect: CGRect) {
        super.draw(rect)

        guard let context = UIGraphicsGetCurrentContext() else { return }

        for arc in arcs {
            context.addArc(center: arc.center, radius: arc.radius, startAngle: arc.startAngle, endAngle: arc.endAngle, clockwise: arc.clockwise)
            context.strokePath()
        }

        context.addRects(strokeRectangles)
        context.strokePath()

        context.addRects(fillRectangles)
        context.drawPath(using: .fillStroke)

    }

    override func didSetProps(_ changedProps: [String]!) {
        guard let unwrappedOnContext2D = onContext2D else { return }
        unwrappedOnContext2D(["ID" : ref[JSContext.ID_KEY]])
    }

    func arc(x: CGFloat, y: CGFloat, radius: CGFloat, startAngle: CGFloat, endAngle: CGFloat, counterclockwise: Bool) {
        //Apple's arc asks for clockwise, CanvasRenderingContext asks for counterclockwise
        let arc = CGArc(x: x, y: y, radius: radius, startAngle: startAngle, endAngle: endAngle, clockwise: !counterclockwise)
        arcs.append(arc)

        //invalidates view so that it needs to be redrawn
        let rect = CGRect(x: x-radius, y: y-radius, width: 2*radius, height: 2*radius)
        DispatchQueue.main.async {
            self.setNeedsDisplay(rect)
        }
    }

    func strokeRect(x: CGFloat, y: CGFloat, width: CGFloat, height: CGFloat) {
        //create CGRect and add it to list
        let rect = CGRect(x: x, y: y, width: width, height: height)
        strokeRectangles.append(rect)

        //invalidates view so that it needs to be redrawn
        DispatchQueue.main.async {
            self.setNeedsDisplay(rect)
        }
    }

    func fillRect(x: CGFloat, y: CGFloat, width: CGFloat, height: CGFloat) {
        //create CGRect and add it to list
        let rect = CGRect(x: x, y: y, width: width, height: height)
        fillRectangles.append(rect)

        //invalidates view so that it needs to be redrawn
        DispatchQueue.main.async {
            self.setNeedsDisplay(rect)
        }
    }

    func invalidate() {
        DispatchQueue.main.async {
            self.setNeedsDisplay()
        }
    }

    struct CGArc {
        public var center: CGPoint
        public var radius: CGFloat
        public var startAngle: CGFloat
        public var endAngle: CGFloat
        public var clockwise: Bool

        init(x: CGFloat, y: CGFloat, radius: CGFloat, startAngle: CGFloat, endAngle: CGFloat, clockwise: Bool) {
            self.center = CGPoint(x: x, y: y)
            self.radius = radius
            self.startAngle = startAngle
            self.endAngle = endAngle
            self.clockwise = clockwise
        }
    }

}