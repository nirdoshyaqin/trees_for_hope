import PostPreview from "../components/post-preview";

export default function MoreStories({ posts }) {
  return (
    <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">Latest News and Information</p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map(post => (
          <PostPreview key={post.slug} title={post.title} coverImage={post.coverImage} date={post.date} author={post.author} slug={post.slug} excerpt={post.excerpt} />
        ))}
      </div>
    </div>
  );
}
