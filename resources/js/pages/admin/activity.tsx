import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FileTextIcon } from "lucide-react";
import AdminLayout from "@/layouts/admin-layout";
import { AuditRequest, PageProps } from "@/types"; // Ensure this includes `audits`
import { usePage } from "@inertiajs/react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea"
import axios from "axios";
import { toast } from "sonner";

export default function AuditLogsPage() {
    const { props } = usePage<PageProps>();
    const audits = props.audits ?? [];
    const [applyFilter, setApplyFilter] = useState(false);
    const [loading, setLoading] = useState(false);
    const [attachment, setAttachment] = useState<File | null>(null);


    const [filters, setFilters] = useState({
        user: "",
        date: "",
        action: ""
    });

    const filteredAudits = audits.filter((audit: any) => {
        const matchUser = audit.name.toLowerCase().includes(filters.user.toLowerCase());
        const matchDate = filters.date ? audit.created_at.startsWith(filters.date) : true;
        const matchAction = filters.action
            ? "Submitted Audit".toLowerCase().includes(filters.action.toLowerCase()) // fixed action since it's static
            : true;
        return matchUser && matchDate && matchAction;
    });

    // const displayedAudits = applyFilter ? filteredAudits : audits;

    const [selectedAudit, setSelectedAudit] = useState<AuditRequest | null>(null);
    const [responseMessage, setResponseMessage] = useState("");
    const [open, setOpen] = useState(false);

    const openResponseModal = (audit) => {
        setSelectedAudit(audit);
        setOpen(true);
    };

    const sendResponse = async () => {
        if (!selectedAudit) return;

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("message", responseMessage);
            if (attachment) formData.append("attachment", attachment);

            await axios.post(`/admin/audits/${selectedAudit.id}/respond`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            });

            toast.success("Response sent successfully");
            setOpen(false);
            setResponseMessage("");
            setAttachment(null);
        } catch (err) {
            console.error(err);
            toast.error("Failed to send response");
        } finally {
            setLoading(false);
        }
    };
      


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
                                <Input
                                    placeholder="Enter user name"
                                    value={filters.user}
                                    onChange={(e) => setFilters({ ...filters, user: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label>Date</Label>
                                <Input
                                    type="date"
                                    value={filters.date}
                                    onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                                />
                            </div>
                            <div>
                                <Label>Action</Label>
                                <Input
                                    placeholder="e.g. Edited, Deleted, Created"
                                    value={filters.action}
                                    onChange={(e) => setFilters({ ...filters, action: e.target.value })}
                                />
                            </div>
                        </div>

                        <Button
                            onClick={() => setApplyFilter(true)}
                            className="dark:text-white"
                        >
                            Filter Logs
                        </Button>

                        <div className="overflow-auto mt-6">
                            <table className="min-w-full table-auto border border-gray-200 text-sm">
                                <thead>
                                    <tr className="bg-muted text-left">
                                        <th className="p-3 border-b">User</th>
                                        <th className="p-3 border-b">User Action</th>
                                        <th className="p-3 border-b">Date</th>
                                        <th className="p-3 border-b">Details</th>
                                        <th className="p-3 border-b">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {audits.length > 0 ? (
                                        filteredAudits.map((audit: any) => (
                                            <tr key={audit.id} className="hover:bg-muted/50">
                                                <td className="p-3 border-b">{audit.name}</td>
                                                <td className="p-3 border-b">Submitted Audit</td>
                                                <td className="p-3 border-b">{new Date(audit.created_at).toLocaleDateString()}</td>
                                                <td className="p-3 border-b">
                                                    <div className="text-sm">
                                                        <p><strong>Email:</strong> {audit.email}</p>
                                                        <p><strong>Website:</strong> {audit.website}</p>
                                                        <p><strong>Struggle:</strong> {audit.struggle}</p>
                                                    </div>
                                                </td>
                                                <td className="p-3 border-b">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        onClick={() => openResponseModal(audit)}
                                                    >
                                                        Respond
                                                    </Button>
                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={4} className="p-3 text-center text-muted-foreground">
                                                No audit requests found.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>

                            </table>
                        </div>
                    </CardContent>
                </Card>
                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent className="space-y-4">
                        <DialogHeader>
                            <DialogTitle>Respond to {selectedAudit?.name}</DialogTitle>
                        </DialogHeader>

                        <div className="space-y-2">
                            <Label htmlFor="response-message">Message</Label>
                            <Textarea
                                id="response-message"
                                value={responseMessage}
                                onChange={(e) => setResponseMessage(e.target.value)}
                                placeholder="Type your response here..."
                                rows={6}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="attachment">Attach File (optional)</Label>
                            <Input
                                id="attachment"
                                type="file"
                                accept=".pdf,.doc,.docx,.png,.jpg,.jpeg"
                                onChange={(e) => {
                                    if (e.target.files?.[0]) {
                                        setAttachment(e.target.files[0]);
                                    }
                                }}
                            />
                        </div>

                        <Button
                            onClick={sendResponse}
                            className="mt-4 dark:text-white"
                            disabled={loading}
                        >
                            {loading ? "Sending..." : "Send Response"}
                        </Button>
                    </DialogContent>
                </Dialog>
            </motion.div>
        </AdminLayout>
    );
}
