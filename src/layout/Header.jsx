import { Buttom } from "../assets/icon/buttom"
import { Menyu } from "../assets/icon/menyu"
import { Oy } from "../assets/icon/oy"
import { Strelka } from "../assets/icon/strelka"
import logo from "../assets/logo/logo.svg"

export const Header = () => {
  return (
    <header className="border border-gray-200">
      <div className="container flex items-center justify-between py-5 pl-4 pr-5 ">
        <img className="" src={logo} alt="aaa" />
        <div className="block desktop:hidden">
          <Menyu />
        </div>
        <div className=" hidden desktop:flex items-center justify-between w-full ml-5">
          <div className=" flex  gap-x-8 grow">
            <p>Categories</p>
            <p className="flex  items-center gap-3">About Us <span><Strelka/></span></p>
            <p className="flex  items-center gap-3">Help center <span><Strelka/></span></p>
          </div>
          <div className="flex items-center gap-x-4">
            <h2 className="mr-2">+1 855 420 0000</h2>
            <span className="bg-gray-100 rounded-full p-4 "><Oy /></span>
            <Buttom />
          </div>
        </div>
      </div>
    </header>
  )
}