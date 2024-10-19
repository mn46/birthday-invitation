import Counter from "./(components)/Counter";
import DetailedInfoItem from "./(components)/DetailedInfoItem";
import Navigation from "./(components)/Navigation";

const Home = () => {
  return (
    <div className="main-content bg-center bg-cover bg-no-repeat">
      <nav>
        <Navigation />
      </nav>
      <main>
        <section id="header" className="h-screen flex flex-col justify-center">
          <h1 className="text-[10vw] font-italiana text-white text-center">
            Jane's Birthday
          </h1>
          <Counter />
        </section>

        <section id="details" className="bg-white py-20">
          <DetailedInfoItem />
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
};

export default Home;
