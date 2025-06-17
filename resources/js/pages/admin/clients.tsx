import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHeader, TableHead, TableRow } from "@/components/ui/table";
import { FiUserPlus, FiEdit, FiTrash2, FiUserCheck } from "react-icons/fi";
import AdminLayout from "@/layouts/admin-layout";

const clients = [
    {
        name: "Acme Corp",
        project: "Solar Installation",
        status: "In Progress",
        visits: 340,
        leads: 21,
        billing: "Paid"
    },
    {
        name: "GreenTech",
        project: "Consulting",
        status: "Completed",
        visits: 220,
        leads: 10,
        billing: "Pending"
    }
];

export default function AdminClients() {
    return (
        <AdminLayout>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 space-y-6"
            >
                <div className="flex justify-between items-center">
                    <h1 className="text-3xl font-bold">Clients</h1>
                    <Button variant="default" className="flex items-center gap-2 dark:text-white">
                        <FiUserPlus /> Add Client
                    </Button>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle>Client List</CardTitle>
                    </CardHeader>
                    <CardContent className="overflow-x-auto">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Name</TableHead>
                                    <TableHead>Project</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>Site Visits</TableHead>
                                    <TableHead>Leads</TableHead>
                                    <TableHead>Billing</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {clients.map((client, i) => (
                                    <TableRow key={i}>
                                        <TableCell>{client.name}</TableCell>
                                        <TableCell>{client.project}</TableCell>
                                        <TableCell>{client.status}</TableCell>
                                        <TableCell>{client.visits}</TableCell>
                                        <TableCell>{client.leads}</TableCell>
                                        <TableCell>{client.billing}</TableCell>
                                        <TableCell className="text-right space-x-2">
                                            <Button size="sm" variant="outline" className="px-2">
                                                <FiEdit />
                                            </Button>
                                            <Button size="sm" variant="destructive" className="px-2">
                                                <FiTrash2 />
                                            </Button>
                                            <Button size="sm" variant="secondary" className="px-2">
                                                <FiUserCheck />
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </motion.div>
        </AdminLayout>
    );
}
