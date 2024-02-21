import x from "../images/delete-option.png";

const InputSection = ({
  label,
  inputs,
  handleSelectChange,
  clickAdd,
  deleteIngredient,
  selectedOptions = [],
}: any) => {
  const type = label.split(". ")[1].toUpperCase();

  return (
    <div>
      <div className="label">{label}</div>
      {inputs.map((item: any) => {
        const optionsWithSameItem = selectedOptions.filter(
          (option: any) => option.item === item.type
        );
        const showX = optionsWithSameItem.length > 1;

        return (
          <div key={item.id} className="select">
            <select
              value={item.value}
              name={item.type}
              id={item.id}
              className="select-val"
              onChange={handleSelectChange}
            >
              {item.type !== "CHIFLĂ" && <option value="--">--</option>}
              {item.options.map((subItem: any, subIndex: any) => (
                <option key={subIndex} value={subItem.name}>
                  {subItem.name}
                </option>
              ))}
            </select>
            {showX && (
              <span
                className="x-icon"
                onClick={() => deleteIngredient(item.id)}
              >
                <img src={x} alt="" />
              </span>
            )}
          </div>
        );
      })}
      {type !== "CHIFLĂ" && (
        <div className="add-item clone-item" onClick={() => clickAdd(type)}>
          <span className="plus-icon">+</span>
          <span className="text">Adaugă item</span>
        </div>
      )}
    </div>
  );
};

export default InputSection;
