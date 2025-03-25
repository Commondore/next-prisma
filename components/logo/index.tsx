import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2 group">
      <Image src="/logo.svg" alt="Logo" width={32} height={32} />
      <span className="text-xl font-bold ">
        <span className="text-primary">R</span>esto
      </span>
    </Link>
  );
};
