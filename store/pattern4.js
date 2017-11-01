export default {
  grid: [
    // Vertical
    {
      m: { x: 14.65, y: 0 },
      l: { x: 14.65, y: 100 },
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
      l: { x: 70.75, y: 100 },
      layer: 1
    },
    {
      m: { x: 85.35, y: 0 },
      l: { x: 85.35, y: 100 },
      layer: 2
    },
    // Horizontal
    {
      m: { x: 0, y: 50 },
      q: { x: 0, y: 50 },
      end: { x: 100, y: 50 },
      layer: 1
    },
    {
      m: { x: 0, y: 29.25 },
      l: { x: 100, y: 29.25 },
      layer: 1
    },
    {
      m: { x: 0, y: 70.75 },
      l: { x: 100, y: 70.75 },
      layer: 1
    }
  ],
  paths: [
    {
      m: { x: 0, y: 0 },
      l: { x: 100, y: 100 },
      layer: 2
    },
    {
      m: { x: 29.25, y: 0 },
      l: { x: 100, y: 100 },
      layer: 2
    },
    {
      m: { x: 0, y: 29.25 },
      l: { x: 100, y: 100 },
      layer: 2
    },
    {
      m: { x: 0, y: 70.75 },
      l: { x: 50, y: 0 },
      layer: 2
    },
    {
      m: { x: 0, y: 29.25 },
      l: { x: 50, y: 100 },
      layer: 2
    },
    {
      m: { x: 100, y: 0 },
      l: { x: 0, y: 70.75 },
      layer: 2
    },
    {
      m: { x: 100, y: 0 },
      l: { x: 0, y: 100 },
      layer: 2
    },
    {
      m: { x: 100, y: 0 },
      l: { x: 29.25, y: 100 },
      layer: 2
    },
    // arcs
    {
      m: { x: 0, y: 70.75 },
      a: { rx: 50, ry: 70.75, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 0, x: 50, y: 0 },
      layer: 1
    },
    {
      m: { x: 50, y: 0 },
      a: { rx: 50, ry: 70.75, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 0, x: 100, y: 70.75 },
      layer: 1
    },
    {
      m: { x: 100, y: 29.25 },
      a: { rx: 50, ry: 70.75, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 0, x: 50, y: 100 },
      layer: 1
    },
    {
      m: { x: 50, y: 100 },
      a: { rx: 50, ry: 70.75, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 0, x: 0, y: 29.25 },
      layer: 1
    }
    // {
    //   m: { x: 0, y: 100 },
    //   a: { rx: 29.25, ry: 100, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 1, x: 29.25, y: 0 },
    //   layer: 2
    // },
    // {
    //   m: { x: 29.25, y: 0 },
    //   a: { rx: 100 - 29.25, ry: 100, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 0, x: 100, y: 100 },
    //   layer: 2
    // },
    // {
    //   m: { x: 29.25, y: 100 },
    //   a: { rx: 100 - 29.25, ry: 100, xAxisRotation: 0, largeArcFlag: 0, sweepFlag: 1, x: 100, y: 0 },
    //   layer: 1
    // }
  ]
}
