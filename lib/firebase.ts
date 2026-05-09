import { getApps, initializeApp, type FirebaseApp } from "firebase/app"
import { connectAuthEmulator, getAuth, type Auth } from "firebase/auth"
import { connectFirestoreEmulator, getFirestore, type Firestore } from "firebase/firestore"

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
}

const useEmulator = process.env.NEXT_PUBLIC_USE_FIREBASE_EMULATOR === "true"

function getApp(): FirebaseApp {
  return getApps()[0] ?? initializeApp(config)
}

// Singletons — emulator connection must happen exactly once per instance
let _auth: Auth | undefined
let _db: Firestore | undefined

export function getClientAuth(): Auth {
  if (!_auth) {
    _auth = getAuth(getApp())
    if (useEmulator) {
      connectAuthEmulator(_auth, "http://127.0.0.1:9099", { disableWarnings: true })
    }
  }
  return _auth
}

export function getClientDb(): Firestore {
  if (!_db) {
    _db = getFirestore(getApp())
    if (useEmulator) {
      connectFirestoreEmulator(_db, "127.0.0.1", 8080)
    }
  }
  return _db
}
