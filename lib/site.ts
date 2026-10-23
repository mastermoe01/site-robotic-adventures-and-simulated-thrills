// Every fact on the site lives here, sourced from the client's own website
// (roboticadventuresandsimulatedthrills.com, captured 2026-10-23) and The Observer News
// (2026-07-16). See clients/robotic-adventures-and-simulated-thrills/intake.md in the studio repo.

export const site = {
  name: "Robotic Adventures and Simulated Thrills",
  short: "Robotic Adventures",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://site-robotic-adventures-and-simulat.vercel.app",
  phones: [
    { display: "813-993-6483", tel: "+18139936483" },
    { display: "813-784-5543", tel: "+18137845543" },
  ],
  email: "roboticadventuresandthrills@gmail.com",
  /** Set a Formspree form ID to switch the contact form from mailto to Formspree. */
  formspreeId: "" as string,
  // City only, by the studio's decision: the published base is a residence.
  base: { city: "Valrico", region: "FL", zip: "33594" },
  serviceArea: "Brandon, Florida and surrounding areas",
  areaServed: ["Brandon", "Valrico", "Riverview", "Wesley Chapel", "Tampa Bay"],
  hours: [
    { days: "Mon – Fri", time: "9am – 5pm" },
    { days: "Saturday", time: "10am – 3pm" },
    { days: "Sunday", time: "Closed" },
  ],
  owner: "Vick Brown",
};

export const primaryPhone = site.phones[0];

export const ticket = { price: 15, minutes: 5 };

export const packages = [
  { name: "Bronze", robots: 1, kids: 20, perHour: 10, price: 400, save: 0 },
  { name: "Silver", robots: 2, kids: 40, perHour: 20, price: 600, save: 200 },
  { name: "Gold", robots: 3, kids: 60, perHour: 30, price: 800, save: 400 },
];

/** Client's published travel policy: first 20 mi one-way free; $2/mi on round-trip miles over 40. */
export const travel = { freeOneWay: 20, ratePerMile: 2 };
export const travelFee = (oneWayMiles: number) =>
  Math.max(0, oneWayMiles * 2 - travel.freeOneWay * 2) * travel.ratePerMile;
export const travelChart = [20, 25, 30, 35, 40, 45, 50];

export const eventTypes = [
  {
    title: "Birthday parties",
    body: "Make your child's birthday an epic event! Our robots provide exhilarating rides and interactive fun that will be the talk of the party.",
    cta: "Plan your party",
    photo: "16",
  },
  {
    title: "Summer camps",
    body: "Add a unique twist to your summer camp programming. Our robots offer an engaging and thrilling activity for campers of all ages.",
    cta: "See how we fit",
    photo: "21",
  },
  {
    title: "Festivals and special events",
    body: "Attract crowds and create buzz at your next festival or community event. Our impressive robots are a guaranteed hit and photo opportunity.",
    cta: "Explore event options",
    photo: "05",
  },
  {
    title: "Custom events",
    body: "Have a unique event in mind? We can tailor our robot entertainment to suit your specific needs, creating a custom thrilling experience.",
    cta: "Inquire about custom events",
    photo: "29",
  },
];

export type Robot = { slug: string; name: string; color: string; photos: string[]; alt: string };

// Robots are identified by their shell colors as seen in the client's photos; the client
// hasn't published names or per-unit specs.
export const robots: Robot[] = [
  { slug: "robot-red", name: "The Red Robot", color: "Red", photos: ["10", "16", "24", "02", "06", "12", "15"], alt: "red 8-foot ride-on robot" },
  { slug: "robot-yellow", name: "The Yellow Robot", color: "Yellow", photos: ["13", "27", "07", "04", "05", "17"], alt: "yellow 8-foot ride-on robot" },
  { slug: "robot-white", name: "The White Robot", color: "White", photos: ["26", "28", "01", "08"], alt: "white 8-foot ride-on robot" },
];

/** Photo dimensions after the studio's crop (public/photos/NN.jpg). */
export const photoSize: Record<string, [number, number]> = {
  "01": [1200, 1600], "02": [1200, 1600], "04": [1200, 1600], "05": [1200, 1600], "06": [900, 1600],
  "07": [900, 1600], "08": [900, 1600], "09": [900, 1600], "10": [900, 1600], "11": [900, 1600],
  "12": [900, 1600], "13": [900, 1600], "14": [900, 1600], "15": [900, 1600], "16": [900, 1600],
  "17": [900, 1600], "18": [900, 1600], "19": [900, 1600], "20": [1080, 1440], "21": [900, 1600],
  "22": [900, 1600], "23": [900, 1600], "24": [900, 1600], "25": [900, 1600], "26": [900, 1600],
  "27": [900, 1600], "28": [900, 1600], "29": [900, 1600],
};

