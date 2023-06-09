import React, {useState, useEffect, useRef} from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const Navbar = () => {

  {/* Set intial state of hamburger menu to false */}
  const [nav, setNav] = useState(false)
  

  {/* Hamburger menu enable and disable */}
  const handleNav = () => {
    setNav(!nav)
  }

  let menuRef = useRef();

  useEffect(()=> {
    document.addEventListener("mousedown", (event) => {
      if (!menuRef.current.contains(event.target)) {
        setNav(false);
      }
    })
  })

  let Links =[
    {name:"About", link:"/about"},
    {name:"Services", link:"/services"},
    {name:"Contact Us", link:"/contact"}
  ];
  return (
    <>
        <div className="max-w-[1240px] mx-auto h-16 flex justify-between items-center font-poppins text-night bg-white">
            <h1 className="text-xl ml-4 pl-4 tracking-wider">
              CRYSTAL CLEAR SERVICES
            </h1>
          <ul className="hidden md:flex list-none gap-10 text-l p-6">
            {
              Links.map((Link)=>(
                <li key={Link.link}>
                  <a href={Link.link}>
                    <h1 className="hover:text-polyblue tracking-wide">
                      {Link.name}
                    </h1>
                  </a>
                </li>
              ))
            }
          </ul>
          <div onClick={handleNav} className="block md:hidden mr-6">
              {nav ? <AiOutlineClose size={30} className="right-6 hover:cursor-pointer"/> : <AiOutlineMenu size={30} className="right-6 hover:cursor-pointer"/>}
          </div>
          
          <div ref={menuRef} className={nav ? "fixed z-5 left-0 top-0 right-0 w-[60%] h-full border-r border-r-gray-90 bg-white ease-in-out duration-500 md:hidden z-10 drop-shadow-xl" : "fixed left-[-150%]"}>
            <h1 className="m-4 text-xl text-night">
              CRYSTAL CLEAR SERVICES
            </h1>
            <ul className="p-4 bg-white">
              {
                Links.map((Link)=>(
                  <li key={Link.link}>
                    <a href={Link.link}>
                      <h1 className="hover:text-polyblue p-4 border-b border-gray-600 tracking-wide">
                        {Link.name}
                      </h1>
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
    </>
  )
}

export default Navbar