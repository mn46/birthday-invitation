import Link from "next/link";

const Navigation = () => {
  return (
    <ul className="mx-10 my-6 flex gap-10 justify-end">
      <li className="nav-link">
        <a href="#details">details</a>
      </li>
      <li className="nav-link">
        <a href="#contact">contact</a>
      </li>
      <li className="nav-link">
        <Link href="/wishlist">wishlist</Link>
      </li>
    </ul>
  );
};

export default Navigation;
