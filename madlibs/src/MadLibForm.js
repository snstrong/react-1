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
    setFormData(null);
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="noun1">Noun</label>
      <input required id="noun1" type="text" name="noun1" placeholder="Noun" />
    </form>
  );
};
export default MadLibForm;
