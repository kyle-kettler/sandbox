import type {
  LoaderArgs,
} from "@remix-run/node";
import { json } from '@remix-run/node' // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderArgs) => {
  const response = await fetch(`http://127.0.0.1:1337/api/posts/${params.postId}?populate=*`);
  const data = await response.json();
  return json(data)
};

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

export default function PostRoute() {
  const {data} = useLoaderData();
  const post = data
  console.log('post', post)
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>{post.attributes.title}</h1>
      <p>{post.attributes.body}</p>
      <img src={`http://127.0.0.1:1337${post.attributes.cover.data.attributes.url}`}/>
    </div>
  );
}
