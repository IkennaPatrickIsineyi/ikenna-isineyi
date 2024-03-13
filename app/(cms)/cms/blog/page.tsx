import Blog from "@/components/CMS/Blog/DataView";
import DataLayout from "@/components/CMS/CMSLayout/DataLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog | Wickrose CMS",
    description: "This is Wickrose CMS blog section",
};


export default function Page() {
    return <DataLayout pageName="Blog" id="blog">
        <Blog />
    </DataLayout>
}