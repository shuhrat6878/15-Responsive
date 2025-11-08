import {  Outlet } from "react-router-dom"
import { Header } from "./Header"
import { Footer } from "./Footer"
import malibu from '../assets/malibu.png'
import { Lupa } from "../assets/icon/lupa"
import { data1 } from "../data/data.js"
import { Product } from "../components/Product.jsx"

export const Mainlayout = () => {
  return (
    <>

      <Header />
      <main className="container">
        <section className=" ">
          <img className="w-[1200px] h-[500px]" src={malibu} alt="aa" />
          <div className=" w-[350px] h-15 flex border rounded-4xl justify-between items-center mx-auto ">
            <input className=" m-5 grow   " type="text" placeholder="Find the car of your dreams" />
            <span className="p-1"><Lupa /></span>
          </div>
        </section>

        <section>
          <div className="mb-1.5  mt-15 desktop:mt-[133px] ">
            <h2 className="text-[36px] font-bold mb-2.5 mx-auto text-center">Choose the  car of your dreams</h2>
            <p className="text -[16px] text-[#555] text-center">We provide our customers with the most incredible driving emotions. That is why there are only world-class cars in our fleet</p>
          </div>
          <div>
            <div className="flex items-center justify-between gap-3.5 text-[14px] mt-8 mb-4 tablet:mx-[159px] desktop:justify-center">
              <button className="bg-[#299764] rounded-3xl px-5 py-3.5">Compact</button>
              <button className="rounded-3xl border border-gray-400 px-5 py-3.5">Sports cars</button>
              <button className="rounded-3xl border border-gray-400 px-5 py-3.5">Vans </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> 
              {
                data1.map((e)=>(
                  <Product key={e.id} {...e}  />
                ))
              }
              
        </section>
        <section>
          <div className=" text-white mt-8 mx-23 flex justify-center tablet:justify-center">
                <button className="bg-[#299764] py-[18px] px-[30px] rounded-4xl ">View all cars</button>
              </div>
        </section>

        <Outlet />
      </main>

      <Footer />
    </>
  )
}