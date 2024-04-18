import '../AddWarehouse/AddWarehouse.scss';
import '../EditWarehouse/EditWarehouse.scss';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import FormField from '../AddWarehouse/FormField';
import backArrow from '../../assets/Icons/arrow_back-24px.svg';
import { useParams } from 'react-router-dom';

// Validation functions
const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePhone = (phone) =>
  /^(\+1|1)?[\s.-]?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$/.test(phone);

const EditWarehouse = () => {
  const { id } = useParams();
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

  useEffect(() => {
    // Fetch warehouse data
    const fetchWarehouseData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/api/warehouses/${id}`
        );
        setFormFields({
          warehouse_name: response.data.warehouse_name,
          address: response.data.address,
          city: response.data.city,
          country: response.data.country,
          contact_name: response.data.contact_name,
          contact_position: response.data.contact_position,
          contact_phone: response.data.contact_phone,
          contact_email: response.data.contact_email,
        });
      } catch (error) {
        console.error('Failed to fetch warehouse data', error);
      }
    };

    fetchWarehouseData();
  }, [id]);

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
        const response = await axios.put(
          `http://localhost:8082/api/warehouses/${id}`,
          formFields
        );
        alert('Your edit has been successfully submitted');
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
        <h2 className="add-warehouse__page-title">Edit Warehouse</h2>
      </div>
      <form onSubmit={handleSubmit} className="add-warehouse__form">
        <div className="add-warehouse__tablet-desktop-container">
          <div className="add-warehouse__tablet-desktop-container-left-edit">
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
            <div className="add-warehouse__tablet-desktop-bottom-backgrdcolor"></div>
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

            <div className="add-warehouse__button-container-edit-warehouse">
              <button
                type="button"
                onClick={() => {
                  alert('Your edit has been cancelled');
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
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditWarehouse;
