export interface ProgramItem {
    time: string;
    title: string;
    description?: string;
    speaker?: string;
    language?: string;
    type?: 'intro' | 'lightning' | 'main' | 'social' | 'doors';
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