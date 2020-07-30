const makeArc = (x,y,rx,ry) =>{
    return document.createRange().createContextualFragment(`
    <path 
    class='arcs'
        d="
          M ${x}, ${y}
          a ${rx},${ry} 0 1,1 50,0
          a ${rx},${ry} 0 1,1 -50,0
          " 
          fill="red"
          />
    
    `)
}

let svg = Array.from(document.getElementsByTagName('svg'))[0]
console.log(svg)
for (let i = 0; i < 10; i++){
    let newArc = makeArc(50,50,50+(10*i),50+(10*i));
    svg.appendChild(newArc)
}
console.log(document.getElementsByClassName('arcs'));