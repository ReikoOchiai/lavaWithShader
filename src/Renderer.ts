import * as THREE from 'three'

// src
import Experience from './Experience.ts'
import Camera from './Camera.ts'

// utils
import Sizes from './utils/Sizes.ts'
import Time from './utils/Time.ts'

export default class Renderer {
	experience: Experience
	sizes: Sizes
	scene: THREE.Scene
	canvas: HTMLElement | null
	camera: Camera
	renderer: THREE.WebGLRenderer
	time: Time

	constructor() {
		this.experience = new Experience()
		this.sizes = this.experience.sizes
		this.scene = this.experience.scene
		this.canvas = this.experience.canvas
		this.camera = this.experience.camera
		this.time = new Time()

		this.setRenderer()
	}

	setRenderer() {
		if(!this?.canvas){
			return
		}
		this.renderer = new THREE.WebGLRenderer({
			canvas: this.canvas,
			antialias: true,
			alpha: true,
		})


		this.renderer.outputColorSpace = THREE.SRGBColorSpace
		this.renderer.toneMapping = THREE.CineonToneMapping
		this.renderer.toneMappingExposure = 1.75
		this.renderer.shadowMap.enabled = true
		this.renderer.shadowMap.type = THREE.PCFSoftShadowMap
		this.renderer.setSize(this.sizes.width, this.sizes.height)
		this.renderer.setPixelRatio(this.sizes.pixelRatio)
		this.renderer.setClearColor(0xffffff)

		// Continue the animation loop
		requestAnimationFrame(this.setRenderer);

	}
	

	resize() {
		this.renderer.setSize(this.sizes.width, this.sizes.height)
		this.renderer.setPixelRatio(this.sizes.pixelRatio)
	}

	update() {
		
		this.renderer.render(this.scene, this.camera.perspectiveCamera)
	}
}
