const GenderCheckbox = ({ onCheckboxChange, selectedGender }) => {
  return (
    <div className="flex mt-1">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "male" ? "sected" : ""
          } `}
        >
          <span className="label-text text-green-400">Male</span>
          <input
            type="checkbox"
            className="checkbox border-slate-600"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectedGender === "female" ? "sected" : ""
          }`}
        >
          <span className="label-text text-green-400">Female</span>
          <input
            type="checkbox"
            className="checkbox border-slate-600"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
