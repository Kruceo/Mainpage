import { useEffect } from "react"
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { degToRad } from "three/src/math/MathUtils.js";

export default function () {
    useEffect(() => {

        if (window.innerWidth < 600) return
        

        let [mouseX, mouseY] = [0, 0]
        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.x
            mouseY = e.y
        }
        window.addEventListener('mousemove', onMouseMove)

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1 / 1)

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(800, 800);
        renderer.setAnimationLoop(animate);
        renderer.setClearColor(new THREE.Color(0x000000), 0);

        document.querySelector(".three-object")?.appendChild(renderer.domElement);

        var light = new THREE.DirectionalLight(0xffcc99, 14.5)
        light.position.set(-4, 6, 4)// scene.add()
        scene.add(light);


        const starshipGizmos = new THREE.Mesh()
        const cameraGizmos = new THREE.Mesh()
        const loader = new GLTFLoader();

        let loadedObj: THREE.Group<THREE.Object3DEventMap> | null = null
        let loadedPlanetObj: THREE.Group<THREE.Object3DEventMap> | null = null
        loader.load('/starship.glb', function (gltf) {
            loadedObj = gltf.scene
            loadedObj.add(new THREE.SpotLight(0x00ff99, 2, 0, 0.3))
            loadedObj.position.set(0, 2.4, 0)
            loadedObj.scale.setScalar(0.5)
            starshipGizmos.add(loadedObj)
            scene.add(starshipGizmos)
        }, undefined, function (error) {
            console.error(error);
        });
        loader.load('/planet.glb', function (gltf) {
            loadedPlanetObj = gltf.scene
            const scale = 2.4
            loadedPlanetObj.scale.set(scale, scale, scale)
            loadedPlanetObj.rotateZ(degToRad(-25))
            scene.add(loadedPlanetObj)
        }, undefined, function (error) {
            console.error(error);

        });

        scene.add(cameraGizmos)
        cameraGizmos.add(camera)
        camera.position.set(0, 0, 10)

        const emitter = new ParticleEmitter(scene, 0xff9988)
        emitter.mesh.position.y = 2
        emitter.mesh.position.x = 0
        starshipGizmos.add(emitter.mesh)

        const clouds = new CloudEmitter(scene, 9, 3.4)
        clouds.mesh.rotateZ(degToRad(-25))
        let yChange = 0
        let onSky = false
        const directionChangeInterval = setInterval(() => {
            if (Math.random() > 0.5) {
                yChange = (1 - Math.random() * 2) * 0.02
                onSky = Math.random() > 0.8
                emitter.enabled = !onSky
            }
        }, 2000)

        function animate() {
            if(window.scrollY > window.innerHeight)return;
            if (!loadedObj || !loadedPlanetObj) return

            if (onSky) {
                if (loadedObj.position.y < 3.4)
                    loadedObj.position.y += 0.01
            }
            else if (loadedObj.position.y >= 2.4) {
                loadedObj.position.y -= 0.01
            }

            clouds.mesh.rotateY(0.01)
            cameraGizmos.rotation.y = degToRad(-22.5 + 45 * (mouseX / window.innerWidth))
            cameraGizmos.rotation.x = degToRad(-22.5 + 45 * (mouseY / window.innerHeight))
            starshipGizmos.rotateZ(0.02)
            starshipGizmos.rotateY(yChange)
            loadedPlanetObj.rotateY(0.003)
            renderer.render(scene, camera);

        }

        return () => {
            scene.clear()
            clearInterval(directionChangeInterval)
            renderer.clear()
            renderer.setAnimationLoop(null)
            renderer.domElement.remove()
            window.removeEventListener('mousemove', onMouseMove)
            emitter.clear()
        }
    }, [])

    return <div className="three-object"></div>
}


