import Link from "next/link";

const Navigation = () => {
  return (
    <ul>
      <li>
        <a href="#details">details</a>
      </li>
      <li>
        <a href="#contact">contact</a>
      </li>
      <li>
        <Link href="/wishlist">wishlist</Link>
      </li>
    </ul>
  );
};

export default Navigation;
