import Image from "next/image";
import Hero from "../_landing/Hero";
import Features from "../_landing/Features";
import Guide from "../_landing/Guide";
import Companies from "../_landing/Companies";
import FreeTrial from "../_landing/FreeTrial";
import InTouch from "../_landing/InTouch";
import Dashboard from "../_landing/Dashboard";




export default function Home() {
  
  return (
  <div>
    <Hero/>
    <Dashboard/>
    <Features/>
    <Guide/>
    <Companies/>
    <FreeTrial/>
    <InTouch/>
    
  </div>
 
  );
}
