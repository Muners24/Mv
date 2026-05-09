import { useGLTF } from "@react-three/drei/native";
import { Asset } from "expo-asset";
import { GLTF } from "three-stdlib";

const modelUri = Asset.fromModule(require("../assets/model.glb")).uri;

export default function Model() {
  const gltf = useGLTF(modelUri) as GLTF;

  return <primitive object={gltf.scene} />;
}