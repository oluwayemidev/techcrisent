import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaUpload, FaExternalLinkAlt } from "react-icons/fa";
import AdminLayout from "@/layouts/admin-layout";

const projects = [
    {
        title: "E-commerce Website",
        client: "Acme Corp",
        stage: "In Progress",
        deadline: "2025-07-10",
        url: "https://staging.acme.com",
    },
    {
        title: "Solar CRM Platform",
        client: "AndOne Solar",
        stage: "Review",
        deadline: "2025-06-30",
        url: "https://live.andonesolar.com",
    },
];

const stages = ["New", "In Progress", "Review", "Completed"];

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const filtered = filter === "All" ? projects : projects.filter((p) => p.stage === filter);

    return (
        <AdminLayout>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 space-y-6"
            >
                <h1 className="text-3xl font-bold">Projects / Services</h1>
                <p className="text-muted-foreground mb-4">Your work orders and service tracking dashboard.</p>

                <div className="flex gap-2 flex-wrap">
                    <Button variant={filter === "All" ? "default" : "outline"} onClick={() => setFilter("All")} className="dark:text-white">All</Button>
                    {stages.map((s) => (
                        <Button key={s} variant={filter === s ? "default" : "outline"} onClick={() => setFilter(s)} className="dark:text-white">{s}</Button>
                    ))}
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                    {filtered.map((project, i) => (
                        <Card key={i} className="shadow">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <p className="text-sm text-muted-foreground">Client: {project.client}</p>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <div className="text-sm">Stage: <span className="font-semibold">{project.stage}</span></div>
                                <div className="text-sm">Deadline: <span className="font-semibold">{project.deadline}</span></div>
                                <div className="flex items-center gap-2 text-blue-600 text-sm">
                                    <FaExternalLinkAlt size={14} />
                                    <a href={project.url} target="_blank" rel="noopener noreferrer">View Site</a>
                                </div>
                                <div className="text-sm text-muted-foreground">Assign Task:</div>
                                <Textarea placeholder="Add tasks or notes here..." rows={2} />
                                <div className="text-sm text-muted-foreground">Upload Files:</div>
                                <Input type="file" className="text-sm" />
                                <Button variant="secondary" size="sm" className="mt-2"><FaUpload size={14} className="mr-2" /> Upload</Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </motion.div>
        </AdminLayout>
    );
}
