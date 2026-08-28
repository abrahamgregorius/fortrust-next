import BlogPostContent from "@/components/BlogPostContent";

export const dynamic = 'force-dynamic';

export default async function BlogPost({ params }) {
    const { slug } = await params;
    return <BlogPostContent slug={slug} />;
}
