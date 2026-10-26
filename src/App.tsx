import { Suspense, useState } from "react";
import Hero from "./Component/Hero";
import Nav from "./Component/Nav";
import Technology from "./Component/Technology/Technology";
import type { ITechnologyType } from "./Type/TechnologyType";
import Footer from "./Component/Footer";

const TechnologyFetch = async (): Promise<ITechnologyType[]> => {
  const res = await fetch("/Data.json");
  const data = await res.json();
  return data;
};

function App() {
  const [technologyPromise] = useState(() => TechnologyFetch());
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main className="flex-1">
        <Hero />
        <Suspense
          fallback={
            <div className="flex min-h-[40vh] items-center justify-center">
              <span className="loading loading-spinner loading-lg text-pink-500" />
            </div>
          }
        >
          <Technology technologyPromise={technologyPromise} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;
