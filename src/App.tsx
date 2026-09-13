import { Suspense, useState } from "react";
import Hero from "./Component/Hero";
import Nav from "./Component/Nav";
import Technology from "./Component/Technology/Technology";
import type { ITechnologyType } from "./Type/TechnologyType";
import Footer from "./Component/Footer";

const TechnologyFetch = async (): Promise<ITechnologyType[]> => {
  const res = await fetch("/public/Data.json");
  const data = await res.json();
  return data;
};
function App() {
  const [technologyPromise] = useState(() => TechnologyFetch());
  return (
    <>
      <Nav></Nav>
      <Hero></Hero>
      <Suspense fallback={<h2>Loading....</h2>}>
        <Technology technologyPromise={technologyPromise}></Technology>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
