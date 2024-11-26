import Image from "next/image";
import System from "./ui/system";



export default function Home() {
  return (
    <div>
      <div className="flex justify-center">
        <h1 className="font-bold font-serif text-2xl">Solar System</h1>
      </div>
      <br></br>

      <System />
    </div>
  );
}
