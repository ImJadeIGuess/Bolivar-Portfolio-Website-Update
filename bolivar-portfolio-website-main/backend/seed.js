/**
 * Database Seeding Script
 * Populates the database with sample projects
 * 
 * @description Run with: node seed.js
 */

require('dotenv').config();
const mongoose = require('mongoose');
const Project = require('./models/Project');
const Contact = require('./models/Contact');

// Sample projects data
// `image` is a plain string here. The frontend maps these titles to its bundled
// assets (see localImages in Projects.jsx), so no image URLs are needed yet.
const sampleProjects = [
  {
    title: 'TideTrace',
    shortDescription: 'Community conservation platform with member, moderator and admin workflows',
    description: 'A community conservation application with a React frontend and a Node.js API backed by Supabase. Members share Traces with evidence uploads, comments and reports, while moderators and admins handle review and account administration. The database uses Supabase Auth, row-level security and a private storage bucket for evidence. Currently a working prototype: some dashboard data is still demo data.',
    technologies: ['React', 'Vite', 'Node.js', 'Express', 'Supabase', 'PostgreSQL', 'Zod'],
    category: 'fullstack',
    image: 'tidetrace',
    githubUrl: 'https://github.com/kemgp/TideTrace',
    liveUrl: null,
    featured: true,
    displayOrder: 1
  },
  {
    title: 'WIT Buddy',
    shortDescription: 'AI-assisted campus information and student services system using NLP',
    description: 'Development of an AI-Assisted Campus Information and Student Services System for WIT Buddy Using Natural Language Processing. Details coming soon.',
    technologies: ['Natural Language Processing', 'AI'],
    category: 'ai',
    image: 'wit-buddy',
    githubUrl: null,
    liveUrl: null,
    featured: true,
    displayOrder: 2
  },
  {
    title: 'Digi-Konek',
    shortDescription: 'Team project by the TechIlo Dev team. Details coming soon.',
    description: 'Built with the TechIlo Dev team. Full description coming soon.',
    technologies: [],
    category: 'fullstack',
    image: 'digi-konek',
    githubUrl: null,
    liveUrl: null,
    featured: true,
    displayOrder: 3
  },
  {
    title: 'GTour Website',
    shortDescription: 'Tourism Website for Guimaras Island',
    description: 'Interactive website for tourists and locals. Features maps, guides, and event updates with smooth UX and modern design.',
    technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    category: 'fullstack',
    image: 'gtour',
    liveUrl: 'https://example.com',
    githubUrl: null,
    featured: true,
    displayOrder: 4
  },
  {
    title: 'BLJ Study Hub & Cafe System',
    shortDescription: 'Management system for sales and inventory',
    description: 'A complete solution for managing cafe sales, inventory, and student study hub operations. Built with efficiency and user-friendliness in mind.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP 8.1+', 'MySQL (MariaDB)', 'Chart.js'],
    category: 'fullstack',
    image: 'blj',
    githubUrl: 'https://github.com/Lawrencejay22/BLJ-CAFE-STUDY-HUB',
    featured: true,
    displayOrder: 5
  },
  {
    title: 'Ultrasonic Radar Detection System',
    shortDescription: 'Arduino project with ultrasonic sensor & servo motor',
    description: 'This system detects obstacles using an HC-SR04 ultrasonic sensor and Servo Motor. Ideal for learning electronics and IoT concepts.',
    technologies: ['Arduino', 'Ultrasonic Sensor', 'Servo Motor', 'IoT'],
    category: 'hardware',
    image: 'arduino',
    liveUrl: null,
    githubUrl: null,
    featured: false,
    displayOrder: 6
  }
];

// Sample contact messages
const sampleContacts = [
  {
    name: 'John Doe',
    email: 'john@example.com',
    subject: 'Great portfolio!',
    message: 'I really liked your portfolio design. Would love to collaborate on a project.',
    status: 'read'
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    subject: 'Job Opportunity',
    message: 'We have an opening for a junior developer position. Would you be interested?',
    status: 'unread'
  }
];

/**
 * Seed the database
 */
const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    console.log('🔌 Connecting to MongoDB...');
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await Project.deleteMany({});
    await Contact.deleteMany({});

    // Insert sample projects
    console.log('📦 Inserting sample projects...');
    const insertedProjects = await Project.insertMany(sampleProjects);
    console.log(`✅ Inserted ${insertedProjects.length} projects`);

    // Insert sample contacts
    console.log('📧 Inserting sample contacts...');
    const insertedContacts = await Contact.insertMany(sampleContacts);
    console.log(`✅ Inserted ${insertedContacts.length} contacts`);

    console.log('\n🎉 Database seeding completed successfully!');
    console.log('----------------------------------------');
    console.log(`Projects: ${insertedProjects.length}`);
    console.log(`Contacts: ${insertedContacts.length}`);
    console.log('----------------------------------------');

    // Close connection
    await mongoose.connection.close();
    console.log('👋 MongoDB connection closed');
    process.exit(0);
  } catch (error) {
    console.error('❌ Seeding error:', error.message);
    process.exit(1);
  }
};

// Run seeding
seedDatabase();