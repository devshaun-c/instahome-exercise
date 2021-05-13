import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}
export default firebase;
export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();

export const CreateNewDocInFirebase = async (obj, collectionName) => {
  const dateCreated = new Date();
  const collectionRef = firestore.collection(`${collectionName}/`);
  const newDocRef = collectionRef.doc();

  obj.id = newDocRef.id;

  newDocRef
    .set({
      dateCreated: dateCreated,
      ...obj,
    })
    .then(() => {
      console.log("Document created in Firebase");
      return newDocRef.id;
    })
    .catch((error) => {
      console.log("Got an error:", error);
      return null;
    });

  return newDocRef.id;
};

export const UpdateDataInFirebase = async (obj, collectionName, docId) => {
  const docRef = firestore.collection(collectionName).doc(docId);
  const result = await docRef
    .update({
      obj,
    })
    .then(() => {
      console.log("Activity object updated");
      return true;
    })
    .catch((err) => {
      console.log("Failed to update activity :", err);
      return null;
    });

  return result;
};

export const DeleteDocumentInFirebase = async (docId, collectionName) => {
  const result = await firestore
    .collection(collectionName)
    .doc(docId)
    .delete()
    .then(() => {
      console.log("Delete success");
      return true;
    })
    .catch((error) => {
      console.error("Error deleting: ", error);
      return null;
    });

  return result;
};

export const GetSpecificDocFromFirebase = async (docId, collectionName) => {
  var docRef = await firestore.collection(collectionName).doc(docId);
  const data = docRef
    .get()
    .then((doc) => {
      if (doc.exists) {
        return doc.data();
      } else {
        console.log("No such document!");
        return null;
      }
    })
    .catch((error) => {
      console.log("Error getting document:", error);
      return null;
    });

  return data;
};

export const GetSnapshotFromFirebase = async (collectionName) => {
  const snapshot = await firestore.collection(collectionName).get();
  if (snapshot.size) {
    return snapshot.docs.map((doc) => doc.data());
  } else {
    return null;
  }
};

export const DeleteFilesFromStorage = async (files, id) => {
  files.forEach((fileName) => {
    var fileRef = firebase.storage().ref().child(`${id}/${fileName}`);

    // Delete the file
    fileRef
      .delete()
      .then(() => {
        console.log("Successfully deleted file");
      })
      .catch((error) => {
        console.log("Failed to deleted file");
      });
  });
};

export const UploadFiles = async (files, id) => {
  const array = Array.from({ length: files.length }, (value, index) => index);
  const uploadedFiles = await Promise.all(
    array.map(async (index) => {
      const file = files[index];
      var uploadTask = firebase.storage().ref(`${id}/${file.name}`).put(file);

      const url = await new Promise((resolve, reject) => {
        uploadTask.on(
          "state_changed",
          () => {},
          (error) => reject(error),
          async () => {
            const downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
            resolve(downloadUrl);
          }
        );
      });
      return { url, name: file.name };
    })
  );
  return uploadedFiles;
};

export const SignIn = async (email, password) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
};

export function onAuthStateChanged(callback) {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback(user.uid);
      // console.log("The user is logged in");
    } else {
      callback(false);
      // console.log("The user is not logged in");
    }
  });
}

export function LoginWithEmailAndPassword(username, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(username, password)
    .then((user) => {
      if (user) {
        var user = user.user;
        // console.log(user);
      }
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
}

export function Logout() {
  console.log("Logged out");
  firebase.auth().signOut();
}
