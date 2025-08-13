import { useNavigate } from "react-router-dom";
import { supabase } from "../client";
import CreatorForm from "../components/CreatorForm";

export default function AddCreator() {
  const navigate = useNavigate();

  async function handleCreate(values) {
    const { data, error } = await supabase.from("creators").insert([values]).select().single();
    if (error) { alert(error.message); return; }
    navigate(`/creators/${data.id}`);
  }

  return (
    <>
      <h2>Add Creator</h2>
      <CreatorForm onSubmit={handleCreate} submitText="Create" />
    </>
  );
}
