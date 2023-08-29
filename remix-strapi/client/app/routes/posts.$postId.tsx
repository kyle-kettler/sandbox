import type {
  ActionArgs,
  LoaderArgs,
} from "@remix-run/node";
import { json } from '@remix-run/node' // or cloudflare/deno
import { useParams, useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: LoaderArgs) => {
  const response = await fetch(`http://127.0.0.1:1337/api/posts/${params.postId}`);
  const data = await response.json();
  console.log('fetch data', data)
  return json({data})
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
  console.log('data', data)
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>{data.data.attributes.title}</h1>
      <p>{data.data.attributes.body}</p>
    </div>
  );
}
