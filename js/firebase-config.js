// Firebase設定
const firebaseConfig = {
    apiKey: "AIzaSyDfyGR4QzufafP436KTHx44c1ShtW6SUhw",
    authDomain: "shift-manager-210ad.firebaseapp.com",
    databaseURL: "https://shift-manager-210ad-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "shift-manager-210ad",
    storageBucket: "shift-manager-210ad.firebasestorage.app",
    messagingSenderId: "620680131336",
    appId: "1:620680131336:web:362b5cd1e00f69bb1bf2bd",
    measurementId: "G-T3QEDH7LRR"
};

// Firebaseを初期化
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
