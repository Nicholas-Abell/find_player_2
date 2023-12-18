import { fetchPosts } from "@/lib/prisma/actions/user.actions";
import Card from "../../components/shared/Card";

export default async function Home() {
  let posts = await fetchPosts();
  return (
    <section className="w-full min-h-screen text-gray-200 grid md:grid-cols-2 xl:grid-cols-3 grid-rows-3 r gap-4 p-4">
      {posts.map((post, key) => (
        <Card gameTitle={post.title} content={post.content} key={key} />
      ))}
    </section>
  );
}
