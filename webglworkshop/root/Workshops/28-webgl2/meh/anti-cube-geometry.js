﻿var antiCubeGeometry = {
  vertices: [
        // Front face
        -0.5,     -0.65,  0.5,
         0.5,     -0.65,  0.5,
         0.0,      0.65,  0.707107,
                    
         0.707107, 0.65,  0.0,
         0.0,      0.65,  0.707107,
         0.5,     -0.65,  0.5,
                     
        // Back face 
        -0.5,     -0.65, -0.5,
         0.0,      0.65, -0.707107,
         0.5,     -0.65, -0.5,
                     
        -0.707107, 0.65,  0.0,
         0.0,      0.65, -0.707107,
        -0.5,     -0.65, -0.5,


        // Top face
        -0.707107, 0.65,  0.0,
         0.0,      0.65,  0.707107,
         0.707107, 0.65,  0.0,
                     
        -0.707107, 0.65,  0.0,
         0.707107, 0.65,  0.0,
         0.0,      0.65, -0.707107,

        // Bottom face
        -0.5, -0.65, -0.5,
         0.5, -0.65, -0.5,
         0.5, -0.65,  0.5,
                 
        -0.5, -0.65, -0.5,
         0.5, -0.65,  0.5,
        -0.5, -0.65,  0.5,

         // Right face
         0.5,     -0.65, -0.5,
         0.707107, 0.65,  0.0,
         0.5,     -0.65,  0.5,
                     
         0.5,     -0.65, -0.5,
         0.0,      0.65, -0.707107,
         0.707107, 0.65,  0.0,
                     
        // Left face 
        -0.5,     -0.65, -0.5,
        -0.5,     -0.65,  0.5,
        -0.707107, 0.65,  0.0,
                     
        -0.5,     -0.65,  0.5,
         0.0,      0.65,  0.707107,
        -0.707107, 0.65,  0.0,
  ],
  textureCoords: [  ],
  normals: [  ],
  indices: [
       0,  1,  2,    3,  4,  5, // Front face
       6,  7,  8,    9, 10, 11, // Back face
      12, 13, 14,   15, 16, 17, // Top face
      18, 19, 20,   21, 22, 23, // Bottom face
      24, 25, 26,   27, 28, 29, // Right face
      30, 31, 32,   33, 34, 35 // Left face
  ],

  colors: (function () {
    var faceColors = [
        [0.0, 0.5, 1.0, 1.0],
        [1.0, 0.5, 0.0, 1.0],

        [0.0, 1.0, 1.0, 1.0],
        [1.0, 0.0, 0.0, 1.0],

        [0.5, 0.2, 0.0, 1.0],
        [0.5, 0.2, 0.0, 1.0],

        [0.5, 0.8, 0.8, 1.0],
        [0.5, 0.8, 0.8, 1.0],

        [1.0, 0.0, 0.5, 1.0],
        [0.0, 1.0, 0.5, 1.0],

        [0.5, 1.0, 0.0, 1.0],
        [0.0, 0.5, 0.0, 1.0],
    ];
    var vertexColours = [];
    for (var i in faceColors) {
      var color = faceColors[i];
      for (var j = 0; j < 3; j++) {
        vertexColours = vertexColours.concat(color);
      }
    }
    return vertexColours;
  }())
};