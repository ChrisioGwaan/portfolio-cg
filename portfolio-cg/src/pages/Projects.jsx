import React, { Suspense, lazy } from "react";

const ProjectDetails = lazy(() => import("../components/ProjectDetails"));

export default function Projects() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold">Projects</h1>
            <Suspense fallback={<div>Loading project details...</div>}>
                <ProjectDetails />
            </Suspense>
        </div>
    );
}
