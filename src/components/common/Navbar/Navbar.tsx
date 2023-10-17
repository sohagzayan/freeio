"use client";
import Logo from "@/assets/images/header-logo-dark.svg";
import NavSubMenu from '@/components/Home/Navbar/NavSubMenu';
import Profile from "@/components/Profile/Profile";
import ButtonPrimary from "@/components/common/Button/ButtonPrimary";
import { makeTrueIsOpen } from "@/redux/features/mobileSideBarSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { nav_menu } from '@/utility/menu';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';



const Navbar = () => {
  const { data: session } = useSession();
  const isOpen = useAppSelector((state) => state.mobileSideBarSlice.isOpen);
  const dispatch = useAppDispatch();

  const handleButton = () => {

  }


  return (
    <div className='bg-skin-white_shade '>
      <div className='container mx-auto px-4 md:px-10 py-4 font-primary '>
        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-5'>
            <Link href="/">
              <Image src={Logo} width="0" height="0" sizes="100vw" className="w-[100%] h-auto" alt='logos' />
            </Link>
            <div className="lg:block hidden">
              <div className='flex items-center gap-5 '>
                {nav_menu.map((m, i) => {
                  if (m.subMenu) {
                    return <NavSubMenu key={i + m.name} menu={m} />
                  } else {
                    return <Link key={i + m.name} href="/" ><h3 className='font-[500]'>{m.name}</h3></Link>
                  }
                }
                )}
              </div>
            </div>
          </div>
          <div className="lg:block hidden">
            <div className="flex items-center gap-4">
              <button className="hover:text-skin-green_shade transition-all duration-100 ease">Become a Seller</button>
              {!session && <Link href="/account/register">
                <ButtonPrimary handleButton={handleButton} classList="bg-transparent border border-dark_gray_shade text-skin-dark_gray_shade hover:text-skin-white_shade hover:border-green_shade">Sign in</ButtonPrimary>
              </Link>}
              {!session && <Link href="/account/login">
                <ButtonPrimary handleButton={handleButton} classList="bg-skin-dark_gray_shade border border-dark_gray_shade text-skin-white_shade hover:text-skin-white_shade hover:border-green_shade">Log In</ButtonPrimary>
              </Link>}
              {session && <Profile />}
            </div>
          </div>
          <div className="lg:hidden block ">
            <div className="flex items-center justify-end  gap-5">
              <button className="font-primary font-[500] text-skin-dark_gray_shade hover:text-skin-green_shade">join</button>
              <button
                onClick={() => {
                  dispatch(makeTrueIsOpen())
                }}
                className="font-primary font-[500] text-skin-dark_gray_shade"><i className="ri-menu-3-fill text-2xl"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar