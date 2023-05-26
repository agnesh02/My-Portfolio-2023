<section>
  <div className=" mx-auto max-w-[700px] rounded-3xl px-5 py-10 dark:bg-white lg:px-10">
    <h2 className=" mb-12 font-poppins_medium text-3xl font-bold">
      Contact Me
    </h2>
    <form>
      <div className="form-group mb-6">
        <input
          type="text"
          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
          id="exampleInput7"
          placeholder="Name"
        />
      </div>
      <div className="form-group mb-6">
        <input
          type="email"
          className="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
          id="exampleInput8"
          placeholder="Email address"
        />
      </div>
      <div className="form-group mb-6">
        <textarea
          className=" form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-gray-700 transition ease-in-out focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none"
          id="exampleFormControlTextarea13"
          rows="3"
          placeholder="Message"
        ></textarea>
      </div>
      <button
        type="submit"
        className=" w-full rounded-md bg-blue-600 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg"
        onClick={() => alert("hmmm")}
      >
        Send
      </button>
    </form>
  </div>
</section>;
