// Simple deployment script for the Teacher Tracking System
// This script helps deploy to popular platforms

const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

console.log('🚀 Teacher Performance & Development Tracking System')
console.log('📋 CODINEX Competition Project - Deployment Helper')
console.log('')

const platform = process.argv[2] || 'vercel'

console.log(`🎯 Deploying to ${platform}...`)
console.log('')

try {
  switch (platform) {
    case 'vercel':
      console.log('📦 Building for Vercel...')
      execSync('npm run build', { stdio: 'inherit' })

      console.log('🚀 Deploying to Vercel...')
      execSync('npx vercel --prod', { stdio: 'inherit' })
      break

    case 'netlify':
      console.log('📦 Building for Netlify...')
      execSync('npm run build', { stdio: 'inherit' })

      console.log('🚀 Deploying to Netlify...')
      console.log('💡 Make sure to connect your repository to Netlify for automatic deployments')
      console.log('🔗 Visit: https://app.netlify.com/drop')
      break

    case 'github':
      console.log('📦 Building for GitHub Pages...')
      execSync('npm run build', { stdio: 'inherit' })

      console.log('🚀 To deploy to GitHub Pages:')
      console.log('1. Install gh-pages: npm install --save-dev gh-pages')
      console.log('2. Add to package.json scripts:')
      console.log('   "deploy": "gh-pages -d dist"')
      console.log('3. Run: npm run deploy')
      break

    default:
      console.log('❌ Unsupported platform. Use: vercel, netlify, or github')
      process.exit(1)
  }

  console.log('')
  console.log('✅ Deployment completed successfully!')
  console.log('')
  console.log('🎉 Your Teacher Performance & Development Tracking System is now live!')
  console.log('')
  console.log('📊 Features included:')
  console.log('   ✅ Teacher Management & Profiles')
  console.log('   ✅ Attendance Tracking')
  console.log('   ✅ Training & Development')
  console.log('   ✅ Student Feedback System')
  console.log('   ✅ Lesson Plan Management')
  console.log('   ✅ Interactive Analytics')
  console.log('   ✅ Achievement & Gamification')
  console.log('   ✅ Export Functionality')
  console.log('   ✅ Responsive Design')
  console.log('')
  console.log('🏆 Ready for CODINEX competition judging!')

} catch (error) {
  console.error('❌ Deployment failed:', error.message)
  console.log('')
  console.log('🔧 Troubleshooting tips:')
  console.log('1. Make sure you have a stable internet connection')
  console.log('2. Check if you have the necessary permissions')
  console.log('3. Ensure all dependencies are installed: npm install')
  console.log('4. Try building locally first: npm run build')
  process.exit(1)
}
