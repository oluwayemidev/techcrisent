import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { FaArrowUp, FaExclamationTriangle, FaTools, FaCheckCircle } from "react-icons/fa";
import AdminLayout from "@/layouts/admin-layout";

const kpis = [
    { title: "Leads This Month", value: 128, color: "bg-blue-500" },
    { title: "Active Projects", value: 12, color: "bg-green-500" },
    { title: "Client Alerts", value: 3, color: "bg-red-500" },
    { title: "Open Tickets", value: 6, color: "bg-yellow-500" },
];

const data = [
    { name: "Week 1", leads: 25 },
    { name: "Week 2", leads: 40 },
    { name: "Week 3", leads: 32 },
    { name: "Week 4", leads: 31 },
];

export default function AdminDashboard() {
    return (
        <AdminLayout>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 space-y-6"
        >
            <h1 className="text-3xl font-bold">Dashboard Overview</h1>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {kpis.map((kpi, i) => (
                    <Card key={i} className="shadow">
                        <CardHeader className="pb-2">
                            <CardTitle className="text-lg text-muted-foreground">{kpi.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className={`text-3xl font-bold ${kpi.color} text-white p-2 rounded`}>{kpi.value}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Chart */}
            <Card className="shadow">
                <CardHeader>
                    <CardTitle>Leads Overview (This Month)</CardTitle>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={data}>
                            <XAxis dataKey="name" stroke="#888" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="leads" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle>Quick Links</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <Button variant="outline" className="w-full justify-between">
                            View All Leads <ArrowRight size={16} />
                        </Button>
                        <Button variant="outline" className="w-full justify-between">
                            Manage Projects <ArrowRight size={16} />
                        </Button>
                        <Button variant="outline" className="w-full justify-between">
                            Client Feedback <ArrowRight size={16} />
                        </Button>
                        <Button variant="outline" className="w-full justify-between">
                            Support Tickets <ArrowRight size={16} />
                        </Button>
                    </CardContent>
                </Card>

                {/* Purpose/Health Summary */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle>Agency Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground mb-2">Snapshot summary:</p>
                        <ul className="list-none space-y-2">
                            <li className="flex items-center gap-2"><FaArrowUp className="text-blue-500" /> Lead generation is strong</li>
                            <li className="flex items-center gap-2"><FaExclamationTriangle className="text-yellow-500" /> 3 client feedback alerts need attention</li>
                            <li className="flex items-center gap-2"><FaTools className="text-orange-500" /> 6 tickets pending resolution</li>
                            <li className="flex items-center gap-2"><FaCheckCircle className="text-green-500" /> Project load is healthy</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>
            </motion.div>
        </AdminLayout>
    );
}
