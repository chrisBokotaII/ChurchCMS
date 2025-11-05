export interface Sermon {
  id: number;
  title: string;
  speaker: string;
  series: string;
  date: string;
  videoUrl: string;
  audioUrl: string;
  thumbnailUrl: string;
  description: string;
}

export interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
  description: string;
  category: 'Community' | 'Youth' | 'Worship' | 'Outreach';
  registrationUrl?: string;
  calendarLink?: string;
}

export interface Pastor {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}

export interface GalleryImage {
  id: number;
  imageUrl: string;
  thumbnailUrl: string;
  alt: string;
  album: string;
}