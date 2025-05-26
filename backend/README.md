# Imagine AI Backend

A comprehensive Node.js/Express backend with **Imagine.art API integration** for AI-powered image generation. This backend provides authentication, user management, image gallery, and full Imagine.art functionality including text-to-image generation, image editing, upscaling, and variations.

## 🎨 Features

### **Imagine.art Integration**
- **Text-to-Image Generation**: Create stunning images from text prompts
- **Image Styles**: Access 90+ art styles and models
- **Image Upscaling**: Enhance resolution (2x, 4x scaling)
- **Image Variations**: Generate multiple versions of images  
- **Image Remix**: Edit and transform existing images
- **Status Tracking**: Real-time generation progress monitoring

### **Core Backend Features**
- **User Authentication**: JWT-based secure authentication
- **User Management**: Profile management and user data
- **Image Gallery**: Public and private image collections
- **Usage Tracking**: API call monitoring and analytics
- **Error Handling**: Comprehensive error management
- **Database Integration**: PostgreSQL with Prisma ORM

## 📋 Prerequisites

Before you begin, make sure you have these installed:

1. **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
2. **Git** - [Download here](https://git-scm.com/)
3. **Database**: PostgreSQL (we recommend Supabase for free hosting)
4. **Code Editor**: VS Code (recommended)

## 🚀 Setup Guide (Beginner-Friendly)

### Step 1: Get Your Imagine.art API Key

1. Go to [Imagine.art](https://www.imagine.art/)
2. Sign up for an account
3. Navigate to the **API section** or **Developer Platform**
4. Generate your API key
5. Save this key - you'll need it later!

### Step 2: Set Up Database (Using Supabase - Free)

1. Go to [Supabase.com](https://supabase.com/) and create an account
2. Click **"New Project"**
3. Choose your organization and set:
   - **Project Name**: `imagine-ai-backend`
   - **Database Password**: Create a strong password (save this!)
   - **Region**: Choose closest to you
4. Click **"Create new project"**
5. Wait for setup to complete (2-3 minutes)
6. Go to **Settings** → **Database**
7. Copy your **Connection string** (it looks like: `postgresql://postgres.xxx:[password]@xxx.supabase.co:5432/postgres`)

### Step 3: Install and Setup Backend

1. **Clone or navigate to your project folder**:
```bash
cd backend
```

2. **Install dependencies**:
```bash
npm install
```

3. **Create environment file**:
```bash
cp env.example .env
```

4. **Edit your `.env` file** with your actual values:
```env
# Database - Use your Supabase connection string
DATABASE_URL="postgresql://postgres.xxxxx:your_password@aws-x-xx-x.pooler.supabase.com:6543/postgres"

# JWT - Create a secure secret (at least 32 characters)
JWT_SECRET=your_very_secure_jwt_secret_key_here_at_least_32_chars_long
JWT_EXPIRES_IN=7d

# Server
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173

# Imagine.art API - Use your actual API key
IMAGINE_API_KEY=your_actual_imagine_art_api_key_here
IMAGINE_API_BASE_URL=https://api.imagine.art

# File uploads
MAX_FILE_SIZE=10485760
UPLOAD_DIR=uploads
```

5. **Set up the database**:
```bash
# Generate database client
npm run db:generate

# Push database schema to your Supabase database
npm run db:push
```

6. **Start the development server**:
```bash
npm run dev
```

### Step 4: Test Your Setup

1. Open your browser and go to: `http://localhost:5000/health`
2. You should see:
```json
{
  "status": "OK",
  "message": "Imagine AI Backend is running",
  "timestamp": "2024-01-XX..."
}
```

**Congratulations!** 🎉 Your backend is now running with Imagine.art integration!

## 📚 API Endpoints

### **Authentication**
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/verify` - Verify JWT token

### **User Management**  
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/:userId/images` - Get user's images

### **Imagine.art Integration**
- `POST /api/imagine/generate` - Generate image from text
- `GET /api/imagine/status/:imageId` - Check generation status
- `GET /api/imagine/styles` - Get available art styles
- `POST /api/imagine/upscale/:imageId` - Upscale image
- `POST /api/imagine/variations/:imageId` - Create image variations
- `POST /api/imagine/remix` - Remix/edit images

### **Image Gallery**
- `GET /api/images/public` - Get public images
- `GET /api/images/:id` - Get specific image
- `PUT /api/images/:id` - Update image details
- `DELETE /api/images/:id` - Delete image

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server with hot reload
npm run build        # Build for production
npm start           # Start production server

# Database
npm run db:generate  # Generate Prisma client
npm run db:push     # Push schema to database
npm run db:studio   # Open Prisma Studio (database GUI)
npm run db:reset    # Reset database (careful!)

# Code Quality
npm run lint        # Run ESLint
npm run type-check  # Run TypeScript compiler check
```

## 🔧 Environment Variables Explained

| Variable | Description | Example |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgresql://user:pass@host:5432/db` |
| `JWT_SECRET` | Secret key for JWT tokens (32+ chars) | `your_super_secure_secret_key_here` |
| `JWT_EXPIRES_IN` | Token expiration time | `7d` |
| `IMAGINE_API_KEY` | Your Imagine.art API key | `sk-xxxxx` |
| `IMAGINE_API_BASE_URL` | Imagine.art API base URL | `https://api.imagine.art` |
| `PORT` | Server port | `5000` |
| `FRONTEND_URL` | Frontend URL for CORS | `http://localhost:5173` |

## 🗄️ Database Schema

### **User Table**
- User authentication and profile data
- Relationships to images and API usage

### **Image Table**  
- Generated image metadata
- Links to Imagine.art generation details
- Public/private settings

### **ApiUsage Table**
- API call tracking and monitoring
- Cost and usage analytics
- Error logging

## 🧪 Testing Your API

### Test Image Generation:
```bash
curl -X POST http://localhost:5000/api/imagine/generate \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_JWT_TOKEN" \
  -d '{
    "prompt": "A beautiful sunset over mountains",
    "styleId": 30,
    "aspectRatio": "16:9"
  }'
```

### Test Health Check:
```bash
curl http://localhost:5000/health
```

## 🆘 Troubleshooting

### **Common Issues:**

**1. "Cannot connect to database"**
- Check your `DATABASE_URL` in `.env`
- Make sure Supabase project is running
- Verify your database password is correct

**2. "IMAGINE_API_KEY is required"**
- Make sure you added your Imagine.art API key to `.env`
- Check that the key is correct (no extra spaces)

**3. "Port 5000 already in use"**
- Change `PORT=5000` to `PORT=5001` in `.env`
- Or kill the process using port 5000

**4. TypeScript errors**
- Run `npm run type-check` to see all errors
- Make sure you ran `npm install` completely

**5. Database schema issues**
- Run `npm run db:push` to sync your schema
- If still issues, try `npm run db:reset` (this will delete all data!)

### **Getting Help:**
1. Check the error message carefully
2. Look at the server logs in your terminal
3. Verify all environment variables are set
4. Make sure all services (database, Imagine.art API) are accessible

## 🔗 Technology Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT (JSON Web Tokens)
- **AI Integration**: Imagine.art API (Vyro AI)
- **File Upload**: Multer
- **Security**: Helmet, CORS
- **Logging**: Morgan
- **Development**: Nodemon, ts-node

## 📈 Next Steps

1. **Connect Your Frontend**: Update your React app to use these endpoints
2. **Add File Uploads**: Implement image upload functionality
3. **Image Storage**: Set up cloud storage (AWS S3, Cloudinary)
4. **Rate Limiting**: Add API rate limiting for production
5. **Monitoring**: Add logging and monitoring services
6. **Deploy**: Deploy to production (Vercel, Railway, Heroku)

---

**Happy coding!** 🚀 You now have a complete backend with Imagine.art integration ready for your AI image generation app! 