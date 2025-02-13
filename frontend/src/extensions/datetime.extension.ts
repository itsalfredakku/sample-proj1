// Extend the Date interface to include our new methods
declare global {
    interface Date {
        toAge(): number;
        timeAgo(): string;
        timeFrom(): string;
    }
}

export function toAge(this: Date): number {
    const today = new Date();
    let age = today.getFullYear() - this.getFullYear();
    const monthDifference = today.getMonth() - this.getMonth();
    if (
        monthDifference < 0 ||
        (monthDifference === 0 && today.getDate() < this.getDate())
    ) {
        age--;
    }
    return age;
}

export function timeAgo(this: Date): string {
    const seconds = Math.floor((new Date().getTime() - this.getTime()) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return interval + " years ago";
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return interval + " months ago";
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return interval + " days ago";
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return interval + " hours ago";
    interval = Math.floor(seconds / 60);
    if (interval > 1) return interval + " minutes ago";
    return seconds + " seconds ago";
}

export function timeFrom(this: Date): string {
    const seconds = Math.floor((this.getTime() - new Date().getTime()) / 1000);
    let interval = Math.floor(seconds / 31536000);
    if (interval > 1) return "in " + interval + " years";
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) return "in " + interval + " months";
    interval = Math.floor(seconds / 86400);
    if (interval > 1) return "in " + interval + " days";
    interval = Math.floor(seconds / 3600);
    if (interval > 1) return "in " + interval + " hours";
    interval = Math.floor(seconds / 60);
    if (interval > 1) return "in " + interval + " minutes";
    return "in " + seconds + " seconds";
}

// Attach the functions to Date.prototype so they're available on all Date instances.
Date.prototype.toAge = toAge;
Date.prototype.timeAgo = timeAgo;
Date.prototype.timeFrom = timeFrom;

export {}; // Ensure this is a module