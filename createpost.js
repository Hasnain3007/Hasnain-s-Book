import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";
import { getFirestore,collection, addDoc } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD431Y9W6wrJodPUbYe0ic3HRMKPdRvr5s",
  authDomain: "practice-d1871.firebaseapp.com",
  projectId: "practice-d1871",
  storageBucket: "practice-d1871.appspot.com",
  messagingSenderId: "507221909663",
  appId: "1:507221909663:web:e4655ebb4a683e7daa82aa"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;

  } else {
    window.location.href='login.html'
  }
});

var postTitle = document.getElementById('postTitle')
var postContent = document.getElementById('postContent')
var postImage = document.getElementById('postImage')
var publish = document.getElementById('publish')

async function addingDataToFireStore() {
    try {
        const docRef = await addDoc(collection(db, "Blog Post"), {
          postTitle: postTitle.value,
          postContent: postContent.value,
        });
        console.log("Document written with ID: ", docRef.id);
        postTitle.value = ''
        postContent.value = ''
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

publish.addEventListener('click',addingDataToFireStore)