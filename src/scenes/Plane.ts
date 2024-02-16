import * as THREE from 'three'

// src
import Experience from '../Experience.js'
// utils
import Resources from '../utils/Resources.js'

// shaders
import vertexShader from '../shaders/vertex_shader.glsl'
import fragmentShader from '../shaders/fragment_shader.glsl'
import Time from '../utils/Time.ts'

import colors from 'nice-color-palettes';
// Setting colors from nice-color-palettes
let pallet: THREE.Color[] | string[] = colors[Math.floor(Math.random() * colors.length)]

// Set pallet colors to THREE.js colors
pallet = pallet.map((color)=> (new THREE.Color(color)))
console.log(pallet);

type Parameters = {
  rotationSpeed: number;
  size: number;
};
export default class Plane {
	experience: Experience
	scene: THREE.Scene
	resources: Resources
	parameters: Parameters
	geometry: THREE.PlaneGeometry
	material: THREE.ShaderMaterial
	count: number
	size: number
	time: Time
  plane: THREE.Mesh

	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources
		this.time = this.experience.time
		
		this.parameters = {
      rotationSpeed: 0.0001,
      size: 1,
    };
		this.setModel()
	}

	setModel() {

		this.material = new THREE.ShaderMaterial({
			uniforms: {
				time: { value: 0 },
				uPositions: { value: null },
				uColor: { value: pallet },
				resolution: { value: new THREE.Vector4() },
			},
			wireframe: false,
			side: THREE.DoubleSide,
			vertexShader: vertexShader,
			fragmentShader: fragmentShader,
		})


		let geometry = new THREE.PlaneGeometry(1.5,1.5,100,100)

		this.plane = new THREE.Mesh(geometry, this.material)

		this.scene.add(this.plane)

	}

	animate() {
    this.plane.rotation.z = this.time.elapsed * this.parameters.rotationSpeed;
  }


	resize() {}

	update() {

		this.material.uniforms.time.value = this.time.elapsed/1000;
		// this.animate();
	}
}
