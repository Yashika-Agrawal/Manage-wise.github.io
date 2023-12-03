import logo from "../images/logo.jpeg";

export function Header() {
  return (
    <div className="flex flex-row h-20  py-2 items-center border-2 border-b-gray-200 bg-customColor">
      <img src={logo} alt="logo" className="h-full"></img>
      <div className=" flex flex-row  space-x-5 ml-auto mr-20">
        <div className="text-lg">
          <h1 className="hover:text-purple-500">Features</h1>
        </div>
        <div className=" text-gray-300 font-extrabold">・</div>
        <div className="text-lg">
          <h1 className="hover:text-purple-500">FAQ</h1>
        </div>
        <div className=" text-gray-300 font-extrabold">・</div>
        <div className="text-lg">
          <h1 className="hover:text-purple-500">Pricing</h1>
        </div>
        <div className=" text-gray-300 font-extrabold">・</div>
        <div className="text-lg">
          <h1 className="hover:text-purple-500">Testimonials</h1>
        </div>
      </div>
      <div className="text-md">
        <button className="bg-white font-bold p-3 px-4 mr-7 rounded-xl border hover:border-black">
          Buy template
        </button>
      </div>
    </div>
  );
}
