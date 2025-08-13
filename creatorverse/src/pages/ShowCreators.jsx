import { useEffect, useState } from "react";
import { supabase } from "../client";
import CreatorCard from "../components/CreatorCard";

export default function ShowCreators() {
  const [creators, setCreators] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) console.error(error);
      setCreators(data || []);
      setLoading(false);
    })();
  }, []);

  if (loading) return <p>Loading…</p>;
  if (creators.length === 0) return <p>No creators yet. Click “Add Creator”.</p>;

  return (
    <section style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16 }}>
      {creators.map(c => <CreatorCard key={c.id} creator={c} />)}
    </section>
  );
}
