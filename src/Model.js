import { useRef} from "react";
import { useFrame, useThree } from "@react-three/fiber";
import {
    useFBX
} from '@react-three/drei';

const Model = ({count}) => {
    const {
        camera
    } = useThree();
    const fbx = useFBX('/Earth (2).fbx');
    const ref = useRef();
    useFrame((state, delta) => (ref.current.rotation.z += 0.01))
    camera.position.set(...count)
    return  <primitive object={fbx} ref={ref} position={[0,0,0]}
   ></primitive>
}
export default Model;