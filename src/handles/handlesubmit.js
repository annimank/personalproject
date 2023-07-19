// Import necessary functions from the modular Firebase SDK
import { addDoc, collection } from "firebase/firestore";
import { getFirestore } from "../firebase_setup/firebase"; // Assuming getFirestore is a function that initializes and returns the Firestore instance.

const handleSubmit = (testdata) => {
    const firestore = getFirestore(); // Get the Firestore instance

    const ref = collection(firestore, "test_data"); // Firebase creates this automatically

    let data = {
        testData: testdata
    };

    try {
        addDoc(ref, data);
    } catch(err) {
        console.log(err);
    }
}

export default handleSubmit;
