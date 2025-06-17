import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, PenSquare, CalendarClock, Image } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AdminLayout from "@/layouts/admin-layout";

const posts = [
    { title: "Top 5 Solar Tips for Homeowners", status: "Scheduled", date: "June 5, 2025", author: "Jane Doe" },
    { title: "Why Solar Is the Future", status: "Published", date: "May 20, 2025", author: "John Smith" },
    { title: "How to Cut Energy Bills by 40%", status: "Draft", date: "--", author: "Mary Johnson" },
];

export default function BlogManagerPage() {
    return (
        <AdminLayout>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 space-y-6"
            >
                <h1 className="text-3xl font-bold">Blog Manager</h1>

                {/* Actions */}
                <div className="flex gap-4">
                    <Button className="dark:text-white"><Plus className="mr-2 h-4 w-4" /> New Post</Button>
                    <Button variant="outline"><Image className="mr-2 h-4 w-4" /> Media Library</Button>
                </div>

                {/* Posts Table */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle>Blog Posts</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Title</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Publish Date</TableHead>
                                    <TableHead>Author</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {posts.map((post, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{post.title}</TableCell>
                                        <TableCell>{post.status}</TableCell>
                                        <TableCell>{post.date}</TableCell>
                                        <TableCell>{post.author}</TableCell>
                                        <TableCell className="text-right space-x-2">
                                            <Button size="sm" variant="outline"><PenSquare className="mr-1 h-4 w-4" /> Edit</Button>
                                            <Button size="sm" variant="destructive">Delete</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* SEO & Scheduling */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle><CalendarClock className="inline-block mr-2" />Post Scheduling & SEO</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                            <li>Add SEO tags like title, description, and keywords.</li>
                            <li>Schedule posts for future publishing.</li>
                            <li>Manage meta data and social sharing preview.</li>
                        </ul>
                    </CardContent>
                </Card>
            </motion.div>
        </AdminLayout>
    );
}
