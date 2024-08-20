import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getFirestore,collection, getDocs } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD431Y9W6wrJodPUbYe0ic3HRMKPdRvr5s",
  authDomain: "practice-d1871.firebaseapp.com",
  projectId: "practice-d1871",
  storageBucket: "practice-d1871.appspot.com",
  messagingSenderId: "507221909663",
  appId: "1:507221909663:web:e4655ebb4a683e7daa82aa"
};


const showData = document.getElementById('showData');
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const querySnapshot = await getDocs(collection(db, "Blog Post"));
querySnapshot.forEach((doc) => {
  
  showData.innerHTML +=`
  <div class="col-12 col-md-6 col-lg-4 blogCard">
                <div class="img">
                    <img src="fiverrr.PNG" alt="asdasf">
                </div>
                <div class="contant">
                <h2>Burger</h2>
                <p>this is burgerss</p>
                </div>
                </div> 
                `
                // console.log(`${doc.id} => ${doc.data()}`);
                // let data = doc.data()
  // console.log(data);

  
});



const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

