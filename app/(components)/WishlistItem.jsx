const WishlistItem = ({ giftName, reserved, img }) => {
  return (
    <div
      className={`flex flex-col items-center gap-5 min-w-max pb-5 rounded-xl border-2 ${
        reserved ? "border-inactive" : "border-primary"
      }`}
    >
      <img src={img} alt={giftName} className="rounded-t-xl" />
      <h4 className="text-xl font-instrument-sans">{giftName}</h4>
      <button
        className={`font-instrument-sans font-semibold rounded-full px-6 py-2 text-white ${
          reserved ? "bg-inactive" : "bg-primary"
        }`}
      >
        {reserved ? "reserved" : "reserve"}
      </button>
    </div>
  );
};

export default WishlistItem;
