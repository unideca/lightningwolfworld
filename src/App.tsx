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
  const tokenAdRef = useRef<HTMLDivElement>(null);
  const tokenUtilRef = useRef<HTMLDivElement>(null);
  const tokenRoadmapRef = useRef<HTMLDivElement>(null);

  return (
    <>
    <Header tokenExRef={tokenExRef} tokenUtilRef={tokenUtilRef} tokenRoadmapRef={tokenRoadmapRef} tokenAdRef={tokenAdRef}/>
    <div ref={tokenExRef}>
    <TokenEx/>
    </div>
    <div ref={tokenAdRef}>
    <TokenEx2/>
    </div>
    <div ref={tokenUtilRef}>
    <TokenUtility/>
    </div>
    <TokenAllocation/>
    <div ref={tokenRoadmapRef}>
    <TokenRoadMap/>
    </div>
    <Footer/>
    </>
  )
}

export default App;