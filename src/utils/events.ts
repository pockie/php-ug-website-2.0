import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

/**
 * Lädt alle Events und sortiert sie chronologisch (neueste zuerst)
 * @returns Promise<CollectionEntry<'events'>[]> - Sortierte Events
 */
export async function getSortedEvents(): Promise<CollectionEntry<'events'>[]> {
    const allEvents = await getCollection('events');
    
    return allEvents.sort((a, b) => {
        const dateA = new Date(a.data.date || '1970-01-01');
        const dateB = new Date(b.data.date || '1970-01-01');
        return dateB.getTime() - dateA.getTime(); // Neueste Events zuerst
    });
}

/**
 * Lädt Events und filtert sie nach einem bestimmten Kriterium
 * @param filterFn - Filterfunktion
 * @returns Promise<CollectionEntry<'events'>[]> - Gefilterte und sortierte Events
 */
export async function getFilteredEvents(
    filterFn: (event: CollectionEntry<'events'>) => boolean
): Promise<CollectionEntry<'events'>[]> {
    const sortedEvents = await getSortedEvents();
    return sortedEvents.filter(filterFn);
}