import smartHub from "./components/Images/smart-hub.jpg";
import wirelessCamera from "./components/Images/addition-wireless-camera.jpg";
import smokeSensor from "./components/Images/smoke-sensor.jpg";
import motionSensor from "./components/Images/outdoor-motion-sensor.jpg";
import waterLeakSensor from "./components/Images/aeotec-senzor-za-vodu-pakiranje.jpg";

const data = {
  products: [
    {
      id: "1",
      name: "Smart Hub",
      price: 49.99,
      image: smartHub,
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, inventore.",
    },
    {
      id: "2",
      name: "Wireless Camera",
      price: 99.99,
      image: wirelessCamera,
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, inventore.",
    },
    {
      id: "3",
      name: "Smoke Sensor",
      price: 19.99,
      image: smokeSensor,
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, inventore.",
    },
    {
      id: "4",
      name: "Outdoor Motion Sensor",
      price: 24.99,
      image: motionSensor,
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, inventore.",
    },
    {
      id: "5",
      name: "Water Leak Sensor",
      price: 14.99,
      image: waterLeakSensor,
      p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, inventore.",
    },
  ],
};
export default data;
