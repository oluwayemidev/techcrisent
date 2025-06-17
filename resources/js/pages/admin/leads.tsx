import { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Download, Filter, MessageSquare, Mail } from 'lucide-react';
import { Select, SelectTrigger, SelectContent, SelectItem } from '@/components/ui/select';
import AdminLayout from '@/layouts/admin-layout';

const leads = [
    {
        name: 'John Doe',
        client: 'Acme Corp',
        project: 'Solar Panel Installation',
        status: 'New',
        date: '2025-06-01',
        notes: 'Requested callback on Friday',
    },
    {
        name: 'Jane Smith',
        client: 'BrightFuture',
        project: 'Battery Setup',
        status: 'Contacted',
        date: '2025-06-02',
        notes: 'Interested in long-term maintenance',
    },
];

export default function LeadManagement() {
    const [statusFilter, setStatusFilter] = useState('');

    const filteredLeads = leads.filter(
        (lead) => !statusFilter || lead.status === statusFilter
    );

    return (
        <AdminLayout>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 space-y-6"
            >
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold">Lead Management</h1>
                    <Button variant="outline">
                        <Download className="mr-2 h-4 w-4" /> Export CSV
                    </Button>
                </div>

                <Card className="shadow">
                    <CardHeader>
                        <CardTitle>Filter Leads</CardTitle>
                    </CardHeader>
                    <CardContent className="flex gap-4 flex-wrap">
                        <Input placeholder="Search by client/project" className="w-full md:w-1/3" />
                        <Select onValueChange={setStatusFilter}>
                            <SelectTrigger className="md:w-1/4 w-full">
                                <Filter className="mr-2 h-4 w-4" /> Status
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value=" ">All</SelectItem>
                                <SelectItem value="New">New</SelectItem>
                                <SelectItem value="Contacted">Contacted</SelectItem>
                                <SelectItem value="Converted">Converted</SelectItem>
                            </SelectContent>
                        </Select>
                    </CardContent>
                </Card>

                <div className="grid gap-4">
                    {filteredLeads.map((lead, index) => (
                        <Card key={index} className="shadow">
                            <CardHeader>
                                <CardTitle>{lead.name}</CardTitle>
                                <p className="text-muted-foreground text-sm">
                                    {lead.client} — {lead.project} — {lead.date}
                                </p>
                            </CardHeader>
                            <CardContent className="space-y-3">
                                <p>Status: <span className="font-medium">{lead.status}</span></p>
                                <Textarea value={lead.notes} readOnly className="bg-muted text-foreground" />
                                <div className="flex gap-2">
                                    <Button variant="secondary">
                                        <MessageSquare className="h-4 w-4 mr-2" /> WhatsApp
                                    </Button>
                                    <Button variant="secondary">
                                        <Mail className="h-4 w-4 mr-2" /> Email
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </motion.div>
        </AdminLayout>
    );
}
