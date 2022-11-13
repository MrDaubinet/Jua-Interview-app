import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";
import { writable } from 'svelte/store';

const firebaseConfig = {
    apiKey: "AIzaSyDgUW7cMVOMjt61MaKvh5rMc4vWATrPSg8",
    authDomain: "jua-interview.firebaseapp.com",
    databaseURL: "https://jua-interview-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "jua-interview",
    storageBucket: "jua-interview.appspot.com",
    messagingSenderId: "901500224330",
    appId: "1:901500224330:web:dc3ead2571f3882d5837b3"
};

// Create a svelte store to subscribe to incoming data
export const geoData = writable({});
// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);
// create db reference
const geoListRef = ref(database, 'geojson');
// everytime the db updates, update our svelte store
onValue(geoListRef, (snapshot) => {
    const geolist = snapshot.val();
    geoData.set(geolist)
});

// save geojson file
export function saveData(name: string, geojson: any) {
    // const postListRef = ref(database, 'geojson');
    set(ref(database, 'geojson/' + name), {
        ...geojson
    });
}