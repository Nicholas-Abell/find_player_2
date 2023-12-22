import { fetchPosts } from "@/lib/actions/post.actions";
import Card from "../../components/shared/Card";
import PostForm from "@/components/forms/PostForm";
import { options } from "../api/auth/[[...nextauth]]/options";
import { getServerSession } from "next-auth/next";
import SignOutButton from "@/components/shared/SignOutButton";

export default async function Home() {
  let posts = await fetchPosts();
  const session = await getServerSession(options);
  console.log(session);

  return (
    <section className="text-gray-200">
      <div className="w-full text-gray-200 flex justify-center items-center text-center py-4">
        <h1 className="text-xl font-bold">
          Over Where? {session ? "Logged In" : "Not Logged In"}
        </h1>
        <SignOutButton />
      </div>
      <div className="w-full min-h-screen text-gray-200 grid md:grid-cols-2 xl:grid-cols-3 grid-rows-3 r gap-4 p-4">
        {posts.map((post, key) => (
          <Card
            title={post.title}
            content={post.content}
            roles={post.roles}
            id={post.id}
            key={key}
          />
        ))}
      </div>
      <PostForm />
    </section>
  );
}
