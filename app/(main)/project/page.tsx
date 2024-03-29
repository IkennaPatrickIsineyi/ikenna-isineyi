
import React from "react";
import ProjectDetails from "../../../components/ProjectDetails";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Project Detail | Ikenna Isineyi",
    description: "Details of the project",
};

export default function Page() {
    return <ProjectDetails />
}