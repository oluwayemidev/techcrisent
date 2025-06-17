import { LucideIcon } from 'lucide-react';
import type { Config } from 'ziggy-js';

export interface Auth {
    user: User;
}
export interface PageProps {
    title?: string;
    description?: string;
    keywords?: string[];
    breadcrumbs?: BreadcrumbItem[];
    navGroups?: NavGroup[];
    auth?: Auth;
    audits?: AuditRequest[];
    ziggy?: Config & { location: string };
    sharedData?: SharedData;
    [key: string]: unknown; // This allows for additional properties...
    flash?: {
        success?: string;
        error?: string;
        warning?: string;
        info?: string;
    };
    errors?: Record<string, string[]>;
    props?: Record<string, unknown>;
    initialPage?: {
        component: string;
        props: Record<string, unknown>;
        url: string;
        version: string;
        [key: string]: unknown; // This allows for additional properties...
    };
    inertia?: {
        version: string;
        page: {
            component: string;
            props: Record<string, unknown>;
            url: string;
            version: string;
            [key: string]: unknown; // This allows for additional properties...
        };
        [key: string]: unknown; // This allows for additional properties...
    };
}
export interface AuditRequest {
    id: number;
    name: string;
    email: string;
    website: string;
    struggle: string | null;
    created_at: string;
    updated_at: string;
}
export interface BreadcrumbItem {
    title: string;
    href: string;
}

export interface NavGroup {
    title: string;
    items: NavItem[];
}

export interface NavItem {
    title: string;
    href: string;
    icon?: LucideIcon | null;
    isActive?: boolean;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    ziggy: Config & { location: string };
    sidebarOpen: boolean;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}
