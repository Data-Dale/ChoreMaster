# ChoreMaster
# Chore Gamification App

## Overview

The Chore Gamification App is a fun and interactive way to manage household chores, designed with an arcade-style theme. It allows parents to assign chores to their children, who can then complete them to earn points and unlock rewards. The app includes various gamification elements such as levels, achievements, leaderboards, and quests, making chore completion a more engaging and enjoyable experience.

## Features

### User Management
- Create family accounts.
- Set up individual profiles for each family member.
- Assign different access levels for parents and children.

### Chore Management
- Create and assign chores with varying difficulty levels and point values.
- View daily, weekly, and special quests.
- Mark chores as complete and track progress.

### Gamification Elements
- Earn points and level up by completing chores.
- Unlock achievements for reaching milestones.
- View family leaderboards and compare progress.

### Reward System
- Set up a reward store with prizes or privileges.
- Redeem points for rewards.
- Multiple reward streams, including experiences and holidays.

### Quest Board
- Create special themed quests.
- Accept and complete quests for bonus points or special rewards.

### Timed Challenges
- Participate in timed cleaning challenges.
- Real-time point accumulation during challenges.

### Physical Activity Integration
- Add physical activities between chores to promote exercise.
- Log completed activities for extra points.

### Surprise Elements
- Discover hidden virtual treats or encouraging messages.
- Collect hidden surprises for bonus points.

### Themed Cleaning Days
- Set up themed cleaning days with special point multipliers or rewards.
- Participate in themed days and upload photos for bonus points.

### Notifications and Reminders
- Receive reminders about upcoming or overdue chores.
- Send encouraging notifications to family members.

### Progress Tracking and Reporting
- View chore completion history and point earnings over time.
- Generate reports on family chore completion rates and point distributions.

### Customization and Settings
- Customize the app's theme and language settings.
- Personalize profiles with avatars and backgrounds.

### Social Features
- Share achievements on social media.
- Compete with other families in chore completion challenges.

## Functional Design

### 1. Home Screen
- **Wireframe:** App logo, navigation menu, quick access buttons, daily quest highlight, user profile summary.
- **Mockup:** Retro pixel art logo, arcade cabinet control panel navigation, colorful arcade buttons, "Now Playing" marquee for daily quest, character select screen style user profile.

### 2. User Profile Screen
- **Wireframe:** User avatar, username and level, progress bar, stats overview, customization options.
- **Mockup:** Character portrait styled avatar, pixelated username and level, power meter progress bar, high score table stats, power-ups or equipment customization options.

### 3. Chore List Screen
- **Wireframe:** Tabs for daily, weekly, and special quests, chore list with checkboxes, points value, difficulty level, "Add Chore" button.
- **Mockup:** Game mode selection buttons, side-scrolling missions, coins or gems for points, 8-bit stars for difficulty, "Insert Coin" styled "Add Chore" button.

### 4. Reward Store Screen
- **Wireframe:** Grid of rewards, point costs, current point balance, "Redeem" button.
- **Mockup:** RPG in-game shop style, power-ups, extra lives, treasure chests for rewards, coin counter point balance, neon "Redeem" buttons.

### 5. Leaderboard Screen
- **Wireframe:** Family and friends leaderboards, user ranks, avatars, names, scores.
- **Mockup:** Classic arcade high score screen, pixelated avatars, flashing score numbers, animated current user highlight.

### 6. Quest Board Screen
- **Wireframe:** Grid of quests, quest names, descriptions, rewards, "Accept Quest" button, completion progress.
- **Mockup:** Fantasy RPG quest board style, scrolls or wanted posters for quests, treasure chests for rewards, glowing "Accept Quest" buttons, mini boss icons for progress.

### 7. Timed Challenge Screen
- **Wireframe:** Countdown timer, challenge description, start/stop buttons, real-time points.
- **Mockup:** Bomb with a fuse timer, animated challenge description, colorful arcade start/stop buttons, arcade sound effects for points.

## Network Requirements

### Server
- **Backend Server:** Hosted on Heroku.
- **Database:** MongoDB Atlas for cloud storage.

### Client
- **Frontend Server:** Hosted on Vercel.
- **Compatibility:** Works on iOS 13+ and Android 8.0+ devices.

### Network
- **Local Network:** Accessible via home network for Raspberry Pi deployment.
- **Internet Connection:** Required for accessing cloud-hosted backend and database.

## Deployment Instructions

### Prerequisites
- Node.js and npm installed.
- MongoDB Atlas account.
- Heroku and Vercel accounts.

### Clone the Repository
```bash
git clone https://github.com/yourusername/chore-gamification-app.git
cd chore-gamification-app
