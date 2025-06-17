import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { CalendarIcon, UserIcon, FileTextIcon } from "lucide-react";
import AdminLayout from "@/layouts/admin-layout";

export default function AuditLogsPage() {
    return (
        <AdminLayout>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 space-y-6"
            >
                <h1 className="text-3xl font-bold">Audit Logs / Activity</h1>

                <Card className="shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <FileTextIcon size={20} /> Activity Logs
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <Label>User</Label>
                                <Input placeholder="Enter user name" />
                            </div>
                            <div>
                                <Label>Date</Label>
                                <Input type="date" />
                            </div>
                            <div>
                                <Label>Action</Label>
                                <Input placeholder="e.g. Edited, Deleted, Created" />
                            </div>
                        </div>
                        <Button className="dark:text-white">Filter Logs</Button>

                        <div className="overflow-auto mt-6">
                            <table className="min-w-full table-auto border border-gray-200 text-sm">
                                <thead>
                                    <tr className="bg-muted text-left">
                                        <th className="p-3 border-b">User</th>
                                        <th className="p-3 border-b">Action</th>
                                        <th className="p-3 border-b">Date</th>
                                        <th className="p-3 border-b">Details</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="hover:bg-muted/50">
                                        <td className="p-3 border-b">Jane Doe</td>
                                        <td className="p-3 border-b">Edited Settings</td>
                                        <td className="p-3 border-b">2025-06-01</td>
                                        <td className="p-3 border-b">Changed site title and theme color</td>
                                    </tr>
                                    <tr className="hover:bg-muted/50">
                                        <td className="p-3 border-b">John Smith</td>
                                        <td className="p-3 border-b">Deleted Project</td>
                                        <td className="p-3 border-b">2025-05-30</td>
                                        <td className="p-3 border-b">Removed obsolete campaign data</td>
                                    </tr>
                                    {/* Additional log rows */}
                                </tbody>
                            </table>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </AdminLayout>
    );
}
