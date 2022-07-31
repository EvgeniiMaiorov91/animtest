import * as THREE from 'three/src/Three'
import { Canvas} from '@react-three/fiber';
import './App.css';
import Model from './Model';
import { Suspense, useRef, useState } from 'react';
 

function App() {


const curve = new THREE.QuadraticBezierCurve3(
  new THREE.Vector3(0, 0, 3),
  new THREE.Vector3(0, 4, 4),
  new THREE.Vector3(0, 0, 6)
);

const points = curve.getPoints(100);


const [pos,setPos] = useState(0)
const [count,setCount] = useState([0,0,3])
const ref = useRef();

//СНИЗУ ЛОГИКА ПО ВРАЩЕНИЮ КАМЕРЫ ПО ОКРУЖНОСТИ 

// const add = () =>{
//   let arr = [...count];
//  arr[0] += 0.03 * Math.sin(pos);
//  arr[2] += 0.03 * Math.cos(pos);

// setPos(pos + Math.PI / 180 * 2)
 
//  setCount(arr)

// }
// const back = () =>{
//   let arr = [...count];
//  arr[0] -= 0.03 * Math.sin(pos);
//  arr[2] -= 0.03 * Math.cos(pos);

// setPos(pos - Math.PI / 180 * 2)

//  setCount(arr)

// }


 const animationCamera = () => {
  let arr = [...count];
  arr[0] = points[pos].x;
  arr[1] = points[pos].y;
  arr[2] = points[pos].z;
  setCount(arr)
 }



const changeWheel =(e) => {
  let position = e.nativeEvent.wheelDelta;
  //  position > 0 ? add() : back();
  position > 0 ? pos < 100 && setPos(pos + 1) : pos > 0 && setPos(pos - 1);
  animationCamera();
}

  return (
    <Canvas
    ref={ref}
    camera = {
      {
        position: [0,0,3]
      }
    }
    onWheel = {
      (e) => {changeWheel(e)}
    } 
    >
      <ambientLight intensity={0.2}/>
      <pointLight position={[10,10,10]}/>
        <Suspense fallback={null}>
          <Model count={count}/>
        </Suspense>
    </Canvas>
  );
}

export default App;
