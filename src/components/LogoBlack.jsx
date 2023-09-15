import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

const Logo = ({ className, props }) => {
  return (
    <Link href="/" className="flex space-x-2">
      <Image
        alt="header text"
        src="/GRADIENTEa0-forma-texto-negro.svg"
        className="object-cover "
        width={140}
        height={140}
      />
    </Link>
  );
};

export default Logo;
