s0.initImage("https://raw.githubusercontent.com/ZiminYue/Ah-Mi---HydraLiveCodingProject/main/assets/images/test.png")

shape(30,0.0001,5).color(1,0,0).modulate(src(s0),1).out(o0)

// src(o0)
//  .saturate(1)
//  .scale(1)
//  .color(1.01,1,1.01)
//  .hue(.01)
//  .modulateHue(src(o1).hue(0.9).posterize(-5).contrast(.7),2)
//   .layer(src(o1)
//          .luma()
//          .mult(gradient(1)
//                .saturate(.9)))
//   .out(o0)
////↓This has to be here
// noise(1, .2)
//   .rotate(2,.5)
//   .layer(src(o0)
//   .scrollX(.2))
//   .out(o1)

shape([4,5,6].fast(0.5).smooth(1),0.000001,[0.2,0.7].smooth(0))
.color(0.2,0.4,0.3)
.scrollX(()=>Math.sin(time*0.27))
.add(
  shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.5,0.3].smooth(1))
  .color(0.6,0.2,0.5)
  .scrollY(0.3)
  .scrollX(()=>Math.sin(time*0.33)))
.add(
  shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.3].smooth(1))
  .color(0.2,0.4,0.6)
  .scrollY(-0.35)
  .scrollX(()=>Math.sin(time*0.41)*-1))
.add(
      src(o0).shift(0.001,0.01,0.001)
      .scrollX([0.05,-0.05].fast(0.1).smooth(1))
      .scale([1.05,0.9].fast(0.3).smooth(1),[1.05,0.9,1].fast(0.29).smooth(1))
      ,0.85)
.modulate(voronoi(10,2,2))
.out()

// src(o0).modulate(noise(3),0.005).blend(shape(30,0.0001,5).color(0,0,0)).out(o0)//Try to add a black scene

shape(30,0.5,0.1).scale(0.08,0.5,1).out(o1)//clean up o1, making a singularity

osc(3, 0.1, 0.4)
.color(1.2,1.2,1.3)
// .saturate(0.4)
.modulateRepeat(osc(2),1, 2, 4, 3)
.modulateKaleid(osc(12,0.05,0),1)
.luma (0.4)
.rotate(4, 0.5,1)
.brightness( () => Math.sin(time*0.5 ))
.scale(1).diff(o1)
.out(o0)
////↓the pattern go fade out for some time
 // osc(3, 0.1, 0.4)
 // .color(1.2,1.2,1.3)
 // .modulateRepeat(osc(2),1, 2, 4, 3)
 // .modulateKaleid(osc(12,0.05,0),1)
 // .rotate(4, 0.5,1)
 // .brightness( () => Math.sin(time*0.5 ))
 // .luma (0.4)
 // .scale(1).diff(o1)
 // .out(o0)

s0.initImage("https://pbs.twimg.com/card_img/1849384198307446785/tFvMXLiC?format=jpg&name=small")
voronoi(5,3,5).color(1,0,3).kaleid(15).modulate(src(s0).scale(1,1.2,1,0.5,0),1).modulate(noise(10),()=>a.fft[0]).out(o0)
