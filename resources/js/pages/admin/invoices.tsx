import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FiDownload, FiMail, FiPlus, FiRefreshCw } from "react-icons/fi";
import AdminLayout from "@/layouts/admin-layout";

const invoices = [
    {
        id: "INV-001",
        client: "TechCorp Inc.",
        amount: "$1,200",
        status: "Paid",
        date: "2025-06-01",
    },
    {
        id: "INV-002",
        client: "GreenSolar LLC",
        amount: "$2,500",
        status: "Overdue",
        date: "2025-05-25",
    },
    {
        id: "INV-003",
        client: "BrightTech",
        amount: "$3,750",
        status: "Pending",
        date: "2025-05-28",
    },
];

export default function Invoices() {
    return (
        <AdminLayout>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 space-y-6"
            >
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Invoices & Payments</h1>
                    <Button className="flex items-center gap-2 dark:text-white">
                        <FiPlus size={16} /> New Invoice
                    </Button>
                </div>

                {/* Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Card>
                        <CardHeader>
                            <CardTitle>Total Revenue</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold">$7,450</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Pending Payments</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold">$3,750</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>Overdue Invoices</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-2xl font-bold text-red-500">$2,500</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Invoices Table */}
                <Card>
                    <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                        <CardTitle>All Invoices</CardTitle>
                        <div className="flex gap-2">
                            <Button variant="outline" className="flex items-center gap-2">
                                <FiDownload size={16} /> Export CSV
                            </Button>
                            <Button variant="outline" className="flex items-center gap-2">
                                <FiRefreshCw size={16} /> Sync Payments
                            </Button>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>ID</TableHead>
                                    <TableHead>Client</TableHead>
                                    <TableHead>Date</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Status</TableHead>
                                    <TableHead className="text-right">Actions</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((invoice, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell>{invoice.id}</TableCell>
                                        <TableCell>{invoice.client}</TableCell>
                                        <TableCell>{invoice.date}</TableCell>
                                        <TableCell>{invoice.amount}</TableCell>
                                        <TableCell>
                                            <span className={`font-medium ${invoice.status === 'Overdue' ? 'text-red-500' : invoice.status === 'Pending' ? 'text-yellow-500' : 'text-green-600'}`}>
                                                {invoice.status}
                                            </span>
                                        </TableCell>
                                        <TableCell className="text-right">
                                            <Button size="sm" variant="ghost" className="text-blue-600 hover:underline">
                                                <FiMail size={14} className="mr-1" /> Send
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
