import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { supabase } from "../client";

export default function ViewCreator() {
  const { id } = useParams();
  const [creator, setCreator] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data, error } = await supabase.from("creators").select("*").eq("id", id).single();
      if (error) console.error(error);
      setCreator(data);
      setLoading(false);
    })();
  }, [id]);

  if (loading) return <p>Loading…</p>;
  if (!creator) return <p>Creator not found.</p>;

  return (
    <article>
      {creator.imageURL ? (
        <img src={creator.imageURL} alt={creator.name} style={{ width: "100%", maxWidth: 640, borderRadius: 12 }} />
      ) : null}
      <h2>{creator.name}</h2>
      <p>{creator.description}</p>
      <p><a href={creator.url} target="_blank" rel="noreferrer">Visit channel</a></p>
      <Link to={`/creators/${id}/edit`}>Edit</Link>
    </article>
  );
}
