const AddCoffee = () => {
  return (
    <div className="w-10/12 mx-auto">
      <button className="my-12 text-2xl font-dancing font-extrabold text-shadow-lg/50 text-shadow-coffee">
        Back to Home
      </button>
      <div className="bg-[#F4F3F0] rounded-lg">
        <div className="text-center">
          <h4 className="text-3xl font-dancing font-extrabold text-coffee pt-14 text-shadow-lg/50 text-shadow-coffee">
            Add New Coffee
          </h4>
          <p className="text-sm text-coffee/60 max-w-4/6 mx-auto py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>
        <form className="w-10/12 mx-auto pt-4 pb-14">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-coffee/80 font-bold mb-2">
                Name
              </label>
              <input
                className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60"
                type="text"
                name="name"
                placeholder="Enter Coffee Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-coffee/80 font-bold mb-2">
                Chef
              </label>
              <input
                className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60"
                type="text"
                name="chef"
                placeholder="Enter Coffee Chef"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-coffee/80 font-bold mb-2">
                Supplier
              </label>
              <input
                className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60"
                type="text"
                name="supplier"
                placeholder="Enter Coffee Supplier"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-coffee/80 font-bold mb-2">
                Taste
              </label>
              <input
                className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60"
                type="text"
                name="taste"
                placeholder="Enter Coffee Taste"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block text-coffee/80 font-bold mb-2">
                Category
              </label>
              <input
                className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60"
                type="text"
                name="category"
                placeholder="Enter Coffee Category"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block text-coffee/80 font-bold mb-2">
                Details
              </label>
              <input
                className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60"
                type="text"
                name="details"
                placeholder="Enter Coffee Details"
              />
            </div>
          </div>
          <div className="w-full mb-6">
            <label className="block text-coffee/80 font-bold mb-2">Photo</label>
            <input
              className="block w-full bg-white text-sm text-gray-700 border border-gray-200 rounded py-3 px-3 leading-tight focus:outline-none focus:bg-white focus:border-coffee/60"
              type="text"
              name="photo"
              placeholder="Enter Photo URL "
            />
          </div>
          <button
            type="submit"
            className="btn w-full text-lg bg-coffee-brown border border-coffee font-dancing font-extrabold hover:bg-transparent"
          >
            {" "}
            Add Coffee
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
