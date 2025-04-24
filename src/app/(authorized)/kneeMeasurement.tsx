import { useEffect, useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { DeviceMotion } from "expo-sensors";
import { Subscription } from "expo-sensors/build/DeviceSensor";
import { colors } from "../../../constants/colors";
import { useSession } from "../../../hooks/useSession";

// utilizar DeviceMotion do expo com o listener no atributo de { rotation }
// assim a gente consegue ter acesso ao rotation.beta (pitch) que o angulo em que o celular esta
// orientado. acredito que temos que passar esse valor para graus, deve estar em radianos

interface MeasureAngles {
  first: number | null;
  second: number | null;
}

export default function HomeScreen() {
  const [isMeasuring, setIsMeasuring] = useState(false);
  const rotationRef = useRef<Subscription | null>(null);
  const currAngleRef = useRef<number>(0); // store the angle in a ref instead of state to not trigger unecessary re-renders
  const [measures, setMeasures] = useState<MeasureAngles>({
    first: null,
    second: null,
  });
  const { signOut } = useSession();

  useEffect(() => {
    return () => {
      rotationRef.current?.remove();
    };
  }, []);

  const startSensors = () => {
    setIsMeasuring(true);

    DeviceMotion.setUpdateInterval(200);

    rotationRef.current = DeviceMotion.addListener((event) => {
      if (!event.accelerationIncludingGravity) return;

      const { x, y, z } = event.accelerationIncludingGravity;

      // Use `y` instead of `x` for better pitch calculation
      let pitch = Math.atan2(-y, z) * (180 / Math.PI);

      // Convert to a 0-360 range for full measurement
      if (pitch < 0) {
        pitch += 360;
      }

      currAngleRef.current = pitch;
    });
  };

  const calculateExtensionLabel = () => {
    if (measures.first === null || measures.second === null) return "N/A";
    return `${(measures.first - measures.second).toFixed(0)}`;
  };

  const onCaptureMeasurement = () => {
    setMeasures((prev) => {
      const newMeasures =
        prev.first === null
          ? { ...prev, first: currAngleRef.current }
          : { ...prev, second: currAngleRef.current };

      if (newMeasures.second !== null) {
        rotationRef.current?.remove();
        rotationRef.current = null;
      }

      return newMeasures;
    });
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 100,
      }}
    >
      {measures.second != null &&
        (!isMeasuring ? (
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              borderRadius: 10,
              padding: 10,
              width: 300,
              height: 100,
            }}
            onPress={startSensors}
          >
            <Text>Measure</Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: "green",
              borderRadius: 10,
              padding: 10,
              width: 300,
              height: 100,
            }}
            onPress={onCaptureMeasurement}
          >
            <Text>
              Get {measures.first === null ? "first" : "second"} measure
            </Text>
          </TouchableOpacity>
        ))}
      <View style={{ width: "100%", padding: 16 }}>
        <Text>Write in here</Text>
        <View
          style={{ borderColor: "black", width: "100%", borderWidth: 1 }}
        ></View>
      </View>

      {measures.second !== null && (
        <View>
          <Text>Finished capturing angles</Text>
          <Text>Your extension is at</Text>
          <Text>{calculateExtensionLabel()}</Text>
        </View>
      )}
      <TouchableOpacity
        style={{
          backgroundColor: "red",
          borderRadius: 10,
          padding: 10,
          width: 300,
          height: 100,
        }}
        onPress={() => {
          setIsMeasuring(false);
          setMeasures({ first: null, second: null });
        }}
      >
        <Text>Reset all</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          signOut();
        }}
        style={{
          backgroundColor: colors.primary,
          borderRadius: 10,
          padding: 10,
          width: 200,
          height: 60,
        }}
      >
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}
