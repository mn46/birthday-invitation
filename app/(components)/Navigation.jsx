import Link from "next/link";

const Navigation = () => {
  return (
    <ul className="mx-10 mb-6 pt-6 flex gap-10 justify-end text-text font-instrument-sans">
      <li className="nav-link">
        <a href="#details">details</a>
      </li>
      <li className="nav-link">
        <a href="#plan">plan</a>
      </li>
      <li className="nav-link">
        <a href="#contact">contact</a>
      </li>
      <li className="nav-link">
        <a href="#wishlist">wishlist</a>
      </li>
    </ul>
  );
};

export default Navigation;
