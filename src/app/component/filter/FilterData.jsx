import Search from "../search/Search";
import Switch from "../switch/Switch";

const FilterData = () => {
  return (
    <div className="container mt-10">
      <div className="md:flex md:justify-between">
        <Search />
        <Switch />
      </div>
    </div>
  );
};

export default FilterData;