export const photoAlt: Record<string, string> = {
  "01": "Child riding the white robot in a shopping-plaza parking lot",
  "02": "Rider in the red robot outside Ford's Garage",
  "04": "Adult and child riding the yellow robot together",
  "05": "Yellow robot at an outdoor festival",
  "06": "Girl at the controls of the red robot, LED base lit, at a park event",
  "07": "Adult and child riding the yellow robot",
  "08": "Boy steering the white robot",
  "09": "Yellow and red robots on a palm-lined promenade",
  "10": "Girl seated in the cockpit of the red robot under a blue sky",
  "11": "Red robot rolling down a palm-lined promenade",
  "12": "Boy riding the red robot",
  "13": "Boy at the joysticks of the yellow robot",
  "14": "Two robots giving rides on a sunny promenade",
  "15": "Adult guiding a young rider on the red robot",
  "16": "Riders sharing the red robot's cockpit",
  "17": "Child riding the yellow robot past a shade sail",
  "18": "Yellow and red robots side by side with riders",
  "19": "Yellow robot giving a ride past waterfront buildings",
  "20": "Yellow and red robots with riders on a lawn-edged walkway",
  "21": "Families lining up for robot rides",
  "22": "The Robotic Adventures tent with riders signing up",
  "23": "Yellow and red robots on the promenade under summer clouds",
  "24": "Boy in a green shirt riding the red robot at a park",
  "25": "Red and yellow robots giving rides in a park lot",
  "26": "Girl riding the white robot",
  "27": "Adult and child riding the yellow robot",
  "28": "Boy in a ball cap riding the white robot",
  "29": "White and red robots on a playground court",
};

export const ourRobots = [
  "Our cutting-edge robotic rides represent the pinnacle of interactive event entertainment, meticulously engineered to combine high-tech visual appeal with smooth, thrilling motion. Designed to look and feel like futuristic machinery straight out of a science fiction world, these advanced robots captivate crowds before the ride even begins. Built with uncompromising safety standards and robust construction, they feature intuitive controls and comfortable seating that allow riders to experience an immersive, dynamic simulation. Their specialized design ensures a smooth, controlled performance that delivers an unforgettable adrenaline rush while maintaining a completely safe environment for participants.",
  "Designed with seamless mobility in mind, these robots are engineered to adapt beautifully to a wide variety of flat, hard surfaces, making them the ultimate mobile attraction. Whether operating on a school blacktop, a paved parking lot, or a local park's concrete basketball court, the units are highly stable and optimized for steady, efficient performance. Because they are built to handle consistent rotation, our robots easily maintain a smooth, steady throughput of ten riders per hour, allowing for quick, safe onboarding and offboarding. They are a true marvel of modern mechanical entertainment, turning any flat open space into a premium, futuristic amusement park experience",
];

export const servicesOffered = [
  {
    title: "Unmatched Individual and Pop-Up Experiences",
    body: "For public gatherings, community festivals, and exclusive pop-up locations, Robotic Adventures and Simulated Thrills offers accessible individual ride options that serve as a major attraction. For a highly affordable rate, riders can experience an action-packed, five-minute session of pure kinetic excitement. This setup is specifically engineered to inject dynamic energy into local fairs, holiday markets, and neighborhood celebrations, providing a unique novelty that standard event vendors simply cannot match. It is a seamless way for guests to sample the future of amusement on an individual, flexible basis.",
  },
  {
    title: "Premium All-Inclusive Group Packages",
    body: "When it comes to hosting a private milestone, the company provides comprehensive group packages designed to take the stress out of event planning. Offering customizable tiers featuring one, two, or three interactive robots, these all-inclusive bookings are perfectly structured around a convenient two-hour minimum. This structure ensures a steady, high-energy flow of entertainment that can effortlessly accommodate anywhere from 20 to 60 children per session. It is the ultimate plug-and-play solution for parents, school administrators, and camp directors looking to deliver an extraordinary, high-capacity experience.",
  },
  {
    title: "Mastered Efficiency and Seamless Throughput",
    body: "What truly sets Robotic Adventures apart is its expertly calculated operational pacing, which maximizes fun while eliminating long, stagnant wait times. By managing guest capacities at a highly efficient rate of ten children per robot per hour, the company ensures that every single rider enjoys a complete, unhurried five-minute experience. This careful scheduling builds in a comfortable buffer for swift, safe onboarding and offboarding transitions. As a result, hosts can relax knowing that their event logistics will run like clockwork, keeping the crowd thrilled and the lines moving perfectly.",
  },
  {
    title: "Ultimate Mobility and Venue Flexibility",
    body: "Engineered for total convenience, Robotic Adventures and Simulated Thrills is a fully mobile operation that brings the entire amusement experience straight to a client's chosen venue. From private driveways and school blacktops to corporate plazas and public parks, the setup is highly versatile, requiring only a hard, completely level surface like a concrete pad or basketball court to operate safely. By taking care of the technical heavy lifting and working closely with clients on park approval guidelines, the team ensures a flawless, professional installation every single time, making world-class simulation technology accessible right in your backyard.",
  },
];

