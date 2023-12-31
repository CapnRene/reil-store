import Link from "next/link";

import Container from "@/components/ui/container";
import MainNav from "@/components/main-nav";
import NavbarActions from "./navbar-actions";
import getCategories from "@/actions/get-categories";
import Image from "next/image";

const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b py-4">
      <Container>
        <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
          <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
            <Image
              src="https://res.cloudinary.com/dewvrpoqt/image/upload/v1693567592/REIL-logo-trans_ljl746.png"
              width={75}
              height={75}
              alt="logo"
            />
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
