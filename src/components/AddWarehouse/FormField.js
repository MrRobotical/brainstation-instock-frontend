import './AddWarehouse.scss';

const FormField = ({
  label,
  type,
  name,
  value,
  placeholder,
  onChange,
  error,
  rows,
}) => (
  <div className="add-warehouse__input-container">
    <label className="add-warehouse__label">{label}:</label>
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`add-warehouse__input ${
        error ? 'add-warehouse__input--error' : ''
      }`}
    />
    {error && <p className="add-warehouse__error">{error}</p>}
  </div>
);

export default FormField;
