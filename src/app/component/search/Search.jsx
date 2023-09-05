import Image from "next/image";

const Search = () => {
  return (
    <form action="" className="relative mb-4 flex items-center gap-2">
      <input
        type="text"
        className="h-10 w-full border-[1px] border-black p-3 pl-12 md:w-80"
      />
      <Image
        src="/search.svg"
        alt="search-icon"
        className="absolute left-3 top-2"
        height={24}
        width={24}
      />
    </form>
  );
};

export default Search;
