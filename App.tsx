import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Canvas } from "@react-three/fiber/native";
import Model from "./components/Model";

function Box() {
  return (
    <mesh rotation={[0.4, 0.2, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Fondo 3D */}
      <Canvas style={StyleSheet.absoluteFillObject}>
        <ambientLight intensity={1} />
        <directionalLight position={[2, 2, 5]} />

        <Box />

        <Model></Model>
      </Canvas>

      {/* UI React Native */}
      <View style={styles.overlay}>
        <Text style={styles.title}>Hola Expo + 3D</Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  overlay: {
    position: "absolute",
    top: 80,
    left: 20,
    right: 20,
    zIndex: 10,
  },

  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },

  button: {
    marginTop: 20,
    backgroundColor: "#ffffff22",
    padding: 15,
    borderRadius: 12,
  },

  buttonText: {
    color: "white",
  },
});