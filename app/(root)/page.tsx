import { fetchPosts } from "@/lib/actions/post.actions";
import Card from "../../components/shared/Card";
import PostForm from "@/components/forms/PostForm";
import { options } from "../api/auth/[[...nextauth]]/options";
import { getServerSession } from "next-auth/next";
import { fetchUserByEmail } from "@/lib/actions/user.actions";

export default async function Home() {
  let posts = await fetchPosts();
  const session = await getServerSession(options);

  const user = session?.user?.email
    ? await fetchUserByEmail(session.user?.email)
    : null;

  return (
    <section className="text-gray-200">
      <div className="w-full text-gray-200 flex justify-center items-center text-center py-4">
        <h1 className="text-xl font-bold">Over Where?</h1>
      </div>
      <div className="w-full min-h-screen text-gray-200 grid md:grid-cols-2 xl:grid-cols-3 grid-rows-3 r gap-4 p-4">
        {user ? <PostForm id={user?.id} /> : <></>}
        {posts.map((post, key) => (
          <Card
            title={post.title}
            author={post?.author?.username}
            content={post.content}
            roles={post.role}
            id={post.id}
            key={key}
          />
        ))}
      </div>
    </section>
  );
}
