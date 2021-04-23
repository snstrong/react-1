import React, { useState } from "react";

const MadLibForm = () => {
  const [formData, setFormData] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: pass in fn as prop to form to process form data
    setFormData(null);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input required id="noun1" type="text" name="noun1" placeholder="Noun" />
      <br />
      <input required id="noun2" type="text" name="noun2" placeholder="Noun" />
      <br />
      <input required id="color" type="text" name="color" placeholder="Color" />
      <br />
      <button>See my story!</button>
    </form>
  );
};
export default MadLibForm;
