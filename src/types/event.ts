export interface ProgramItem {
    time: string;
    title: string;
    description?: string;
    speaker?: string;
    language?: string;
    type?: 'intro' | 'lightning' | 'main' | 'social' | 'doors';
}

export interface OrgaMember {
    name: string;
    role: string;
    image: string;
}

export interface Sponsor {
    name: string;
    logo: string;
    link: string;
}

export interface EventData {
    title: string;
    date?: string;
    location: {
        name: string;
        address: string;
        mapsUrl: string;
    };
    program: ProgramItem[];
    image?: string;
}

export interface DownloadLinkData {
    label: string;
    href: string;
}
