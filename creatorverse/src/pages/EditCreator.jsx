import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../client";
import CreatorForm from "../components/CreatorForm";

export default function EditCreator() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [initial, setInitial] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { data, error } = await supabase.from("creators").select("*").eq("id", id).single();
      if (error) { alert(error.message); return; }
      setInitial(data);
      setLoading(false);
    })();
  }, [id]);

  async function handleUpdate(values) {
    const { error } = await supabase.from("creators").update(values).eq("id", id);
    if (error) { alert(error.message); return; }
    navigate(`/creators/${id}`);
  }

  async function handleDelete() {
    if (!confirm("Delete this creator?")) return;
    const { error } = await supabase.from("creators").delete().eq("id", id);
    if (error) { alert(error.message); return; }
    navigate("/");
  }

  if (loading) return <p>Loading…</p>;
  if (!initial) return <p>Not found.</p>;

  return (
    <>
      <h2>Edit Creator</h2>
      <CreatorForm initialValues={initial} onSubmit={handleUpdate} submitText="Update" />
      <button onClick={handleDelete} style={{ marginTop: 12 }}>Delete</button>
    </>
  );
}
