import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const Logo = ({ className, props }) => {
  return (
    <Link href="/" className="flex space-x-2">
      <Image
        alt="header text"
        src="/logo.svg"
        className="object-cover"
        width={30}
        height={30}
      />
    </Link>
  );
};

export default Logo;
