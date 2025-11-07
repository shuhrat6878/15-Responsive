import { Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"

import malibu from '../assets/malibu.png'
import { Lupa } from "../assets/icon/lupa"

export const Mainlayout = () => {
  return (
    <>

      <Header />
      <main>
        <div className="container relative">
          <img src={malibu} alt="aa" />
          <div className=" w-[350px] h-15 flex border rounded-4xl justify-between items-center  ">
            <input className=" m-5 grow   " type="text" placeholder="Find the car of your dreams" />
            <span className="p-1"><Lupa /></span>
          </div>
        </div>

        <Outlet />
      </main>

      <Footer />
    </>
  )
}