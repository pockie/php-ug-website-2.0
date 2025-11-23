import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

/**
 * Loads all events and sorts them chronologically (newest first)
 * @returns Promise<CollectionEntry<'events'>[]> - Sorted events
 */
export async function getSortedEvents(): Promise<CollectionEntry<'events'>[]> {
    const allEvents = await getCollection('events');
    
    return allEvents.sort((a: any, b: any) => {
        const dateA = new Date(a.data.date || '1970-01-01');
        const dateB = new Date(b.data.date || '1970-01-01');
        return dateB.getTime() - dateA.getTime(); // Newest events first
    });
}

/**
 * Loads events and filters them based on a specific criterion
 * @param filterFn - Filter function
 * @returns Promise<CollectionEntry<'events'>[]> - Filtered and sorted events
 */
export async function getFilteredEvents(
    filterFn: (event: CollectionEntry<'events'>) => boolean
): Promise<CollectionEntry<'events'>[]> {
    const sortedEvents = await getSortedEvents();
    return sortedEvents.filter(filterFn);
}

/**
 * Load only upcoming events (from today onwards)
 * @returns Promise<CollectionEntry<'events'>[]> - Upcoming events
 */
export async function getUpcomingEvents(): Promise<CollectionEntry<'events'>[]> {
    const now = new Date();
    return getFilteredEvents(event => {
        const eventDate = new Date(event.data.date || '1970-01-01');
        return eventDate >= now;
    });
}

/**
 * Load only past events (before today)
 * @returns Promise<CollectionEntry<'events'>[]> - Past events
 */
export async function getPastEvents(): Promise<CollectionEntry<'events'>[]> {
    const now = new Date();
    return getFilteredEvents(event => {
        const eventDate = new Date(event.data.date || '1970-01-01');
        return eventDate < now;
    });
}