import { Building2, Check, Hammer, Ruler } from 'lucide-react';

const imageBase = 'https://images.unsplash.com';

export const navigation = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

// Full Google Maps links. Avoid maps.app.goo.gl short links: Google retired its goo.gl
// shortener and those links can fail to open.
const officeAddress = 'Rajkumaran Builders Pvt Ltd, 23, Chetty Street, Porur, Chennai 600116';
// Opens the office on Google Maps.
export const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(officeAddress)}`;
// Opens Google Maps directions to the office.
export const directionsLink = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(officeAddress)}`;

export const socialLinks = {
  facebook: 'https://www.facebook.com/Rajkumarbuilders03/',
  instagram: 'https://www.instagram.com/rajkumar_builders_/',
  youtube: 'https://www.youtube.com/@rajkumarbuilders',
};

export const services = [
  { icon: Building2, number: '01', title: 'Building Construction and Consultancy', image: `${imageBase}/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=85`, text: 'Working with tasks related to project management, inspecting the work of construction contractors, advising on sustainability, giving advice, and helping develop the project.' },
  { icon: Hammer, number: '02', title: 'Renovation and Retrofitting', image: `${imageBase}/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1400&q=85`, text: 'Restoring or repairing a structure back to a good or "like new" condition to improve the functionality of a building by adding new technology, whereas remodeling centers around aesthetics.' },
  { icon: Ruler, number: '03', title: 'Architectural and Structural Designing', image: `${imageBase}/photo-1503387837-b154d5074bd2?auto=format&fit=crop&w=1400&q=85`, text: 'Design should never say, "Look at me!" It should always say, "Look at this!" Designing a building to meet visual appearance expectations requires creativity and technicality.' },
  { icon: Check, number: '04', title: 'Approval and Documentations', image: `${imageBase}/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1400&q=85`, text: 'Guidance for how building regulations can be satisfied in common building situations, with legal status provided by law, while defining roles and responsibilities under the construction contract.' },
];

export const siteStandards = [
  'IS (Indian Standards) Codes for construction and testing',
  'Strictly abide to CMDA norms and regulation',
  'Good Quality of construction',
  'Confidentiality',
  'Fulfillment of commitments',
  'Result oriented services',
  'Study of updated Govt. rules & regulations',
];

export const projectCategories = ['Commercial', 'Education', 'Hospital', 'Residential', 'Office', 'Reconstruction'];

export const projects = [
  { title: 'The Courtyard House', location: 'Chennai, Tamil Nadu', category: 'Residential', image: `${imageBase}/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85`, text: 'A calm family home organized around light, landscape, and everyday rituals.' },
  { title: 'Aurelia Villa', location: 'Coimbatore, Tamil Nadu', category: 'Residential', image: `${imageBase}/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85`, text: 'A contemporary villa where warm materials meet confident architectural lines.' },
  { title: 'Northstar Commercial', location: 'Bengaluru, Karnataka', category: 'Commercial', image: `${imageBase}/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=85`, text: 'A refined commercial address designed for focus, flow, and a lasting first impression.' },
  { title: 'Studio 27', location: 'Chennai, Tamil Nadu', category: 'Commercial', image: `${imageBase}/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=85`, text: 'A bright, adaptable workplace built around collaboration and calm.' },
  { title: 'The Palm Residence', location: 'ECR, Tamil Nadu', category: 'Renovation', image: `${imageBase}/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=85`, text: 'A considered renovation that gives a much-loved home a new rhythm.' },
  { title: 'Maple Apartments', location: 'Madurai, Tamil Nadu', category: 'Commercial', image: `${imageBase}/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1400&q=85`, text: 'A durable residential community shaped for connection and everyday ease.' },
  { title: 'Vidya Academic Block', location: 'Chennai, Tamil Nadu', category: 'Education', image: `${imageBase}/photo-1562774053-701939374585?auto=format&fit=crop&w=1400&q=85`, text: 'A three-storey academic block with lecture halls, labs, and generous naturally lit corridors.' },
  { title: 'Sri Lakshmi Multispeciality Hospital', location: 'Vellore, Tamil Nadu', category: 'Hospital', image: `${imageBase}/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=1400&q=85`, text: 'A 120-bed facility planned for clear patient flow, hygiene, and round-the-clock services.' },
  { title: 'Meridian Corporate Office', location: 'Guindy, Chennai', category: 'Office', image: `${imageBase}/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85`, text: 'An open-plan corporate floor with meeting rooms, breakout spaces, and efficient services.' },
  { title: 'Heritage Bungalow Restoration', location: 'Mylapore, Chennai', category: 'Reconstruction', image: `${imageBase}/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1400&q=85`, text: 'Structural strengthening and careful rebuilding that give a heritage home a second life.' },
];

// The projects shown in "Featured projects" on the Home and Projects pages: the first project
// listed in each category. Reorder `projects` to change which one represents a category.
export const featuredProjects = projectCategories
  .map((category) => projects.find((project) => project.category === category))
  .filter(Boolean);

// Completed works, newest first. Shown as the About page history timeline and the Projects page record.
export const projectRecord = [
  { year: '2014', title: 'Deepak Paradise Apartments', location: 'Pillaiyar Kovil Street, Porur, Chennai-16.', value: '3.0 Crores' },
  { year: '2013', title: 'Deepak Paradise Apartments', location: 'James Street, Poonamallee, Chennai-56.', value: '3.0 Crores' },
  { year: '2012', title: 'Independent House', location: 'Ramapuram, Kurinji Nagar, Chennai-89.', value: '20 Lakhs' },
  { year: '2011', title: 'The Anjuman- E-Himagath-E-Islam (Compound Wall)', location: 'No.16, BN Reddy (School) Road, T.Nagar, Chennai-17.', value: '30 Lakhs' },
  { year: '2011', title: 'Independent House', location: 'Pallikarani.', value: '15 Lakhs' },
  { year: '2009 - 2010', title: 'The Anjuman- E-Himagath-E-Islam', location: 'No.16, BN Reddy (School) Road, T.Nagar, Chennai-17.', value: '45 Lakhs' },
  { year: '2009', title: 'Sai Engineers Apartments', location: 'Urapakkam', value: '12 Crores' },
  { year: '2008', title: 'Deepak Paradise Apartments', location: 'Kandasamy Nagar, Poonamallee, Chennai-56.', value: '3 Crores' },
  { year: '2006', title: 'Crest Cam Manufacturing Systems', location: 'F86-Sipcot Industrial Park, Irungattukottai, Pennalur(post) Sriperumbudur Taluk, Chennai-602105.', value: '30 Lakhs' },
  { year: '2006', title: 'Sri Krishna Sweets', location: 'Besant Nagar.', value: '20 Lakhs' },
  { year: '2006', title: 'Zoom Developers', location: 'A-53, Road No.1 MIDC INDL Area, Marol, Mumbai.', value: '2.50 Crores' },
  { year: '2005', title: 'Tulip Fluid Tech Pvt Ltd', location: 'Sipcot Industrial State, Irungattukottai, Sriperumbudur.', value: '30 Lakhs' },
  { year: '2005', title: 'C.S.I Church', location: 'Poonamallee', value: '40 Lakhs' },
  { year: '2005', title: '"Kshetropasna" for actor Guru Dutt', location: 'Gokuldham, Maduvinkarai, Sriperumbudur, Tamil Nadu 602105.', value: '8 Lakhs' },
];
