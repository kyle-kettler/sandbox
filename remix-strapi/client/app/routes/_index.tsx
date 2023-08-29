import { V2_MetaFunction, json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App - http://localhost:3000/" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export async function loader() {
  const response = await fetch('http://127.0.0.1:1337/api/posts');
  const data = await response.json();
  return json({...data})
}

type Post = {
  id: number;
  attributes: {
    title: string;
    body: string;
    createdAt: string;
    description: string;
    publishedAt: string;
    updatedAt: string;
  }
}

export default function Index() {
  const {data, meta} = useLoaderData();
  console.log(data)
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      {data.map((post: Post) => (
        <div key={post.id}>
          <h1>{post.attributes.title}</h1>
          <p>{post.attributes.description}</p>
          <Link to={`posts/${post.id}`}>Read Post</Link>
        </div>
      ))}
    </div>
  );
}
