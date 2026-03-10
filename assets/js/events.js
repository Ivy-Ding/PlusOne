import { PREFERENCES } from "./preferences.js"

const MOCK_ATTENDEES = [
    { peopleId: "p1", preference: PREFERENCES.FULL },
    { peopleId: "p2", preference: PREFERENCES.PARTIAL },
    { peopleId: "p3", preference: PREFERENCES.TRANSIT_ONLY },
    { peopleId: "p4", preference: PREFERENCES.TRANSIT_ONLY },
    { peopleId: "p5", preference: PREFERENCES.FULL },
    { peopleId: "p6", preference: PREFERENCES.PARTIAL },
    { peopleId: "p7", preference: PREFERENCES.TRANSIT_ONLY },
    { peopleId: "p8", preference: PREFERENCES.PARTIAL },
    { peopleId: "p9", preference: PREFERENCES.FULL },
    { peopleId: "p10", preference: PREFERENCES.PARTIAL },
    { peopleId: "p11", preference: PREFERENCES.TRANSIT_ONLY },
    { peopleId: "p12", preference: PREFERENCES.FLEXIBLE },
    { peopleId: "p13", preference: PREFERENCES.FLEXIBLE },

];

export const events = [
  {
    id: "event1",
    name: "Beach Festival",
    description:
      "A chill day at the beach with music, food trucks, and games. Good place to hang out and meet new people.",
    image: "assets/images/homepage/image1.png",
    eventDate: "2026-02-23",
    time: "3:00 PM",
    postedByName: "John Doe",
    location: "123 Blvd",
    people: MOCK_ATTENDEES,
    isViewed: false,
  },

  {
    id: "event2",
    name: "Basketball Tournament",
    description:
      "Local basketball tournament at the rec center. Come watch some games or join a team if there's space.",
    image: "assets/images/homepage/image2.png",
    eventDate: "2026-02-28",
    time: "5:00 PM",
    postedByName: "Jane Doe",
    location: "234 Blvd",
    people: MOCK_ATTENDEES,
    isViewed: true,
  },

  {
    id: "event3",
    name: "Movie Night",
    description:
      "We're watching whiplash and just hanging out. Snacks and drinks will be there too.",
    image: "assets/images/homepage/image3.png",
    eventDate: "2026-02-28",
    time: "7:00 PM",
    postedByName: "Sarah Doe",
    location: "345 Blvd",
    people: MOCK_ATTENDEES,
    isViewed: false,
  },

  {
    id: "event4",
    name: "Gaming Tournament",
    description:
      "Small gaming tournament with a few different games. Mostly just for fun, but there might be prizes.",
    image: "assets/images/homepage/image4.png",
    eventDate: "2026-02-28",
    time: "8:00 PM",
    postedByName: "Marcus Doe",
    location: "456 Blvd",
    people: MOCK_ATTENDEES,
    isViewed: false,
  },

  {
    id: "event5",
    name: "Campus Karaoke Night",
    description:
      "A fun karaoke night with open mic performances, snacks, and a laid-back crowd. Good vibes whether you're singing or just watching.",
    image: "assets/images/homepage/image5.png",
    eventDate: "2026-03-12",
    time: "6:30 PM",
    postedByName: "Emily Chen",
    location: "University Centre Lounge",
    people: MOCK_ATTENDEES,
    isViewed: false,
  },
  {
    id: "event6",
    name: "Food Truck Friday",
    description:
      "A casual evening with different food trucks, music, and outdoor seating. Easy spot to grab food and meet up with people.",
    image: "assets/images/homepage/image6.png",
    eventDate: "2026-03-13",
    time: "4:00 PM",
    postedByName: "Chris Martin",
    location: "Downtown Plaza",
    people: MOCK_ATTENDEES,
    isViewed: true,
  },
  {
    id: "event7",
    name: "Art & Paint Social",
    description:
      "A relaxed paint session where everyone can create something while hanging out. Supplies are provided and no experience is needed.",
    image: "assets/images/homepage/image7.png",
    eventDate: "2026-03-15",
    time: "2:00 PM",
    postedByName: "Maya Johnson",
    location: "88 River Ave",
    people: MOCK_ATTENDEES,
    isViewed: false,
  },
  {
    id: "event8",
    name: "Late Night Soccer",
    description:
      "Friendly pickup soccer under the lights. Come play, watch, or just chill with people after class.",
    image: "assets/images/homepage/image8.png",
    eventDate: "2026-03-16",
    time: "9:00 PM",
    postedByName: "David Ali",
    location: "North Field",
    people: MOCK_ATTENDEES,
    isViewed: false,
  },
  {
    id: "event9",
    name: "Coffee & Board Games",
    description:
      "Board games, coffee, and a super easygoing setup for meeting people. Perfect if you want something low-pressure and social.",
    image: "assets/images/homepage/image9.png",
    eventDate: "2026-03-18",
    time: "5:30 PM",
    postedByName: "Nina Patel",
    location: "Bean Corner Cafe",
    people: MOCK_ATTENDEES,
    isViewed: true,
  },
  {
    id: "event10",
    name: "Sunset Picnic",
    description:
      "An evening picnic with music, snacks, and space to relax on the grass. Bring a blanket and come hang out.",
    image: "assets/images/homepage/image10.png",
    eventDate: "2026-03-20",
    time: "7:00 PM",
    postedByName: "Alex Brown",
    location: "City Park Hill",
    people: MOCK_ATTENDEES,
    isViewed: false,
  }
];
