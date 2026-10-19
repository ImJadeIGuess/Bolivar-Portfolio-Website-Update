# MERN Stack Portfolio

A modern, professional portfolio web application for a 3rd year IT student built using the MERN stack (MongoDB, Express, React, Node.js).
## 📁 Project Structure
```
portfolio-app/
├── backend/                    # Node.js + Express Backend
│   ├── config/                 # Configuration files
│   ├── controllers/            # Route controllers
│   │   ├── contactController.js
│   │   └── projectController.js
│   ├── middleware/             # Custom middleware
│   │   └── errorMiddleware.js
│   ├── models/                 # Mongoose models
│   │   ├── Contact.js
│   │   └── Project.js
│   ├── routes/                 # API routes
│   │   ├── contactRoutes.js
│   │   └── projectRoutes.js
│   ├── utils/                  # Utility functions
│   ├── .env.example            # Environment variables template
│   ├── package.json
│   └── server.js               # Entry point
│
├── frontend/                   # React Frontend
│   ├── public/                 # Static files
│   │   └── index.html
│   ├── src/
│   │   ├── assets/             # Images, fonts, etc.
│   │   ├── components/         # React components
│   │   │   ├── About/
│   │   │   ├── Contact/
│   │   │   ├── Footer/
│   │   │   ├── Hero/
│   │   │   ├── Navbar/
│   │   │   ├── Projects/
│   │   │   └── Skills/
│   │   ├── context/            # React Context
│   │   │   └── ThemeContext.js
│   │   ├── hooks/              # Custom hooks
│   │   ├── services/           # API services
│   │   │   └── api.js
│   │   ├── styles/             # Global styles
│   │   │   ├── CSSReset.css
│   │   │   ├── Variables.css
│   │   │   └── globals.css
│   │   ├── utils/              # Utility functions
│   │   ├── App.js
│   │   └── index.js
│   ├── .env.example
│   └── package.json
│
└── README.md
```
## 🚀 Features
### Frontend (React)
- Clean UI with CSS Reset
- Modern responsive design (mobile-first)
- Hero Section with typing animation
- About Me section with timeline
- Skills section with progress bars
- Projects grid with filtering
- Contact form with validation
- Dark mode toggle
- Smooth animations and transitions
- Loading states

### Backend (Node.js + Express)
- RESTful API architecture
- MVC structure
- Contact form submissions
- Projects CRUD operations
- Input validation
- Error handling middleware
- Rate limiting
- Security headers (Helmet)
- CORS configuration

### Database (MongoDB)
- Contact messages storage
- Projects storage
- Mongoose models with validation
## 🗂️ Featured Projects

| Project | Summary | Links |
|---------|---------|-------|
| TideTrace | Community conservation platform (React, Express, Supabase) with member, moderator and admin workflows | [GitHub](https://github.com/kemgp/TideTrace) |
| WIT Buddy | AI-assisted campus information and student services system using Natural Language Processing | Coming soon |
| Digi-Konek | Team project by the TechIlo Dev team | Coming soon |
| GTour Website | Tourism website for Guimaras Island (MERN) | - |
| BLJ Study Hub & Cafe System | Sales and inventory management system (PHP, MySQL) | [GitHub](https://github.com/Lawrencejay22/BLJ-CAFE-STUDY-HUB) |
| Ultrasonic Radar Detection System | Arduino project with an ultrasonic sensor and servo motor | - |

## 🛠️ Technologies Used
Frontend
- React 18
- CSS3 (Custom Properties, Flexbox, Grid)
- Axios (HTTP client)
- Framer Motion (Animations)

Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- express-validator
- helmet, cors, morgan
## 📋 Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or Atlas)
- npm or yarn
## ⚙️ Installation & Setup
1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-app.git
cd portfolio-app
```

2. Setup Backend
```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env with your MongoDB URI
# MONGODB_URI=mongodb://localhost:27017/portfolio

# Start development server
npm run dev
```

3. Setup Frontend
```bash
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Start development server
npm start
```

4. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
## 🌐 API Endpoints
### Contact
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/contact | Submit contact form |
| GET | /api/contact | Get all messages (admin) |
| GET | /api/contact/:id | Get single message |
| PUT | /api/contact/:id | Update message status |
| DELETE | /api/contact/:id | Delete message |

### Projects
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/projects | Get all projects |
| GET | /api/projects/featured | Get featured projects |
| GET | /api/projects/stats | Get project stats |
| GET | /api/projects/:id | Get single project |
| POST | /api/projects | Create project (admin) |
| PUT | /api/projects/:id | Update project (admin) |
| DELETE | /api/projects/:id | Delete project (admin) |

### Health Check
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/health | Check server status |
## 🧪 Testing with Postman
1. Import the API endpoints into Postman
2. Set base URL: `http://localhost:5000/api`
3. Test each endpoint with appropriate request bodies

Sample Contact POST Request:
```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "subject": "Collaboration inquiry",
  "message": "I would love to work with you on a project."
}
```

Sample Project POST Request:
```json
{
  "title": "My Portfolio Project",
  "shortDescription": "A brief description",
  "description": "Detailed description here",
  "technologies": ["React", "Node.js", "MongoDB"],
  "category": "fullstack",
  "image": "https://example.com/image.jpg",
  "githubUrl": "https://github.com/user/project",
  "liveUrl": "https://project.com",
  "featured": true
}
```
## 🚀 Deployment
### Backend Deployment (Render, Railway, Heroku, etc.)
1. Set environment variables in your hosting platform
2. Deploy from your Git repository
3. Ensure MongoDB Atlas URI is set correctly

### Frontend Deployment (Vercel, Netlify, etc.)
1. Update `REACT_APP_API_URL` with your backend URL
2. Build the project: `npm run build`
3. Deploy the build folder

### Environment Variables for Production

Backend: (Environment Variables for Render)
```
PORT=5000
NODE_ENV=production
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/portfolio
CLIENT_URL=https://your-frontend-url.com
```

**Frontend:**
```
REACT_APP_API_URL=https://your-backend-url.com/api
```
## 📝 Sample Data Seeding

The backend ships with a seed script that loads the featured projects and a few sample contact messages. From the `backend` directory (with `MONGODB_URI` set in `.env`):

```bash
node seed.js
```

Note: seeding clears the existing projects and contacts first. Project images in the database are plain keys (for example `tidetrace`); the frontend maps each project title to its bundled image in `Projects.jsx`.

## 🎨 Customization
Personal Information
- Update name, email, and social links in components
- Replace placeholder images with your own
- Modify the content in Hero, About, and other sections

Styling
- Edit `Variables.css` to change colors, fonts, spacing
- Modify individual component CSS files for specific changes
- The dark theme colors are in `Variables.css` under `[data-theme="dark"]`

Projects
- Add your projects via the API or directly in MongoDB
- Update the sample projects array in `Projects.jsx` as fallback
## 📄 License
This project is open source and available under the [MIT License](LICENSE).
## 👤 Author
- GitHub: [@IMJADEIGUESS](https://github.com/ImJadeIGuess)
- LinkedIn: [Jaderick Bolivar](https://linkedin.com/in/jaderick-bolivar-58785b373)
- Email: bolivar.jaderick.bordones11b@gmail.com
