import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
// import { Button } from "@/components/ui/button";
import AdminLayout from "@/layouts/admin-layout";

export default function SettingsPage() {
    return (
        <AdminLayout>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="p-6 space-y-6"
            >
                <h1 className="text-3xl font-bold">Settings</h1>

                {/* Branding Settings */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle>Agency Branding</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label>Agency Name</Label>
                            <Input placeholder="Crisent Agency" />
                        </div>
                        <div>
                            <Label>Logo URL</Label>
                            <Input placeholder="https://yourdomain.com/logo.png" />
                        </div>
                        <div>
                            <Label>Primary Color</Label>
                            <Input type="color" defaultValue="#1D4ED8" />
                        </div>
                    </CardContent>
                </Card>

                {/* Automation Settings */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle>Automation Settings</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label>Email Automation</Label>
                            <Switch defaultChecked />
                        </div>
                        <div>
                            <Label>WhatsApp Notifications</Label>
                            <Switch />
                        </div>
                        <div>
                            <Label>SMS Alerts</Label>
                            <Switch />
                        </div>
                    </CardContent>
                </Card>

                {/* Custom Domain Config */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle>Custom Domain Configuration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label>Domain Name</Label>
                            <Input placeholder="youragency.crisent.com" />
                        </div>
                    </CardContent>
                </Card>

                {/* API & Integrations */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle>API Keys & Integrations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label>Stripe API Key</Label>
                            <Input type="password" placeholder="••••••••••" />
                        </div>
                        <div>
                            <Label>Google Analytics ID</Label>
                            <Input placeholder="UA-XXXXX-Y" />
                        </div>
                    </CardContent>
                </Card>

                {/* Notification Preferences */}
                <Card className="shadow">
                    <CardHeader>
                        <CardTitle>Notification Preferences</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div>
                            <Label>Enable Email Notifications</Label>
                            <Switch defaultChecked />
                        </div>
                        <div>
                            <Label>Enable Push Notifications</Label>
                            <Switch />
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </AdminLayout>
    );
}
