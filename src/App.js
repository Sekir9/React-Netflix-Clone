import { FaqsContainer } from "./containers/faqs";
import { FooterContainer } from "./containers/footer";
import { JumbotronContainer } from "./containers/jumbotron";
import react from "react";

export default function App() {
  return (
    <>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer /> 
    </>
  );
}
