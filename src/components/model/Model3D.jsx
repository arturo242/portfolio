import React, { useRef, useEffect, forwardRef} from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Color, MeshStandardMaterial } from 'three';
import diamond from '../../assets/models/art_sphere.glb';
const Model = forwardRef((props, ref) => {
  const gltf = useLoader(GLTFLoader, diamond);
  const { scene, camera } = useThree();
  scene.scale.x = 3
  scene.scale.y = 3
  scene.scale.z = 3
  scene.rotation.z = 90
  camera.position.x = 0
  useEffect(() => {
    gltf.scene.traverse((child) => {
      if (child.isMesh) {
        // Opción 1: Crear un nuevo material y asignarlo
        const material = new MeshStandardMaterial({
          color: new Color('#3eeedc'), // Color del material
          metalness: 1.0, // 0 = no metálico, 1 = completamente metálico
          roughness: 0.3, // 0 = superficie completamente lisa, 1 = superficie muy rugosa
          // Para un efecto más realista, podrías considerar añadir un mapa de entorno para reflejos
        });
        child.material = material;
      }
    });

    // Actualiza el modelo en la escena (opcional, dependiendo de cómo esté estructurada tu aplicación)
    scene.add(gltf.scene);
  }, [gltf, scene]);
 

  return <primitive object={gltf.scene} ref={ref} />;
});

export const Model3D = forwardRef((props, ref) => {
  const scrollRef = useRef();
  useEffect(() => {
    const handleRotation = () => {
      const rotation = window.scrollY * 0.005; // Ajusta este valor según sea necesario
      if (scrollRef.current) {
        scrollRef.current.rotation.y = rotation ;
        scrollRef.current.rotation.x = rotation * 0.5;
      }
    };

    window.addEventListener('scroll', handleRotation);
    return () => {
      window.removeEventListener('scroll', handleRotation)
    };
  }, []);

  return (
    <Canvas>
      <spotLight position={[0, 400, 0]} angle={Math.PI/4} intensity={.3}/>
      <spotLight position={[0, -10, 100]} angle={Math.PI/4} intensity={.1} />
      <Model ref={scrollRef} />
    </Canvas>
  );
});
