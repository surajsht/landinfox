import DisplayUi from "./component/displayui/DisplayUi";
import FilterData from "./component/filter/FilterData";
import Navbar from "./component/navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <FilterData />
      <DisplayUi />
    </>
  );
}
