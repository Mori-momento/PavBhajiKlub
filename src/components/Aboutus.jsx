// const Aboutus = () => {
//     return (

//         <div className="bg-black flex flex-col flex-wrap justify-center items-center w-full h-[100vh] sml:h-full py-10">
//             <div className="w-1/4 rounded-[20px] mx-8 overflow-hidden h-[60%] object-cover sml:flex flex-col  smh:h-[30%] w-[38vh] mb-10" >
//                 <img className="object-cover" src='/placeholder(1).jpg'/>
//             </div>
//             <div className="w-2/5 sml:w-full sml:px-10  text-left" >

//                 <p className="text-xl" >
//                     Pav Bhaji Klub, a culinary haven where passion and flavors unite to create an extraordinary dining experience. Founded by the visionary food enthusiast, <span className="glow font-semibold text-orange-500" >Mr. Akhilesh Vyas</span> , our restaurant is a testament to his unwavering commitment to reinventing the way we savor the beloved dish of pav bhaji.

//                 <br/>
//                 <br/>

//                     At Pav Bhaji Klub, our mission is to elevate the art of pav bhaji by infusing it with innovation, quality, and a dash of creativity. We believe that food is an experience, and every dish we serve is crafted with utmost care and attention to detail. Mr. Sharma's vision is to captivate the senses of our guests, pushing the boundaries of flavors and presenting pav bhaji in a way that is both traditional and refreshingly modern.
//                 </p>
//             </div>
//         </div>

//     );
// }

// export default Aboutus;


export default function Aboutus() {
  return (
    <div id='about' className="h-screen w-full bg-black justify-center items-start sml:items-center p-10 sml:p-[10px] gap-2 sml:gap-0 grid grid-cols-3 text-black sml:grid-cols-1 sml:h-full">
      <div className="overflow-hidden mx-auto rounded-lg my-5 p-6 sml:h-[320px] sml:mx-auto sml:w-full sml:p-0">
        <img className="object-cover w-full rounded-lg sml:h-[320px] sml:w-full" src="/placeholder.jpg" />
      </div>
      <div className="h-full pt-16 w-[800px] mx-auto col-span-2 flex text-white my-2 p-6 text-justify sml:w-full">
        <p className="text-xl">
          Pav Bhaji Klub, a culinary haven where passion and flavors unite to
          create an extraordinary dining experience. Founded by the visionary
          food enthusiast,{" "}
          <span className="glow font-semibold text-orange-500">
            Mr. Akhilesh Vyas
          </span>{" "}
          , our restaurant is a testament to his unwavering commitment to
          reinventing the way we savor the beloved dish of pav bhaji.
          <br />
          <br />
          At Pav Bhaji Klub, our mission is to elevate the art of pav bhaji by
          infusing it with innovation, quality, and a dash of creativity. We
          believe that food is an experience, and every dish we serve is crafted
          with utmost care and attention to detail. Mr. Vyas's vision is to
          captivate the senses of our guests, pushing the boundaries of flavors
          and presenting pav bhaji in a way that is both traditional and
          refreshingly modern.
        </p>
      </div>
    </div>
  );
}
