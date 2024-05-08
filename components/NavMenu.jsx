import Image from "next/image";
import LogoMain from "@/public/4834111_25259461.png";
import Link from "next/link";

const NavMenu = () => {
  return (
    <div className=" hidden lg:flex justify-between items-center container 2xl:px-52 mb-12 ">
      <div className=" relative h-full w-full">
        <Image
          src={LogoMain}
          width={250}
          height={250}
          className=" aspect-square absolute z-40 -left-14 -top-14"
          alt="logo"
        />
      </div>
      <div className=" flex gap-8 items-center justify-end">
        <Link
          href="#"
          className=" uppercase font-semibold text-slate-900 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 "
        >
          home
        </Link>
        <Link
          href="#"
          className=" uppercase font-semibold text-slate-900 dark:text-white hover:text-green-400 dark:hover:text-green-400 "
        >
          about
        </Link>
        <Link
          href="#"
          className=" uppercase font-semibold text-slate-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 "
        >
          portfolio
        </Link>
        <Link
          href="#"
          className=" uppercase font-semibold text-slate-900 dark:text-white hover:text-green-500 dark:hover:text-green-400 "
        >
          clients
        </Link>
        <Link
          href="#"
          className=" uppercase font-semibold text-slate-900 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 "
        >
          blog
        </Link>
        <Link
          href="#"
          className=" uppercase font-semibold text-slate-900 dark:text-white hover:text-indigo-500 dark:hover:text-indigo-400 "
        >
          contact
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
