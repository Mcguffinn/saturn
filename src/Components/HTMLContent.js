import React from "react";
import { Html } from "@react-three/drei"
import {Section} from "../Components/Section"

const HTMLContent = () =>{

  return(
    <Section factor={1.5} offset={1}>
      <Html fullscreen>
        <h1>Hello There</h1>
      </Html>
    </Section>
  )
}

export default HTMLContent();