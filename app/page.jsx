import Counter from "./(components)/Counter";
import DetailedInfoItem from "./(components)/DetailedInfoItem";
import Navigation from "./(components)/Navigation";

const Home = () => {
  const details = [
    { title: "Day & Time", content: "16/11/2024 16:00" },
    { title: "Address", content: "24 Sunflower st., 1234 Flowertown" },
    { title: "Dresscode", content: "Casual and comfy" },
  ];

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

        <section id="details" className="bg-white py-20 px-36 flex gap-10">
          {details.map((detail) => (
            <DetailedInfoItem
              key={detail.title}
              title={detail.title}
              content={detail.content}
            />
          ))}
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
};

export default Home;
