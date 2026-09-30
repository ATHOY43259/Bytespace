import course1 from './assets/course-1.png'
import course2 from './assets/course-2.png'
import course3 from './assets/course-3.png'
import course4 from './assets/course-4.png'
import course5 from './assets/course-5.png'
import course6 from './assets/course-6.png'

import iconDesign from './assets/icon-design.png'
import iconDevelopment from './assets/icon-development.png'
import iconSoftware from './assets/icon-software.png'
import iconBusiness from './assets/icon-business.png'
import iconMarketing from './assets/icon-marketing.png'
import iconPhotography from './assets/icon-photography.png'

import sarah from './assets/user-sarah.png'
import james from './assets/user-james.png'
import alex from './assets/user-alex.png'

// split in rows like the design
export const topicRows = [
  [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
  ],
  ['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'],
  ['Productivity', 'Web Development', 'Data Science', 'Cooking'],
]

export const courses = [
  { id: 1, title: 'Learn Figma from Basic', image: course1 },
  { id: 2, title: 'Build Digital Asset', image: course2 },
  { id: 3, title: 'the Power of Big Data', image: course3 },
  { id: 4, title: 'Balancing Productivity and Wellbeing', image: course4 },
  { id: 5, title: 'Mastering Money Management', image: course5 },
  { id: 6, title: 'From Idea to Startup Success', image: course6 },
]

export const categories = [
  { name: 'Design', icon: iconDesign },
  { name: 'Development', icon: iconDevelopment },
  { name: 'IT & Software', icon: iconSoftware },
  { name: 'Business', icon: iconBusiness },
  { name: 'Marketing', icon: iconMarketing },
  { name: 'Photography', icon: iconPhotography },
]

export const testimonials = [
  {
    name: 'Sarah M.',
    role: 'Enthusiastic Learner',
    photo: sarah,
    text: '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: 'James L.',
    role: 'Lifelong Learner',
    photo: james,
    text: '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: 'Alex B.',
    role: 'Inspired Creator',
    photo: alex,
    text: '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
]

export const footerLinks = [
  ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
  ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
]
