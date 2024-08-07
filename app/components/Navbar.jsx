import Link from "next/link";
import Image from "next/image";
import Logo from "./logo.svg";
import Cart from "./icon-cart.svg";
import UserImg from "./image-avatar.png";

import ItemsCount from "./ItemsCount";

export default function Navbar() {
  return (
    <nav>
      <div className="flex items-center justify-between flex-wrap">
        <div className="flex mr-auto">
          <Link href="/">
            <Image
              className="mr-5"
              src={Logo}
              alt="Sneakers"
              width={150}
              height={100}
            />
          </Link>
          <div className="hidden mx-5 lg:flex">
            <Link className="mx-2" href="/products">
              Collections
            </Link>
            <Link className="mx-2" href="/products">
              Men
            </Link>
            <Link className="mx-2" href="/products">
              Women
            </Link>
            <Link className="mx-2" href="/">
              About
            </Link>
            <Link className="mx-2" href="/">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex">
          <Link href="/checkout" className="flex flex-col justify-center px-10">
            <Image src={Cart} alt="Sneakers" width={30} height={10} />
            <ItemsCount />
          </Link>
          <Image className="mr-5" src={UserImg} alt="Sneakers" width={50} />
        </div>
        <div class="block lg:hidden">
          <button class="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-white">
            <svg
              class="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
