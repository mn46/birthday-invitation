import Counter from "./(components)/Counter";
import Navigation from "./(components)/Navigation";

const Home = () => {
  return (
    <div className="main-content bg-center bg-cover bg-no-repeat">
      <nav>
        <Navigation />
      </nav>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <section id="header">
          <h1>Jane's Birthday</h1>
          <Counter />
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
};

export default Home;
