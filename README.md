# My third portfolio

This new portfolio is built using TypeScript, Three.js and GLSL.

## What I learnt:

### Rendering objects

You do not need to add/initiate mesh in Renderer class as World class already includes all the objects.

### smoothstep

smoothstep() performs smooth Hermite interpolation between 0 to 1.
This function is useful where smooth transition is desired.

### FBO

Frame Buffer Object (FBO) is normally used for off-screen rendering, post-processing effects and other advanced graphics

### Vertex shader

Vertex shader is used to change positions of points based on vector values.
Make sure to pass the position to gl_Position variable

Example:

```bash
  vec3 pos = vec3(position.x, position.y + 0.1, position.z + 0.1 * sin(uv.x*20.0) * sin(uv.y*20.0));
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
```

### Type settings

Type error TS5023 Details: error TS5023: Unknown compiler option 'allowImportingTsExtensions'. But project built fine, try following:

1. Open the VS Code command palette with Ctrl + Shift + P (on Windows)
2. Find "TypeScript: Select TypeScript Version…"
3. Choose "Use Workspace Version"

Sometimes VS code version is old compare to workspace version. Selecting workspace version fixed issue.

### Git

**If you changed location of the repository, re-run**

```bash
git init
```

## Quick Start:

**To create a project, simply run:**

```bash
npx build-threejs-app
```

**Change directory:**

```bash
cd <project-name>
```

**Install the dependencies:**

```bash
npm install
```

**Run app in development:**

```bash
npm run dev
```

## Dependencies:

| Package                                       | Version                                                                      |
| --------------------------------------------- | :--------------------------------------------------------------------------- |
| [vite](packages/vite)                         | ![vite version](https://img.shields.io/npm/v/vite.svg?label=%20)             |
| [three](packages/three)                       | ![three](https://img.shields.io/npm/v/three?label=%20)                       |
| [events](packages/events)                     | ![events](https://img.shields.io/npm/v/events?label=%20)                     |
| [vite-plugin-glsl](packages/vite-glsl-plugin) | ![vite-plugin-glsl](https://img.shields.io/npm/v/vite-plugin-glsl?label=%20) |
| [gsap](packages/gsap)                         | ![vite-plugin=glsl](https://img.shields.io/npm/v/gsap?label=%20)             |
| [dat.gui](packages/dat.gui)                   | ![vite-plugin=glsl](https://img.shields.io/npm/v/dat.gui?label=%20)          |

## Project Structure:

```
public\
  |--models\          # Contain 3d models
  |--textures\        # Contain textures
src\
  |--constants\       # Contain environment variables and configuration related things
  |--helpers\         # Contain helper classes & functions
  |--scenes\          # Contain scenes & its objects
  |--shaders\         # Contain custom shaders
  |--utils\           # Contain utility classes & functions
  |--Camera.ts        # Handle cameras
  |--Experience.ts    # Handle experience & scenes
  |--Renderer.ts      # Handle renderers
index.html
main.ts
style.css             # Custom styling
```
