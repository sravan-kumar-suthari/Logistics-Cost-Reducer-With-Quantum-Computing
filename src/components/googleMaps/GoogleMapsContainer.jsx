import { useLoadScript } from "@react-google-maps/api";
import Map from "./Map";

export default function GoogleMapsContainer() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBbuWteIelsDEt9ene34MdyLUxbZ6eiB4w',
    libraries: ["places"],
  });

  if (!isLoaded) return <div>Loading...</div>;
  return <Map />;
}
