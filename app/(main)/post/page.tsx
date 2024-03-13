import BlogPostContent from "@/components/BlogPostContent";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog Post | Ikenna Isineyi",
    description: "Details of the blog post",
};

export default function Page() {
    return <BlogPostContent />
}