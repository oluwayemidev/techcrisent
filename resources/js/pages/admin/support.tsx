import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import AdminLayout from "@/layouts/admin-layout"

const tickets = [
    {
        id: "#TCK-00123",
        subject: "Website down",
        client: "John Doe",
        priority: "Urgent",
        assigned: "Alex",
        created_at: "2025-06-01",
        sla: "3h 20m",
        status: "Open",
    },
    {
        id: "#TCK-00124",
        subject: "Can't upload files",
        client: "Mary Jane",
        priority: "Medium",
        assigned: "Lena",
        created_at: "2025-06-02",
        sla: "12h 15m",
        status: "In Progress",
    },
    {
        id: "#TCK-00125",
        subject: "Invoice mismatch",
        client: "Acme Inc.",
        priority: "Low",
        assigned: "Josh",
        created_at: "2025-06-03",
        sla: "2d 5h",
        status: "Open",
    },
]

const getPriorityColor = (level: string) => {
    switch (level) {
        case "Urgent":
            return "bg-red-500"
        case "Medium":
            return "bg-yellow-500"
        case "Low":
            return "bg-green-500"
        default:
            return "bg-gray-400"
    }
}

export default function SupportTickets() {
    return (
        <AdminLayout>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
            >
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Support Tickets</CardTitle>
                        <Button variant="outline">New Ticket</Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Ticket ID</TableHead>
                                    <TableHead>Subject</TableHead>
                                    <TableHead>Client</TableHead>
                                    <TableHead>Priority</TableHead>
                                    <TableHead>Assigned</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead>SLA</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {tickets.map((ticket) => (
                                    <TableRow key={ticket.id}>
                                        <TableCell>{ticket.id}</TableCell>
                                        <TableCell>{ticket.subject}</TableCell>
                                        <TableCell>{ticket.client}</TableCell>
                                        <TableCell>
                                            <Badge className={getPriorityColor(ticket.priority)}>
                                                {ticket.priority}
                                            </Badge>
                                        </TableCell>
                                        <TableCell>
                                            <div className="flex items-center gap-2">
                                                <Avatar className="h-6 w-6">
                                                    <AvatarFallback>{ticket.assigned[0]}</AvatarFallback>
                                                </Avatar>
                                                <span>{ticket.assigned}</span>
                                            </div>
                                        </TableCell>
                                        <TableCell>{ticket.status}</TableCell>
                                        <TableCell>{ticket.sla}</TableCell>
                                        <TableCell className="text-right">
                                            <Button variant="ghost" size="sm">View</Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </motion.div>
        </AdminLayout>
    )
}
