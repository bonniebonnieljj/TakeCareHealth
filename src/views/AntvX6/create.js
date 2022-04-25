import { Graph } from "@antv/x6";
console.log(Object.keys(Graph).map((item) => {return [item, typeof Graph[item]]}))
export default function create(id, data) {
// #region 初始化画布
  const graph = new Graph({
    container: document.getElementById(id),
    grid: true,
    mousewheel: {
      enabled: true,
      zoomAtMousePosition: true,
      modifiers: "ctrl",
      minScale: 0.5,
      maxScale: 3
    },
    highlighting: {
      magnetAdsorbed: {
        name: "stroke",
        args: {
          attrs: {
            fill: "#5F95FF",
            stroke: "#5F95FF"
          }
        }
      }
    },
    resizing: false,
    rotating: false,
    snapline: true,
    interacting: {
      nodeMovable: false
    }
  });
  graph.fromJSON(data)
  graph.on('node:click', ({ e, x, y, node, view }) => {
    console.log('click node', { e, x, y, node, view })
    const dom = document.getElementById('container2')
    let stencilContainer = document.getElementById('tooltipww')
    if(!stencilContainer) {
      stencilContainer = document.createElement('div')
      stencilContainer.id = 'tooltipww'
      dom.appendChild(stencilContainer)
    }
    setTimeout(() => {
      console.log(stencilContainer.style, x, y)
      stencilContainer.style['left'] = x + 'px!important'
      stencilContainer.style['top'] = y + 'px!important'
      stencilContainer.style['z-index'] = 100+'!important'
      stencilContainer.style['visibility'] = 'visible'
      stencilContainer.cssText = 'left:'+ x + 'px!important;top:'+ y+ 'px!important;'


    }, 0)


    window.open('http://www.baidu.com')

  })
  return graph
}
