var cubeGeometry = {
  vertexPositions : [
        // Front face
        -0.5, -0.5,  0.5,
         0.5, -0.5,  0.5,
         0.5,  0.5,  0.5,
        -0.5,  0.5,  0.5,

        // Back face
        -0.5, -0.5, -0.5,
        -0.5,  0.5, -0.5,
         0.5,  0.5, -0.5,
         0.5, -0.5, -0.5,

        // Top face
        -0.5,  0.5, -0.5,
        -0.5,  0.5,  0.5,
         0.5,  0.5,  0.5,
         0.5,  0.5, -0.5,

        // Bottom face
        -0.5, -0.5, -0.5,
         0.5, -0.5, -0.5,
         0.5, -0.5,  0.5,
        -0.5, -0.5,  0.5,

        // Right face
         0.5, -0.5, -0.5,
         0.5,  0.5, -0.5,
         0.5,  0.5,  0.5,
         0.5, -0.5,  0.5,

        // Left face
        -0.5, -0.5, -0.5,
        -0.5, -0.5,  0.5,
        -0.5,  0.5,  0.5,
        -0.5,  0.5, -0.5    
      ],
  vertexTextureCoords : [
        // Front face
        0.0, 0.0,
        1.0, 0.0,
        1.0, 63 / 304,
        0.0, 63 / 304,

        // Back face
        0.0, 241 / 304,
        1.0, 241 / 304,
        1.0, 1.0,
        0.0, 1.0,

        // Top face
        0.0, 0.197,
        1.0, 0.197,
        1.0, 0.407,
        0.0, 0.407,

        // Bottom face
        0.0, 0.332,
        1.0, 0.332,
        1.0, 0.539,
        0.0, 0.539,

        // Right face
        0.0, 161 / 304,
        1.0, 161 / 304,
        1.0, 223 / 304,
        0.0, 223 / 304,

        // Left face
        0.0, 201 / 304,
        1.0, 201 / 304,
        1.0, 263 / 304,
        0.0, 263 / 304
      ],
  vertexNormals : [
            // Front face
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,
             0.0,  0.0,  1.0,

            // Back face
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,
             0.0,  0.0, -1.0,

            // Top face
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,
             0.0,  1.0,  0.0,

            // Bottom face
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,
             0.0, -1.0,  0.0,

            // Right face
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,
             1.0,  0.0,  0.0,

            // Left face
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0,
            -1.0,  0.0,  0.0
    ],
  indices : [
        0, 1, 2,      0, 2, 3,    // Front face
        4, 5, 6,      4, 6, 7,    // Back face
        8, 9, 10,     8, 10, 11,  // Top face
        12, 13, 14,   12, 14, 15, // Bottom face
        16, 17, 18,   16, 18, 19, // Right face
        20, 21, 22,   20, 22, 23  // Left face
      ],
  colors : (function(){
    var packedColors = [
        [0.0, 1.0, 1.0, 1.0], // Front face
        [1.0, 1.0, 0.0, 1.0], // Back face
        [0.0, 1.0, 0.0, 1.0], // Top face
        [1.0, 0.0, 1.0, 1.0], // Bottom face
        [1.0, 0.0, 0.0, 1.0], // Right face
        [0.0, 0.0, 1.0, 1.0] // Left face
      ];
      var unpackedColors = [];
      for (var i in packedColors) {
        var color = packedColors[i];
        for (var j = 0; j < 4; j++) {
          unpackedColors = unpackedColors.concat(color);
        }
      }
      return unpackedColors; }())
};