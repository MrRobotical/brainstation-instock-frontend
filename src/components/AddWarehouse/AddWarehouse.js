import './AddWarehouse.scss';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FormField from './FormField';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';

// Validation functions
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) =>
  /^(\+1|1)?[\s.-]?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/.test(phone);

const AddWarehouse = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({
    warehouse_name: '',
    address: '',
    city: '',
    country: '',
    contact_name: '',
    contact_position: '',
    contact_phone: '',
    contact_email: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    // Check for empty fields
    Object.keys(formFields).forEach((field) => {
      if (!formFields[field])
        newErrors[field] = `${field.replace('_', ' ')} is required`;
    });
    // Check for valid email and phone
    if (!validateEmail(formFields.contact_email))
      newErrors.contact_email = 'Invalid email format';
    if (!validatePhone(formFields.contact_phone))
      newErrors.contact_phone = 'Invalid phone number';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post(
          'http://localhost:8082/api/warehouses',
          formFields
        );
        alert("You've successfuly added a warehouse");
        console.log('Successfully submitted:', response.data);
        navigate('/');
      } catch (error) {
        console.error('Error submitting form:', error);
        alert('Form submission failed. Please try again.');
      }
    }
  };

  return (
    <div className="add-warehouse">
      <div className="add-warehouse__arrow-title-container">
        <Link to="/">
          <img
            src={backArrow}
            className="add-warehouse__back-arrow"
            alt="back-arrow"
          />
        </Link>
        <h2 className="add-warehouse__page-title">Add New Warehouse</h2>
      </div>
      <form onSubmit={handleSubmit} className="add-warehouse__form">
        <div className="add-warehouse__tablet-desktop-container">
          <div className="add-warehouse__tablet-desktop-container-left">
            <h2 className="add-warehouse__form-details-title">
              Warehouse Details
            </h2>
            <FormField
              label="Warehouse Name"
              type="text"
              name="warehouse_name"
              placeholder="Warehouse Name"
              value={formFields.warehouse_name}
              onChange={handleChange}
              error={errors.warehouse_name}
            />
            <FormField
              label="Street Address"
              type="text"
              name="address"
              placeholder="Street Address"
              value={formFields.address}
              onChange={handleChange}
              error={errors.address}
            />
            <FormField
              label="City"
              type="text"
              name="city"
              placeholder="City"
              value={formFields.city}
              onChange={handleChange}
              error={errors.city}
            />
            <FormField
              label="Country"
              type="text"
              name="country"
              placeholder="Country"
              value={formFields.country}
              onChange={handleChange}
              error={errors.country}
            />
            <div class="add-warehouse__tablet-desktop-bottom-backgrdcolor"></div>
          </div>
          <div className="add-warehouse__tablet-desktop-child-container-right">
            <h2 className="add-warehouse__form-contact-title">
              Contact Details
            </h2>
            <FormField
              label="Contact Name"
              type="text"
              name="contact_name"
              placeholder="Contact Name"
              value={formFields.contact_name}
              onChange={handleChange}
              error={errors.contact_name}
            />
            <FormField
              label="Position"
              type="text"
              name="contact_position"
              placeholder="Position"
              value={formFields.contact_position}
              onChange={handleChange}
              error={errors.contact_position}
            />
            <FormField
              label="Phone Number"
              type="tel"
              name="contact_phone"
              placeholder="Phone Number"
              value={formFields.contact_phone}
              onChange={handleChange}
              error={errors.contact_phone}
            />
            <FormField
              label="Contact Email"
              type="email"
              name="contact_email"
              placeholder="Email"
              value={formFields.contact_email}
              onChange={handleChange}
              error={errors.contact_email}
            />

            <div className="add-warehouse__button-container">
              <button
                type="button"
                onClick={() => {
                  alert('Your edit has been cancelled.');
                  navigate('/');
                }}
                className="add-warehouse__button add-warehouse__button-cancel"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="add-warehouse__button add-warehouse__button-add"
              >
                + Add Warehouse
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddWarehouse;
