const GenderCheckbox = () => {
  return (
    <div className="flex mt-1">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-green-400">Male</span>
          <input type="checkbox" className="checkbox border-slate-600" id="" />
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text text-green-400">Female</span>
          <input type="checkbox" className="checkbox border-slate-600" id="" />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
