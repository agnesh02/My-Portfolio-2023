const Card = function ({ Item, desc, colour1, colour2 }) {
  return (
    <div class="w-60 justify-center rounded-3xl bg-blue-500 p-3 py-4 shadow-lg hover:bg-blue-700 hover:text-white">
      <div className=" mt-6 flex justify-center text-8xl">
        <Item />
      </div>
      <h2 class=" mb-2 flex justify-center font-poppins_semi_bold text-xl font-bold">
        {desc}
      </h2>
    </div>
  );
};

export default Card;
