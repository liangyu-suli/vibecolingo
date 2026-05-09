import { cert, getApps, initializeApp } from "firebase-admin/app"
import { getAuth } from "firebase-admin/auth"
import { getFirestore } from "firebase-admin/firestore"

if (!getApps().length) {
  initializeApp(
    process.env.FIREBASE_SERVICE_ACCOUNT_KEY
      ? { credential: cert(JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY)) }
      : undefined // Application Default Credentials in Firebase App Hosting
  )
}

export const adminAuth = getAuth()
export const adminDb = getFirestore()
