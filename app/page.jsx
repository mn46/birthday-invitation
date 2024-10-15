import Image from "next/image";
import Navigation from "./(components)/Navigation";

const Home = () => {
  return (
    <div>
      <nav>
        <Navigation />
      </nav>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"></main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
};

export default Home;
