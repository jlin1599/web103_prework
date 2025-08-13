import { useEffect, useState } from "react";

export default function CreatorForm({ initialValues, onSubmit, submitText = "Save" }) {
  const [form, setForm] = useState({ name: "", url: "", description: "", imageURL: "" });

  useEffect(() => {
    if (initialValues) setForm(prev => ({ ...prev, ...initialValues }));
  }, [initialValues]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name<input name="name" value={form.name} onChange={handleChange} required /></label>
      <label>URL<input name="url" value={form.url} onChange={handleChange} required /></label>
      <label>Description<textarea name="description" value={form.description} onChange={handleChange} required /></label>
      <label>Image URL (optional)<input name="imageURL" value={form.imageURL} onChange={handleChange} /></label>
      <button type="submit">{submitText}</button>
    </form>
  );
}
