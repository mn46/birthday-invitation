export const revalidate = 0;

import Counter from "./(components)/Counter";
import DetailedInfoItem from "./(components)/DetailedInfoItem";
import Navigation from "./(components)/Navigation";
import WishlistItem from "./(components)/WishlistItem";
import { supabase } from "@/utils/supabase";

const Home = async () => {
  const details = [
    { title: "Day & Time", content: "16/11/2024 16:00" },
    { title: "Address", content: "24 Sunflower st., 1234 Flowertown" },
    { title: "Dresscode", content: "Casual and comfy" },
  ];

  const { data: wishlistData, error } = await supabase
    .from("wishlist")
    .select();

  return (
    <div className="main-content bg-center bg-cover bg-no-repeat">
      <nav>
        <Navigation />
      </nav>
      <main>
        <section id="header" className="h-screen flex flex-col justify-center">
          <h1 className="text-[13vw] md:text-[10vw] font-italiana text-white text-center">
            Jane&apos;s Birthday
          </h1>
          <Counter />
        </section>

        <section id="details" className="bg-white py-20 px-10 md:px-36">
          <h2 className="text-center mb-20">Details</h2>
          <div className="flex flex-col lg:flex-row gap-10 mb-20">
            {details.map((detail) => (
              <DetailedInfoItem
                key={detail.title}
                title={detail.title}
                content={detail.content}
              />
            ))}
          </div>
        </section>

        <section
          id="plan"
          className="bg-primary py-20 px-10 md:px-36 flex flex-col items-center"
        >
          <h2 className="text-center mb-20">Plan of the day</h2>
          <ul>
            <li className="plan-list-item">16:00 - the guests arrive</li>
            <li className="plan-list-item">16:15 - coffee and snacks</li>
            <li className="plan-list-item">
              16:45 - the birthday cake and a song
            </li>
            <li className="plan-list-item">17:15 - games and fun activities</li>
            <li className="plan-list-item">18:00 - dinner</li>
            <li className="plan-list-item">19:00 - games, drinks and snacks</li>
          </ul>
        </section>

        <section id="contact" className="py-20 px-10 md:px-36">
          <h2 className="text-center mb-10">
            Let me know if you&apos;re joining!
          </h2>
          <p className="text-center">
            Call or send a text to +45 12 34 56 78 until 01/12/2024
          </p>
        </section>

        <section id="wishlist" className="bg-white py-20 px-10 md:px-36">
          <h2 className="text-center mb-10">Wishlist</h2>
          <div className="flex flex-wrap gap-10 justify-center">
            {wishlistData?.map((item) => (
              <WishlistItem
                key={item.id}
                id={item.id}
                giftName={item.gift_name}
                reserved={item.reserved}
                img={item.img}
              />
            ))}
            {error && (
              <p>
                Something went wrong. Try refreshing the page or check it later.
              </p>
            )}
          </div>
        </section>
      </main>
      <footer className="h-20"></footer>
    </div>
  );
};

export default Home;
