import { Odamcha } from "../assets/icon/odamcha"

export const Product = ({id,title,name,img,text1,text2,text3,text4}) => {
  return (
    <div className="bg-[#f5f5f5] rounded-lg ">
        <h1 className="text-[20px] mt-6 ml-5 pt-6" >{name}</h1>
        <p className="text-[14px] text-[#555] mt-2 ml-5 pb-5">{title}</p>
        <img src={img} alt={name} />
        <div className="grid  grid-rows-2 grid-cols-2 mt-2.5 mx-5 text-[16px] ">
            <p className="flex mb-6 "><span className="mr-3"><Odamcha/></span>{text1}</p>
            <p className="flex"><span className="mr-3"><Odamcha/></span>{text2}</p>
            <p className="flex "><span className="mr-3"><Odamcha/></span>{text3}</p>
            <p className="flex"><span className="mr-3"><Odamcha/></span>{text4}</p>
        </div>
    </div>
  )
}