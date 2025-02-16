import { useRef, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { DeviceMotion } from "expo-sensors";
import { Subscription } from "expo-sensors/build/DeviceSensor";

// utilizar DeviceMotion do expo com o listener no atributo de { rotation }
// assim a gente consegue ter acesso ao rotation.beta (pitch) que o angulo em que o celular esta
// orientedo. acredito que temos que passar esse valor para graus, deve estar em radianos (chute)

interface MeasureAngles {
  first: number;
  second: number;
}

export default function Index() {
  const [isMeasuring, setIsMeasuring] = useState(false);
  const rotationRef = useRef<Subscription | null>(null);
  const currAngleRef = useRef<number>(0); // store the angle in a ref instead of state to not trigger unecessary re-renders
  const [measures, setMeasures] = useState<Array<number>>([]); // make this an object instead of an array

  const startSensors = () => {
    setIsMeasuring(true);

    DeviceMotion.setUpdateInterval(100);

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
    try {
      const firstAngle = measures[0];
      const secondAngle = measures[1];

      const calculatedAngle = firstAngle - secondAngle;
      const label = calculatedAngle.toFixed(0);
      return label + "";
    } catch {
      return "Error calculating extension angle";
    }
  };

  const onCaptureMeasurement = () => {
    if (measures.length === 1) {
      rotationRef.current?.remove();
      rotationRef.current = null;
    }
    setMeasures([...measures, currAngleRef.current]);
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
      {measures.length < 2 &&
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
              Get {measures.length === 0 ? "first" : "second"} measure
            </Text>
          </TouchableOpacity>
        ))}

      {measures.length === 2 && (
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
          setMeasures([]);
        }}
      >
        <Text>Reset all</Text>
      </TouchableOpacity>
    </View>
  );
}
