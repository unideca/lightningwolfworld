import { FC, useRef } from "react";
import Header from "./components/Header";
import TokenEx from "./components/TokenEx";
import TokenEx2 from "./components/TokenEx2";
import TokenUtility from "./components/TokenUtility";
import TokenAllocation from "./components/TokenAllocation";
import Footer from "./components/Footer";
import TokenRoadMap from "./components/TokenRoadMap";

const App:FC = () => {

  const tokenExRef = useRef<HTMLDivElement>(null);

  return (
    <>
    <Header tokenExRef={tokenExRef}/>
    <div ref={tokenExRef}>
    <TokenEx/>
    </div>
    <TokenEx2/>
    <TokenUtility/>
    <TokenAllocation/>
    <TokenRoadMap/>
    <Footer/>
    </>
  )
}

export default App;