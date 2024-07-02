
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIZaKMAFofTnDlG12Nj0od8jLZ6hPsSZw",
  authDomain: "tarefasplus-1b16e.firebaseapp.com",
  projectId: "tarefasplus-1b16e",
  storageBucket: "tarefasplus-1b16e.appspot.com",
  messagingSenderId: "1002921412328",
  appId: "1:1002921412328:web:22d19cd9d5f3f249ae2b5d"
};


const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };