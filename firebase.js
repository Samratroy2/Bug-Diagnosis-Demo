/* =========================================================
   BUGAI - SHARED FIREBASE CONFIGURATION
   =========================================================

   This is the ONLY file where the Firebase configuration
   should be stored.

   Other pages import Firebase services from this file.

   Used by:
   - Login
   - Create Account
   - Settings
   - Bug Submission
   - Dashboard
   - Analytics
   ========================================================= */


/* =========================================================
   FIREBASE APP
   ========================================================= */

import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";


/* =========================================================
   FIREBASE AUTHENTICATION
   ========================================================= */

import {
    getAuth,
    setPersistence,
    browserLocalPersistence,
    browserSessionPersistence,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    updateProfile,
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";


/* =========================================================
   FIRESTORE
   ========================================================= */

import {
    getFirestore,

    /* Collection / Documents */
    collection,
    doc,

    /* Create / Read / Update / Delete */
    addDoc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
    deleteDoc,

    /* Queries */
    query,
    where,
    orderBy,
    limit,

    /* Server timestamp */
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";


/* =========================================================
   FIREBASE CONFIGURATION
   =========================================================

   Replace these values with the Web App configuration
   from:

   Firebase Console
       ↓
   Project Settings
       ↓
   Your apps
       ↓
   Web app
       ↓
   Firebase SDK snippet

   IMPORTANT:
   Keep your actual Firebase configuration here.
   ========================================================= */

const firebaseConfig = {

    apiKey: "AIzaSyC5o7YQWMRW91aoyXl0xRm-kcZCIMxry8k",
    authDomain: "bug-detection-26e4d.firebaseapp.com",
    projectId: "bug-detection-26e4d",
    storageBucket: "bug-detection-26e4d.firebasestorage.app",
    messagingSenderId: "619706000719",
    appId: "1:619706000719:web:9ae30e1ee2b30594fad13a",
    measurementId: "G-L5D9LF7PP3"

};


/* =========================================================
   INITIALIZE FIREBASE
   ========================================================= */

const firebaseApp =
    initializeApp(
        firebaseConfig
    );


/* =========================================================
   INITIALIZE AUTHENTICATION
   ========================================================= */

const auth =
    getAuth(
        firebaseApp
    );


/* =========================================================
   INITIALIZE FIRESTORE
   ========================================================= */

const db =
    getFirestore(
        firebaseApp
    );


/* =========================================================
   FIREBASE SERVICES CHECK
   =========================================================

   Useful for debugging.

   Open browser console and you should see:

   BUGAI Firebase initialized successfully.
   ========================================================= */

console.log(
    "BUGAI Firebase initialized successfully."
);


/* =========================================================
   EXPORT FIREBASE SERVICES
   ========================================================= */

export {

    /* =====================================================
       FIREBASE APP
       ===================================================== */

    firebaseApp,


    /* =====================================================
       AUTHENTICATION
       ===================================================== */

    auth,

    setPersistence,

    browserLocalPersistence,

    browserSessionPersistence,

    signInWithEmailAndPassword,

    createUserWithEmailAndPassword,

    sendPasswordResetEmail,

    updateProfile,

    onAuthStateChanged,

    signOut,


    /* =====================================================
       FIRESTORE DATABASE
       ===================================================== */

    db,


    /* Collection / Documents */

    collection,

    doc,


    /* Create / Read / Update / Delete */

    addDoc,

    getDoc,

    getDocs,

    setDoc,

    updateDoc,

    deleteDoc,


    /* Queries */

    query,

    where,

    orderBy,

    limit,


    /* Server Timestamp */

    serverTimestamp

};