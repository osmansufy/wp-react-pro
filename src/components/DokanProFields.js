import { Fill } from "@wordpress/components";
import { useEffect } from "@wordpress/element";
const DokanProFormFields = ({ formData, handleChange, errors, setErrors }) => {
  const validateProFields = () => {
    const proErrors = {};
    if (!formData.phone) proErrors.phone = "Phone is required";
    if (!formData.email) proErrors.email = "Email is required";
    setErrors((prevErrors) => ({ ...prevErrors, ...proErrors }));
  };

  useEffect(() => {
    validateProFields();
  }, [formData]);

  return (
    <>
      <div>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={formData.phone || ""}
          onChange={handleChange}
        />
        {errors.phone && <p>{errors.phone}</p>}
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email || ""}
          onChange={handleChange}
        />
        {errors.email && <p>{errors.email}</p>}
      </div>
    </>
  );
};

const DokanProComponent = () => {
  console.log("DokanProComponent");
  return (
    <Fill name="dokan-pro-plugin">
      {({ formData, handleChange, errors, setErrors }) => (
        <DokanProFormFields
          formData={formData}
          handleChange={handleChange}
          errors={errors}
          setErrors={setErrors}
        />
      )}
    </Fill>
  );
};

export default DokanProComponent;
