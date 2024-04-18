import '../../components/AddWarehouse/AddWarehouse.scss';
import '../../components/AddInventory/AddInventory.scss';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';
import FormField from '../../components/AddWarehouse/FormField';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';

const AddInventory = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [warehouses, setWarehouses] = useState([]);
  const [errors, setErrors] = useState({});
  const [formFields, setFormFields] = useState({
    warehouse_id: '',
    item_name: '',
    description: '',
    category: '',
    status: '',
    quantity: '',
  });

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8082/api/warehouses'
        );
        const warehouseNames = response.data.map((warehouse) => ({
          label: warehouse.warehouse_name,
          value: warehouse.id,
        }));
        setWarehouses(warehouseNames);
      } catch (error) {
        console.error('Failed to fetch warehouses', error);
      }
    };

    fetchWarehouses();
  }, []);

  useEffect(() => {
    const fetchInventoryCategories = async () => {
      try {
        const response = await axios.get(
          'http://localhost:8082/api/inventories'
        );
        const uniqueCategories = [
          ...new Set(response.data.map((item) => item.category)),
        ];
        const categoryOptions = uniqueCategories.map((category) => ({
          label: category,
          value: category,
        }));
        setCategories(categoryOptions);
      } catch (error) {
        console.error('Failed to fetch inventories', error);
      }
    };

    fetchInventoryCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'status' && value === 'Out of Stock') {
      setFormFields({ ...formFields, quantity: '0', [name]: value });
    } else {
      setFormFields({ ...formFields, [name]: value });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    // Check for empty fields
    Object.keys(formFields).forEach((field) => {
      if (!formFields[field])
        newErrors[field] = `${field.replace('_', ' ')} is required`;
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Submitting form data:', formFields);
      axios
        .post('http://localhost:8082/api/inventories', formFields)
        .then((response) => {
          alert("You've successfuly added an item");
          console.log('Successfully submitted:', response.data);
          navigate('/inventory');
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
          alert('Form submission failed. Please try again.');
        });
    }
  };

  return (
    <div className="add-warehouse">
      <div className="add-warehouse__arrow-title-container">
        <Link to="/inventory">
          <img
            src={backArrow}
            className="add-warehouse__back-arrow"
            alt="back-arrow"
          />
        </Link>
        <h2 className="add-warehouse__page-title">Add New Inventory</h2>
      </div>

      <form onSubmit={handleSubmit} className="add-warehouse__form">
        <div className="add-warehouse__tablet-desktop-container">
          <div className="add-warehouse__tablet-desktop-container-left-edit-inventory">
            <h2 className="add-warehouse__form-details-title">Item Details</h2>
            <FormField
              label="Item Name"
              type="text"
              name="item_name"
              placeholder="Item Name"
              value={formFields.item_name}
              onChange={handleChange}
              error={errors.item_name}
            />

            <FormField
              label="Description"
              type="textarea"
              rows="5"
              name="description"
              placeholder="Please enter a brief description"
              value={formFields.description}
              onChange={handleChange}
              error={errors.description}
            />

            <div className="add-warehouse__input-container">
              <label htmlFor="category" className="add-warehouse__label">
                Category:
              </label>
              <select
                name="category"
                value={formFields.category}
                onChange={handleChange}
                className="add-warehouse__input"
              >
                <option value="">Select a Category</option>
                {categories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>

            <div class="add-warehouse__tablet-desktop-bottom-backgrdcolor"></div>
          </div>
          <div className="add-warehouse__tablet-desktop-child-container-right">
            <h2 className="add-warehouse__form-contact-title">
              Item Availability
            </h2>
            <div className="add-warehouse__input-container add-warehouse__radio-container">
              <label className="add-warehouse__label">Status:</label>
              <div>
                <label className="add-warehouse__radio-buttons">
                  <input
                    type="radio"
                    name="status"
                    value="In Stock"
                    checked={formFields.status === 'In Stock'}
                    onChange={handleChange}
                  />
                  <span>In Stock</span>
                </label>
                <label className="add-warehouse__radio-buttons">
                  <input
                    type="radio"
                    name="status"
                    value="Out of Stock"
                    checked={formFields.status === 'Out of Stock'}
                    onChange={handleChange}
                  />
                  <span>Out of Stock</span>
                </label>
              </div>
              {errors.status && (
                <div className="add-warehouse__error">{errors.status}</div>
              )}
            </div>

            {formFields.status === 'In Stock' && (
              <div className="add-warehouse__input-container">
                <label className="add-warehouse__label">Quantity:</label>
                <input
                  type="number"
                  name="quantity"
                  placeholder="0"
                  className={`add-warehouse__input ${
                    errors.quantity ? 'add-warehouse__input--error' : ''
                  }`}
                  value={formFields.quantity}
                  onChange={handleChange}
                />
                {errors.quantity && (
                  <div className="add-warehouse__error">{errors.quantity}</div>
                )}
              </div>
            )}

            <div className="add-warehouse__input-container">
              <label htmlFor="category" className="add-warehouse__label">
                Warehouse:
              </label>
              <select
                name="warehouse_id"
                value={formFields.warehouse_id}
                onChange={handleChange}
                className="add-warehouse__input"
              >
                <option value="">Select a Warehouse</option>
                {warehouses.map((warehouse) => (
                  <option key={warehouse.value} value={warehouse.value}>
                    {warehouse.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="add-warehouse__button-container-add-inventory">
              <button
                type="button"
                onClick={() => {
                  alert('Your item creation has been cancelled.');
                  navigate('/inventory');
                }}
                className="add-warehouse__button add-warehouse__button-cancel"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="add-warehouse__button add-warehouse__button-add"
              >
                + Add Item
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddInventory;
