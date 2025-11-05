import { Sermon, Event, Pastor, GalleryImage } from './types';

export const SERMONS_DATA: Sermon[] = [
  {
    id: 1,
    title: 'The Foundation of Faith',
    speaker: 'Pastor John Mark',
    series: 'Foundations',
    date: '2024-07-21',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // Placeholder
    audioUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
    thumbnailUrl: 'https://picsum.photos/seed/sermon1/600/400',
    description: 'Exploring the core tenets of Christian belief and how they apply to our daily lives.'
  },
  {
    id: 2,
    title: 'Grace in Action',
    speaker: 'Pastor Sarah Lee',
    series: 'Living Out Loud',
    date: '2024-07-14',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    audioUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
    thumbnailUrl: 'https://picsum.photos/seed/sermon2/600/400',
    description: 'How do we extend grace to others as it has been extended to us? A practical look at living a life of grace.'
  },
  {
    id: 3,
    title: 'Building Community',
    speaker: 'Pastor John Mark',
    series: 'Foundations',
    date: '2024-07-07',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    audioUrl: 'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
    thumbnailUrl: 'https://picsum.photos/seed/sermon3/600/400',
    description: 'Discover the importance of fellowship and how we can build stronger bonds within our church family.'
  },
  // Add more sermons
];

export const EVENTS_DATA: Event[] = [
  {
    id: 1,
    title: 'Annual Summer Picnic',
    date: '2024-08-10',
    time: '12:00 PM - 4:00 PM',
    location: 'Central Park, Meadow',
    imageUrl: 'https://picsum.photos/seed/event1/600/400',
    description: 'Join us for a day of fun, food, and fellowship at our much-anticipated Annual Summer Picnic! This is a wonderful opportunity for our church family to connect in a relaxed and joyful setting. We\'ll have a delicious BBQ lunch with options for everyone, exciting games for kids and adults alike (including a three-legged race and volleyball), and plenty of space to just relax and chat. Please bring a dessert to share if you can. We can\'t wait to see you there!',
    category: 'Community',
    registrationUrl: '#',
    calendarLink: '#',
  },
  {
    id: 2,
    title: 'Youth Group Lock-In',
    date: '2024-08-23',
    time: '8:00 PM - 7:00 AM',
    location: 'Church Youth Hall',
    imageUrl: 'https://picsum.photos/seed/event2/600/400',
    description: 'An overnight event for our youth (grades 6-12) filled with games, movies, worship, and pizza. Sign up required.',
    category: 'Youth',
    registrationUrl: '#',
  },
  {
    id: 3,
    title: 'Worship & Prayer Night',
    date: '2024-07-31',
    time: '7:00 PM - 8:30 PM',
    location: 'Main Sanctuary',
    imageUrl: 'https://picsum.photos/seed/event3/600/400',
    description: 'A special evening dedicated to extended worship and prayer for our church, community, and world.',
    category: 'Worship',
  },
];

export const PASTORS_DATA: Pastor[] = [
  {
    id: 1,
    name: 'John Mark',
    title: 'Lead Pastor',
    imageUrl: 'https://picsum.photos/seed/pastor1/400/400',
    bio: 'Pastor John has been leading Community Grace Church for over 15 years. With a passion for teaching and a heart for people, he loves seeing lives transformed by the Gospel. He enjoys hiking and spending time with his wife and three children.'
  },
  {
    id: 2,
    name: 'Sarah Lee',
    title: 'Associate Pastor',
    imageUrl: 'https://picsum.photos/seed/pastor2/400/400',
    bio: 'Pastor Sarah oversees our community outreach and small groups. She is dedicated to helping people find their place in the church family and use their gifts to serve others. In her free time, she loves to read and try new coffee shops.'
  },
  {
    id: 3,
    name: 'David Chen',
    title: 'Youth Pastor',
    imageUrl: 'https://picsum.photos/seed/pastor3/400/400',
    bio: 'Pastor David leads our vibrant youth ministry. He is committed to creating a fun and safe environment where students can grow in their faith and build lasting friendships. He\'s an avid basketball fan and a master of board games.'
  },
];

export const GALLERY_DATA: GalleryImage[] = [
  { id: 1, album: 'Summer Picnic 2023', alt: 'Church members enjoying picnic', imageUrl: 'https://picsum.photos/seed/gallery1/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery1/400/300' },
  { id: 2, album: 'Summer Picnic 2023', alt: 'Kids playing games at picnic', imageUrl: 'https://picsum.photos/seed/gallery2/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery2/400/300' },
  { id: 3, album: 'Christmas Service 2023', alt: 'Candlelight Christmas service', imageUrl: 'https://picsum.photos/seed/gallery3/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery3/400/300' },
  { id: 4, album: 'Christmas Service 2023', alt: 'Church choir singing carols', imageUrl: 'https://picsum.photos/seed/gallery4/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery4/400/300' },
  { id: 5, album: 'Youth Camp 2024', alt: 'Youth group around a campfire', imageUrl: 'https://picsum.photos/seed/gallery5/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery5/400/300' },
  { id: 6, album: 'Youth Camp 2024', alt: 'Students participating in a team-building activity', imageUrl: 'https://picsum.photos/seed/gallery6/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery6/400/300' },
  { id: 7, album: 'Community Outreach', alt: 'Volunteers at a local food bank', imageUrl: 'https://picsum.photos/seed/gallery7/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery7/400/300' },
  { id: 8, album: 'Community Outreach', alt: 'Church members cleaning a park', imageUrl: 'https://picsum.photos/seed/gallery8/800/600', thumbnailUrl: 'https://picsum.photos/seed/gallery8/400/300' },
];