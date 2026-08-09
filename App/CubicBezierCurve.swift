import CoreGraphics

struct CubicBezierCurve {
  var x1: Double
  var y1: Double
  var x2: Double
  var y2: Double

  func value(atX x: Double) -> Double {
    var lower = 0.0
    var upper = 1.0
    for _ in 0..<20 {
      let time = (lower + upper) / 2
      if component(time, first: x1, second: x2) < x {
        lower = time
      } else {
        upper = time
      }
    }
    return component((lower + upper) / 2, first: y1, second: y2)
  }

  private func component(_ time: Double, first: Double, second: Double) -> Double {
    let inverse = 1 - time
    return 3 * inverse * inverse * time * first
      + 3 * inverse * time * time * second
      + time * time * time
  }
}
