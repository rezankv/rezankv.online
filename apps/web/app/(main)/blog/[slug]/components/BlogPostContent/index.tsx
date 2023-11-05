'use client';
import { Post } from 'contentlayer/generated';
import BlogPostHeader from '../BlogPostHeader';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image'

interface Props {
  post: Post;
}
const BlogPostContent = ({ post }: Props) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <article className="mdx-styles" style={{ paddingTop: '8rem' }}>
      {/* <div>
        <time
          style={{ color: 'var(--white-2)' }}
          dateTime={post.createdAt}
          className="mb-1 text-xs text-gray-600"
        >
          {format(parseISO(post.createdAt), 'LLLL d, yyyy')}
        </time>
      </div> */}
      <BlogPostHeader
        banner={{ alt: post.title, src: post.banner }}
        description={post.description}
        title={post.title}
      />
      <MDXContent
        components={{
          Image,
        }}
      />
    </article>
  );
};

export default BlogPostContent;
