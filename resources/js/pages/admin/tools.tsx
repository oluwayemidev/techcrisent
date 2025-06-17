import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
// import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { RocketIcon, ZapIcon, ActivityIcon, SearchIcon, ShieldIcon } from "lucide-react";
import AdminLayout from "@/layouts/admin-layout";

export default function ToolsPage() {
    return (
        <AdminLayout>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 space-y-6"
            >
                <h1 className="text-3xl font-bold">Tools / Utilities</h1>

                {/* SEO Scanner */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <SearchIcon size={20} /> SEO Scanner
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Label>Website URL</Label>
                        <Input placeholder="https://yourdomain.com" />
                        <Button className="dark:text-white">Scan SEO</Button>
                    </CardContent>
                </Card>

                {/* Site Speed Tester */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ZapIcon size={20} /> Site Speed Tester
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Label>Website URL</Label>
                        <Input placeholder="https://yourdomain.com" />
                        <Button className="dark:text-white">Test Speed</Button>
                    </CardContent>
                </Card>

                {/* Funnel Audit Tool */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <RocketIcon size={20} /> Funnel Audit Tool
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Label>Landing Page URL</Label>
                        <Input placeholder="https://yourlandingpage.com" />
                        <Button className="dark:text-white">Run Audit</Button>
                    </CardContent>
                </Card>

                {/* Website Health Checks */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ShieldIcon size={20} /> Website Health Checks
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Label>Domain</Label>
                        <Input placeholder="yourdomain.com" />
                        <Button className="dark:text-white">Check Health</Button>
                    </CardContent>
                </Card>

                {/* AI Copy Generator */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <ActivityIcon size={20} /> AI Copy Generator
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Label>Topic</Label>
                        <Input placeholder="e.g., Best Solar Panels 2025" />
                        <Label>Description</Label>
                        <Textarea placeholder="Brief about the content you want to generate..." rows={4} />
                        <Button className="dark:text-white">Generate Copy</Button>
                    </CardContent>
                </Card>
            </motion.div>
        </AdminLayout>
    );
}
