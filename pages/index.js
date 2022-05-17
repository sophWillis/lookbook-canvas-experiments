import Head from "next/head";
import CanvasAnimated from "../components/canvas-animated";
export default function Home() {
  return (
    <>
      <Head>
        <title>Canvas Experiments</title>
      </Head>
      <h1>Canvas Experiments</h1>
      <CanvasAnimated />
    </>
  );
}
