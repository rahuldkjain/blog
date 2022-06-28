---
title: Animate 3D models using react-three-fiber
date: 2022-06-28
description: Let's learn how to import 3d models in your react app and how to animate it. @react-three/fiber @react-three/drei three
---

This article will help you to understand the lifecycle of developing 3D animations using react-three-fiber. Follow these steps to get started.

### 1. Download 3D model

You need a 3D asset to get started. I personally use [Sketchfab](https://sketchfab.com/) marketplace to download CC licensed 3D models.
For this demo, I'll be using the [skateboard](https://sketchfab.com/3d-models/skateboard-4295ea44111e45299d5ab4862a354664) model.

### 2. Convert model to .glb

Install gltf-pipeline globally.

```
npm install -g gltf-pipeline
```

Place the glTF file in an empty folder and open your command line tool. cd into the folder and run the command below:

```
gltf-pipeline -i <source file> -o <output file>

// example
gltf-pipeline -i skateboard.gltf -o skateboard.glb
```

### 3. Compress the model

We’ll use a glTF pipeline compression extension called [Draco](https://google.github.io/draco/):

```
gltf-pipeline -i <source file> -o <output file> --draco.compressionLevel=10
```

Draco compression has a maximum value of ten and a minimum value of zero. Passing 10 into the compression level provides the maximum possible compression.

### 4. Dependencies

```
npm i @react-three/fiber @react-three/drei three
```

### 5. Converting the model into reusable react-component (optional)

```
npm i gltfjsx
npx gltfjsx <glTF model source file>

// example
npx gltfjsx skateboard-draco.gltf
```

### 6. Adding 3d component into the scene

There are two ways to import 3D model into scene:

1. Use the reusable react-component after converting it using gltfjsx
2. Import the model using `useLoader` hook with `GLTFLoader`.

### 7. Animating the model

### 8. Conclusion

### 9. References

1. [Configure 3D models with react-three-fiber](https://blog.logrocket.com/configure-3d-models-react-three-fiber/)
