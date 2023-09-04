import Image from "next/image";

const Search = () => {
  return (
    <div className="container">
      <form action="" className="flex items-center gap-2">
        <input
          type="text"
          className="h-10 w-80 border-[1px] border-black p-3"
        />
        <button className="relative flex h-10 w-12 items-center justify-center bg-[#1C49BB]">
          <Image
            src="/search.svg"
            alt="search-icon"
            className="text-white"
            height={24}
            width={24}
          />
        </button>
      </form>
    </div>
  );
};

export default Search;
