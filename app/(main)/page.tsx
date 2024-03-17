
import Projects from "@/components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ikenna Isineyi",
  description: "This is the project section",
};

export default function Home() {
  return <Projects />;
}
