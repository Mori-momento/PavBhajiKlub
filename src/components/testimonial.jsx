
const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      name: 'name',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae elit id tortor faucibus commodo. Vestibulum tristique leo quis est sollicitudin aliquet.',
    },
    {
      id: 2,
      name: 'name',
      content: 'Vestibulum tristique leo quis est sollicitudin aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae elit id tortor faucibus commodo.',
    },
    {
      id: 1,
      name: 'name',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae elit id tortor faucibus commodo. Vestibulum tristique leo quis est sollicitudin aliquet.',
    },
    {
      id: 2,
      name: 'name',
      content: 'Vestibulum tristique leo quis est sollicitudin aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae elit id tortor faucibus commodo.',
    },
    // Add more testimonials here
  ];

  return (
    <div className="bg-black h-[100vh] flex items-center py-10">
      <div className="w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-[#f97316] mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-white gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-[#843600] p-6 rounded shadow">
              <div className="flex items-center mb-4">
                <div className="w-20 h-20 bg-gray-300 rounded-full mr-4"></div>
                <p className=" text-lg font-medium">{testimonial.name}</p>
              </div>
              <p className=" text-lg mb-4">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
