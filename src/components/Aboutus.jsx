const Aboutus = () => {
    return (
        <div className="bg-black flex justify-center items-center w-full h-[100vh]">
            <div className="w-[80%] mx-auto px-4 sm:px-6 lg:px-8" >

        <h2 className="text-5xl font-extrabold text-[#f97316] mb-8">About us</h2>
        <div className="flex" >
        <div className="w-2/5 rounded-[20px] mx-8 overflow-hidden h-[60vh] object-cover" >
                <img className="object-cover" src='/placeholder(1).jpg  '/>
            </div>
            <div className="w-3/5" >
                <p className="text-xl" >
                    Pav Bhaji Klub, a culinary haven where passion and flavors unite to create an extraordinary dining experience. Founded by the visionary food enthusiast, <span className="glow font-semibold text-orange-500" >Mr. Akhilesh Vyas</span> , our restaurant is a testament to his unwavering commitment to reinventing the way we savor the beloved dish of pav bhaji.

                <br/>
                <br/>

                    At Pav Bhaji Klub, our mission is to elevate the art of pav bhaji by infusing it with innovation, quality, and a dash of creativity. We believe that food is an experience, and every dish we serve is crafted with utmost care and attention to detail. Mr. Vyas&apos;s vision is to captivate the senses of our guests, pushing the boundaries of flavors and presenting pav bhaji in a way that is both traditional and refreshingly modern.
                </p>
            </div>
        </div>

            </div>
        </div>
    );
}

export default Aboutus;