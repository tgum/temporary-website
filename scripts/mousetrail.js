(() => {
  console.log("Mouse trail ENABLED")
  let spawn = true
  let trail = []
  let trail_container = document.createElement("div")
  document.body.append(trail_container)
  window.onmousemove = e => {
    if (spawn) {
      setTimeout(() => spawn = true, Math.random() * 20 + 50)
      spawn = false
      let img = document.createElement("img")
      // img.style.display = "inline-block"
      // img.style.width = "4px"
      // img.style.height = "4px"
      // img.style.background = "blue"
      img.src = "/imgs/cursors/trail.png";
      trail_container.append(img)
      img.style.position = "absolute"
      img.style.left = pageXOffset + e.clientX+"px"
      img.style.top = pageYOffset + e.clientY+"px"
      // img.style.boxShadow = "120px 80px 40px 20px #ff5;"
      img.style.pointerEvents = "none"
      trail.push({
        elt: img,
        age: 0,
        x: pageXOffset + e.clientX,
        y: pageYOffset + e.clientY,
        rot: 0,
        rot_speed: Math.random() * 5 + 1
      })
    }
  }
  const maxage = 200
  setInterval(() => {
    for (let i = trail.length-1; i >= 0; i--) {
      let t = trail[i]
      t.age++
      t.rot += t.rot_speed
      t.elt.style.rotate = t.rot + "deg"
      t.y += 0.5
      t.elt.style.top = t.y+"px"
      t.elt.style.opacity = 1-t.age/maxage
      if (t.age > maxage) {
        t.elt.remove()
        trail.splice(i, 1)
      }
    }
  }, 1000/60)
})()