class ParticleEmitter {
    mesh: THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>;
    lifetime: number;
    frameIndex: number;
    scene: THREE.Scene;
    enabled:boolean;
    spawn: () => void;
    clear: () => void;
    constructor(scene: THREE.Scene, color?: THREE.ColorRepresentation) {
        this.mesh = new THREE.Mesh()
        this.lifetime = 2000
        const fps = 30
        this.frameIndex = 0
        this.scene = scene
        this.enabled = true

        this.spawn = () => {
            if(!this.enabled)return;

            const sphereGeo = new THREE.SphereGeometry(0.1, 5, 5)
            const sphereMat = new THREE.MeshPhongMaterial({ color: color ?? 0xffffff, transparent: true })
            const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat)

            const emitterRealPosition = new THREE.Vector3()
            this.mesh.getWorldPosition(emitterRealPosition)
            sphereMesh.position.set(
                emitterRealPosition.x + Math.random() * 0.2,
                emitterRealPosition.y + Math.random() * 0.2,
                emitterRealPosition.z + Math.random() * 0.2
            )
            sphereMesh.rotation.set(Math.random(), Math.random(), Math.random())
            this.scene.add(sphereMesh)

            const totalFrames = this.lifetime / fps
            const updaterInterval = setInterval(() => {
                let scaleFactor = 5 / totalFrames
                sphereMesh.scale.add(new THREE.Vector3(scaleFactor, scaleFactor, scaleFactor))
                sphereMat.opacity -= 1 / totalFrames
                // sphereMat.color.setRGB(sphereMat.color.r + 0.01, sphereMat.color.r + 0.01, sphereMat.color.r + 0.01)
                this.frameIndex++
            }, 1000 / fps)

            setTimeout(() => {
                this.scene.remove(sphereMesh)
                clearInterval(updaterInterval)
            }, this.lifetime)
        }

        const spawnerInterval = setInterval(this.spawn, 120)

        this.clear = () => { clearInterval(spawnerInterval) }
    }
}

class CloudEmitter {
    mesh: THREE.Mesh<THREE.BufferGeometry<THREE.NormalBufferAttributes>, THREE.Material | THREE.Material[], THREE.Object3DEventMap>;
    scene: THREE.Scene;
    constructor(scene: THREE.Scene, cloudNumber: number, cloudY: number) {
        this.scene = scene
        this.mesh = new THREE.Mesh()
        scene.add(this.mesh)

        for (let i = 0; i < cloudNumber; i++) {
            const cloud = this.genCloud(2 + Math.random() * 5)
            cloud.scale.setScalar(0.25)
            cloud.position.y = cloudY
            const cloudZGizmos = new THREE.Mesh()
            cloudZGizmos.add(cloud)
            cloudZGizmos.rotation.x = degToRad(Math.random() * 360)

            const cloudXGizmos = new THREE.Mesh()
            cloudXGizmos.add(cloudZGizmos)
            cloudXGizmos.rotation.y = degToRad(Math.random() * 360)
            // cloudGizmos.rotation.x = Math.random() * 90
            this.mesh.add(cloudXGizmos)
        }
    }

    genCloud(nodeNumber: number) {
        let nodes: THREE.Mesh[] = []
        let signal = -1
        for (let index = 0; index < nodeNumber; index++) {
            const sphereGeo = new THREE.SphereGeometry(1, 6, 6)
            const sphereMat = new THREE.MeshPhongMaterial({ color: 0xffffff, opacity: 0.85, transparent: true })
            const sphereMesh = new THREE.Mesh(sphereGeo, sphereMat)

            const last = nodes.sort((a, b) => a.position.x - b.position.x).at(signal > 0 ? (nodes.length - 1) : 0)

            if (last) {
                sphereMesh.position.x = last.position.x + last.scale.x * signal
                sphereMesh.position.y = last.position.y - last.scale.x / 3.5
                sphereMesh.position.z = 0.6 - Math.random() * 1.2
                sphereMesh.scale.setScalar(last.scale.x / 1.2)
            }
            nodes.push(sphereMesh)
            signal *= -1
        }

        let mother = new THREE.Mesh()
        mother.add(...nodes)
        return mother
    }
} 