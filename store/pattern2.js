export default {
  grid: [
    // Vertical
    {
      m: { x: 14.65, y: 0 },
      q: { x: 14.65, y: 0 },
      end: { x: 14.65, y: 100 },
      layer: 2
    },
    {
      m: { x: 29.25, y: 0 },
      q: { x: 29.25, y: 0 },
      end: { x: 29.25, y: 100 },
      layer: 1
    },
    {
      m: { x: 50, y: 0 },
      q: { x: 50, y: 0 },
      end: { x: 50, y: 100 },
      layer: 1
    },
    {
      m: { x: 70.75, y: 0 },
      q: { x: 70.75, y: 0 },
      end: { x: 70.75, y: 100 },
      layer: 2
    },
    // Horizontal
    {
      m: { x: 0, y: 29.25 },
      q: { x: 0, y: 29.25 },
      end: { x: 100, y: 29.25 },
      layer: 1
    },
    {
      m: { x: 0, y: 50 },
      q: { x: 0, y: 50 },
      end: { x: 100, y: 50 },
      layer: 1
    }
  ],
  paths: [
    {
      m: { x: 0, y: 50 },
      l: { x: 100, y: 100 },
      layer: 1
    },
    {
      m: { x: 0, y: 29.25 },
      l: { x: 100, y: 100 },
      layer: 1
    },
    {
      m: { x: 0, y: 0 },
      l: { x: 100, y: 100 },
      layer: 1
    },
    {
      m: { x: 29.25, y: 0 },
      l: { x: 100, y: 100 },
      layer: 1
    },
    {
      m: { x: 50, y: 0 },
      l: { x: 100, y: 100 },
      layer: 1
    },
    {
      m: { x: 70.75, y: 0 },
      l: { x: 100, y: 100 },
      layer: 1
    },
    {
      m: { x: 29.25, y: 100 },
      l: { x: 100, y: 0 },
      layer: 2
    },
    // bezier
    {
      m: { x: 29.25, y: 100 },
      a: { rx: 100 - 29.25, ry: 100, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 1, x: 100, y: 0 },
      layer: 2
    },
    {
      m: { x: 50, y: 100 },
      a: { rx: 50, ry: 100 - 29.25, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 1, x: 100, y: 29.25 },
      layer: 2
    }
  ]
}
