# BharatJobs 🇮🇳

BharatJobs is a comprehensive mobile application designed to connect job seekers with potential employers across India. Built with React Native, it features a modern, intuitive, and highly responsive user interface tailored for a seamless job hunting experience.

## ✨ Key Features

- **Job Discovery:** Browse personalized job recommendations and top categories right from the home screen.
- **Advanced Search:** Find jobs by title, company, or category with real-time filtering.
- **Application Tracking:** Keep track of all your applied jobs, interview schedules, and application statuses in one place.
- **Direct Messaging:** Chat seamlessly with recruiters, HR managers, and hiring specialists.
- **Profile Management:** Build and manage a professional profile, including your resume, skills, and personal information.
- **Real-time Notifications:** Stay updated on application statuses, new messages, and scheduled interviews.
- **Saved Jobs:** Bookmark interesting roles to apply later.
- **Dark Mode / Theming:** Built with a scalable theming system for future aesthetic flexibility.

## 🛠️ Technology Stack

- **Framework:** React Native (Expo/CLI)
- **Navigation:** React Navigation (Native Stack & Bottom Tabs)
- **State Management:** Zustand
- **Language:** TypeScript
- **Styling:** React Native StyleSheet (Custom Theme Tokens)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- React Native environment setup (Android Studio / Xcode)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/bharatjobs.git
   cd bharatjobs/BharatJobs
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Install iOS CocoaPods (macOS only):
   ```bash
   npx pod-install
   ```

### Running the App

Start the Metro bundler:

```bash
npx react-native start
```

Run on iOS:

```bash
npx react-native run-ios
```

Run on Android:

```bash
npx react-native run-android
```

## 📁 Project Structure

```
BharatJobs/
├── app/
│   ├── components/      # Reusable UI components (Button, Header, JobCard, etc.)
│   ├── navigation/      # Navigation config (MainNavigator, RootNavigator)
│   ├── screens/         # App screens categorized by flow (main, auth, modals)
│   ├── store/           # Zustand state management stores
│   ├── theme/           # Design system tokens (colors, typography)
│   └── mockData.ts      # Sample data for UI development
├── assets/              # Static assets like images and fonts
├── App.tsx              # App entry point
└── index.js             # Root register component
```

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the LICENSE file for details.

echo "# BharatJob" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Abhishek25062001/BharatJob.git
git push -u origin main
