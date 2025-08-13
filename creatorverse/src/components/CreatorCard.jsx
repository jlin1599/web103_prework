import { Link } from "react-router-dom";

export default function CreatorCard({ creator }) {
  const { id, name, url, description, imageURL } = creator;
  return (
    <article style={{ padding: 16 }}>
      {imageURL ? (
        <img
          src={imageURL}
          alt={name}
          style={{ width: "100%", maxHeight: 180, objectFit: "cover", borderRadius: 12 }}
        />
      ) : null}
      <h3 style={{ marginTop: 12 }}>{name}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noreferrer">Visit</a>
      <footer style={{ marginTop: 8, display: "flex", gap: 8 }}>
        <Link to={`/creators/${id}`}>View</Link>
        <Link to={`/creators/${id}/edit`}>Edit</Link>
      </footer>
    </article>
  );
}
