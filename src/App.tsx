import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import type { Mesh } from 'three'

function RotatingCow() {
  const group = useRef<Mesh>(null)
  const { scene } = useGLTF('Cow.glb')
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.01
    }
  })
  return <primitive ref={group} object={scene} scale={0.3} position={[0, -0.5, 0]} />
}

const App: React.FC = () => {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#222' }}>
      <Canvas orthographic camera={{ zoom: 80, position: [2, 2, 4] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <RotatingCow />
      </Canvas>
    </div>
  )
}

export default App
