
import Experience from '../Experience.ts'

// utils
import Resources from '../utils/Resources.ts'

// scenes
import Environment from './Environment.ts'
import Plane from './Plane.ts'
export default class World {
	experience: Experience
	scene: THREE.Scene
	resources: Resources
	environment: Environment
	plane: Plane
	
	constructor() {
		this.experience = new Experience()
		this.scene = this.experience.scene
		this.resources = this.experience.resources

		this.resources.on('ready', () => {
			this.environment = new Environment()
			this.plane = new Plane()
		})
	}

	resize() {
		if (this.environment) {
			this.environment.resize()
		}
		if (this.plane) {
			this.plane.resize()
		}

	}

	update() {
		if (this.environment) {
			this.environment.update()
		}
		if (this.plane) {
			this.plane.update()
		}

	}
}
