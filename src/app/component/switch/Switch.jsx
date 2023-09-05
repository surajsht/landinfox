const Switch = () => {
  return (
    <select className="cursor-pointer bg-[#1C49BB] p-3 pr-6 text-white">
      <option value="all">Filter by Regin</option>
      <option value="africa"> Africa </option>
      <option value="asia"> Asia </option>
      <option value="europe"> Europe </option>
      <option value="america"> America </option>
      <option value="oceania"> Oceania </option>
    </select>
  );
};

export default Switch;
