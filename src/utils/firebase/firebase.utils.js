import { initializeApp } from 'firebase/app';
// import { getAnalytics } from "firebase/analytics";
import {
    getFirestore,
    doc,
    collection,
    writeBatch,
    query,
    getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB9K-K5beg0oD2_k7rd2OiqY9T49aDFO4Q",
    authDomain: "hl-site-db.firebaseapp.com",
    projectId: "hl-site-db",
    storageBucket: "hl-site-db.appspot.com",
    messagingSenderId: "1047845207052",
    appId: "1:1047845207052:web:22dd1bd83d0a607b49c229",
    measurementId: "G-C8C7MVL3GS"
  };

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(firebaseApp);

const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field = 'name') => {
    const collectionRef = collection(db, collectionKey);

    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object[field].toLowerCase());
        batch.set(docRef, object);
    })

    await batch.commit();
    console.log('done');
}

export const getCategoriesAndDocuments = async (collectionKey) => {
    const collectionRef = collection(db, collectionKey)

    const q = query(collectionRef);
    const querySnapshot = await getDocs(q);
    const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
        const { name, details } = docSnapshot.data();
        acc[name.toLowerCase()] = details;
        return acc;
    }, {})

    return categoryMap;
}