// The client's FAQ, verbatim (their "Event Gallery" page).
export const faq: { group: string; items: { q: string; a: string[] }[] }[] = [
  {
    group: "The robots",
    items: [
      { q: "What are these robots called?", a: ["They are typically marketed as “Walking Robot Rides,” “Ride-on Robot Suits,” or “Mecha Rides.” Because of their aesthetic, they are often nicknamed “Iron Man Robots” or “Transformer Rides.”"] },
      { q: "How do they move?", a: ["Despite looking like they “walk,” most models actually move on heavy-duty wheels hidden in the base. They can move forward, backward, and rotate 360 degrees."] },
      { q: "What materials are they made of?", a: ["The exterior is usually made of Fiberglass Reinforced Plastic (FRP), which allows for the high-detail “armor” look while being durable and lightweight."] },
    ],
  },
  {
    group: "Operation & safety",
    items: [
      { q: "How do you control the robot?", a: ["The rider uses dual joysticks located on the armrests. Pushing both forward moves the robot ahead; pushing one or moving them in opposite directions allows for turning and spinning."] },
      {
        q: "Is there an age or weight limit?",
        a: [
          "Age: Usually designed for children aged 4 and up. Younger children typically need to be accompanied by an adult (many models have a “double seat” configuration).",
          "Weight: Most standard units can support between 100kg to 150kg (approx. 220–330 lbs), allowing a parent and child to ride together.",
        ],
      },
      { q: "Are they safe for indoor use?", a: ["Yes. They are equipped with ultrasonic sensor systems that detect obstacles. If the robot gets too close to a wall or a person, it will automatically stop to prevent a collision."] },
    ],
  },
  {
    group: "Features & maintenance",
    items: [
      { q: "How long does the battery last?", a: ["On a full charge (usually 6–8 hours), most robots can operate continuously for 4 to 6 hours."] },
      {
        q: "Do they have special effects?",
        a: [
          "Yes, they almost always feature:",
          "Dynamic LED Lighting: RGB lights that change color during operation.",
          "Built-in Audio: They play themed music or “robotic” sound effects via an SD card slot or Bluetooth.",
          "Interactive Screens: Some models have a small dashboard screen showing battery life and ride time.",
        ],
      },
      { q: "How are they started?", a: ["Operators usually start them via Remote Control, though some are set up to use card readers or coin slots for self-service."] },
    ],
  },
];

export const setupRequirements = {
  surface:
    "The setup area must be a hard, completely flat surface. Ideal surfaces include basketball courts, paved parking lots, or flat concrete pads. (Grass, dirt, or loose gravel surfaces are not compatible).",
  parks:
    "If your event is held at a public park, you must secure prior approval and any necessary permits from the park's management or local parks and recreation department.",
  venues: "We happily set up at private residences, schools, business venues, and local public parks.",
};

export const press = {
  outlet: "The Observer News",
  title: "Interactive robot rides bring futuristic fun to community events",
  author: "Linda Chion",
  date: "2026-07-16",
  url: "https://observernews.net/article.php?slug=interactive-robot-rides-bring-futuristic-fun-to-community-events",
  quote: "When you sit inside the robot with joystick in hand, you literally are at the controls.",
  quoteBy: "Betty Jo Tompkins",
  quoteRole: "Executive board member, Greater Hillsborough County Fair Association",
};

export const vimeo = [
  { id: "1197112869", ratio: "9 / 16", seconds: 67 },
  { id: "1212689913", ratio: "276 / 240", seconds: 63 },
  { id: "1212815504", ratio: "9 / 16", seconds: 47 },
];

export type ScheduleItem = {
  date: string; // ISO, local
  title: string;
  kind?: string;
  address?: string;
  time?: string;
  private?: boolean;
};

// Next Event page, as published 2026-10-23. Past dates hide automatically on the client.
export const schedule: ScheduleItem[] = [
  { date: "2026-10-14", title: "Wiregrass Mall – Wesley Chapel", kind: "Festival", address: "28211 Pasco Dr, Wesley Chapel, FL 33543", time: "5:30pm – 9:30pm" },
  { date: "2026-10-23", title: "Dade City", kind: "Street Bash", address: "Dade City, FL", time: "5pm – 9pm" },
  { date: "2026-10-24", title: "Flooring Master (Riverview)", kind: "Truck or Treat", address: "11531 Balm Riverview Rd, Riverview, FL", time: "12pm – 4pm" },
  { date: "2026-10-25", title: "Halloween on Central – St Pete", address: "Central Ave, 9th St to 31st, St. Petersburg, FL", time: "12:00pm – 5:00pm" },
  { date: "2026-10-30", title: "Riverview", kind: "Trunk-or-Treat", address: "12424 Summerfield Blvd, Riverview, FL 33569", time: "5pm – 8pm" },
  { date: "2026-10-31", title: "Private Event", private: true },
  { date: "2026-11-01", title: "Private Event", private: true },
  { date: "2026-11-07", title: "Majibel Pop Event (Riverview)", address: "11525 Big Bend Rd, Riverview, FL", time: "11am – 3pm" },
  { date: "2026-11-11", title: "Wiregrass Market", kind: "Festival", address: "28211 Pasco Dr, Wesley Chapel, FL 33543", time: "5:30pm – 9:30pm" },
];

export const nav = [
  { href: "/robots", label: "Robots" },
  { href: "/pricing", label: "Pricing" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const mapsLink = (q: string) => `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(q)}`;
