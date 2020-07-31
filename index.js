const makeArc = (x,y,rx,ry) =>{
    return document.createRange().createContextualFragment(`
    <path 
    class='arcs'
    d="
    M 10, 10
          a 25,25 0 1,1 50,0
          a 25,25 0 1,1 -50,0" 
    fill="blue"
          />
    
    `)
}

let svg = Array.from(document.getElementsByTagName('svg'))[0]
console.log(svg)
for (let i = 0; i < 10; i++){
    // let newArc = makeArc(0,0,5+(10*i),5+(10*i));
    // svg.appendChild(newArc)

    newpath = document.createElementNS('http://www.w3.org/2000/svg',"path");  
    let color = `rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
    let increment = i*10; 
    let size = 100 - increment
    newpath.setAttribute("d",`M ${150+increment}, 150 a ${size}, ${size} 0 1,1 ${size*2},0 a ${size}, ${size} 0 1,1 ${size*-2},0`)
    newpath.setAttribute('fill', color)
    newpath.setAttribute('side', "right")
    newpath.classList.add('newpath')
    newpath.setAttribute('id', `newpath${i}`)
    // newpath.id = `newpath${i}`

    let text = document.createElementNS('http://www.w3.org/2000/svg',"text")
    text.setAttribute('y', `${150}`)
    text.setAttribute('x', `${150}`)
    let newtext = document.createElementNS('http://www.w3.org/2000/svg',`textPath`)
    newtext.textContent = `newpath${i}`
    newtext.setAttribute("href", `#newpath${i}`)

    text.appendChild(newtext)
    svg.appendChild(text)
    svg.appendChild(newpath)
}
console.log(document.getElementsByClassName('arcs'));