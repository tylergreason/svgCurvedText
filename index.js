const makeArc = (x,y,rx,ry) =>{
    return document.createRange().createContextualFragment(`
    <path 
    class='arcs'
    d="
    M 100, 100
          a 25,25 0 1,1 50,0
          a 25,25 0 1,1 -50,0
    " 
          />
          fill="blue"
    
    `)
}

let svg = Array.from(document.getElementsByTagName('svg'))[0]
console.log(svg)
for (let i = 0; i < 10; i++){
    let newArc = makeArc(0,0,5+(10*i),5+(10*i));
    svg.appendChild(newArc)
}
console.log(document.getElementsByClassName('arcs'));