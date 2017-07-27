﻿/// <reference path="adapter.js" />
/// <reference path="options.js" />
/// <reference path="scene.js" />
/// <reference path="controller-babylon.js" />
/// <reference path="controller-three.js" />
/// <reference path="controller-playcanvas.js" />

"use strict"

window.addEventListener('DOMContentLoaded', function () { main(); });

function main() {
  var scene = makeScene();

  // set up a "default" scene
  var light = makeLight();
  light.type = "spot";
  light.position = [0, 100, 0];
  scene.lights.push(light);

  var offset = 35;

  var mesh = makeMesh();
  mesh.type = "torus";
  scene.meshes.push(mesh);

  var mesh = makeMesh();
  mesh.type = "box";
  mesh.position[0] = offset;
  mesh.position[1] = -offset;
  scene.meshes.push(mesh);

  var mesh = makeMesh();
  mesh.type = "cone";
  mesh.position[0] = -offset;
  mesh.position[1] = -offset;
  scene.meshes.push(mesh);

  var mesh = makeMesh();
  mesh.type = "sphere";
  mesh.position[0] = -offset;
  mesh.position[1] = offset;
  scene.meshes.push(mesh);

  var mesh = makeMesh();
  mesh.type = "cylinder";
  mesh.position[0] = offset;
  mesh.position[1] = offset;
  scene.meshes.push(mesh);

  var controllers = [];
  controllers["Babylon.js"] = makeBabylonController(scene);
  controllers["Three.js"] = makeThreeController(scene);
  controllers["PlayCanvas.js"] = makePlayCanvasController(scene);

  var adapter = makeAdapter();
  adapter.addEngine("Three.js", controllers["Three.js"]);
  adapter.addEngine("Babylon.js", controllers["Babylon.js"]);
  adapter.addEngine("PlayCanvas.js", controllers["PlayCanvas.js"]);
  //adapter.setEngine("Three.js");
  //adapter.setEngine("Babylon.js");
  adapter.setEngine("PlayCanvas.js");

  optionsController.initialise(adapter);
  //optionsController.adapter = adapter;

  (function render() {
    requestAnimationFrame(render);
    adapter.render();
  })();

}