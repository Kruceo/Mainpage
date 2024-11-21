import { useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { degToRad } from 'three/src/math/MathUtils.js';
import Object3DViewer from './homepage/Object3DViewer';

export default function () {

    return <>
        <div style={{ border: "1px solid red" }}>
            <ObjectViewer url='/untitled.glb'></ObjectViewer>
            <ObjectViewer url='/planet.glb'></ObjectViewer>
            <Object3DViewer />
        </div>
    </>
}


function ObjectViewer(props: { url: string }) {
    const [id] = useState("three-" + Math.round(Math.random() * 255).toString(16))

    useEffect(() => {
        let [mouseX, mouseY] = [0, 0]
        let buttonClicked = false
        const onMouseMove = (e: MouseEvent) => {
            mouseX = e.x
            mouseY = e.y
        }
        const onButtonDown = (e: MouseEvent) => {
          buttonClicked = true
        }
        const onButtonUp = (e: MouseEvent) => {
            buttonClicked = false
        }
        const el = document.querySelector("#" + id) as HTMLDivElement
        el.addEventListener('mousemove', onMouseMove)
        el.addEventListener('mousedown', onButtonDown)
        el.addEventListener('mouseup', onButtonUp)
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(25, 1 / 1)

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(600, 600);
        renderer.setAnimationLoop(animate);
        renderer.setClearColor(new THREE.Color(0x000000), 0);

        document.querySelector("#" + id)?.appendChild(renderer.domElement);

        // scene.add()

        var light = new THREE.PointLight(0xffffff, 24.5)
        light.position.set(-2, 2, 2)
        scene.add(light);

        var light = new THREE.PointLight(0xffffff, 24.5)
        light.position.set(2, 2, 2)
        scene.add(light);

        var light = new THREE.PointLight(0xffffff, 44.5)
        light.position.set(-2, 2, -2)
        scene.add(light);

        var light = new THREE.PointLight(0xffffff, 44.5)
        light.position.set(2, 2, -2)
        scene.add(light);

        var light = new THREE.PointLight(0xffffff, 1.5)
        light.position.set(0, -2,0)
        scene.add(light);

        // var light2 = new THREE.SpotLight(0xff2222, 50);
        // light2.position.set(5, 5, 5)
        // scene.add(light2);

        const cameraGizmos = new THREE.Mesh()
        const loader = new GLTFLoader();

        let loadedObj: THREE.Group<THREE.Object3DEventMap> | null = null

        loader.load(props.url, function (gltf) {
            loadedObj = gltf.scene
            scene.add(loadedObj)
        }, undefined, function (error) {
            console.error(error);
        });

        scene.add(cameraGizmos)
        cameraGizmos.add(camera)
        camera.position.set(0, 0, 10)
        let frameIndex = 0

        let yChange = 0

        const directionChangeInterval = setInterval(() => {
            if (Math.random() > 0.5)
                yChange = (1 - Math.random() * 2) * 0.02
        }, 2000)

        function animate() {

            if (!loadedObj) return
            if(buttonClicked){
            cameraGizmos.rotation.y = -degToRad(-180 + 360 * (mouseX / el.clientWidth))
            cameraGizmos.rotation.x = -degToRad(-180 + 360 * (mouseY / el.clientHeight))
            }
            frameIndex++
            renderer.render(scene, camera);

        }

        return () => {
            scene.clear()
            clearInterval(directionChangeInterval)
            renderer.clear()
            renderer.setAnimationLoop(null)
            renderer.domElement.remove()
            el.removeEventListener('mousemove', onMouseMove)
            el.removeEventListener('mousedown', onButtonDown)
            el.removeEventListener('mouseup', onButtonUp)
        }
    }, [])

    return <div id={id} className="three"></div>

}