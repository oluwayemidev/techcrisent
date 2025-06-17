import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Shield, ListChecks } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import AdminLayout from "@/layouts/admin-layout";

const team = [
    { name: "Jane Doe", role: "Admin", tasks: 12, activity: "1h ago" },
    { name: "John Smith", role: "Editor", tasks: 8, activity: "3h ago" },
    { name: "Mary Johnson", role: "Support", tasks: 5, activity: "Yesterday" },
];

export default function Team() {
    return (
        <AdminLayout>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 space-y-6"
            >
                <h1 className="text-3xl font-bold">Team & Roles</h1>

                {/* Actions */}
                <div className="flex justify-between">
                    <Button className="dark:text-white"><Plus className="mr-2 h-4 w-4" /> Add Member</Button>
                    <Button variant="outline"><Shield className="mr-2 h-4 w-4" /> Manage Permissions</Button>
                </div>

                {/* Team Members Table */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle>Team Members</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Role</TableHead>
                                    <TableHead>Tasks</TableHead>
                                    <TableHead>Last Activity</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {team.map((member, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{member.name}</TableCell>
                                        <TableCell>{member.role}</TableCell>
                                        <TableCell>{member.tasks}</TableCell>
                                        <TableCell>{member.activity}</TableCell>
                                        <TableCell className="text-right space-x-2">
                                            <Button size="sm" variant="outline">Edit</Button>
                                            <Button size="sm" variant="destructive">Remove</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>

                {/* Role Summary */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle>Roles Overview</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <ul className="list-disc list-inside text-muted-foreground">
                            <li><strong>Admin:</strong> Full access to all modules</li>
                            <li><strong>Editor:</strong> Can manage content and projects</li>
                            <li><strong>Support:</strong> Handles client requests and tickets</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Activity Log */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle><ListChecks className="inline-block mr-2" />Activity Logs</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-1 text-muted-foreground">
                            <li>Jane added a new project - 1h ago</li>
                            <li>John updated client feedback - 3h ago</li>
                            <li>Mary resolved support ticket #123 - Yesterday</li>
                        </ul>
                    </CardContent>
                </Card>
            </motion.div>
        </AdminLayout>
    );
}
