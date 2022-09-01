/* eslint-disable import/no-unresolved */
/* eslint-disable no-console */
/* eslint-disable func-names */
// build-search.js

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');
const dotenv = require('dotenv');
const algoliasearch = require('algoliasearch/lite');
const serviceAccount = require('./sa.json');

initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

// async function getAllBlogPosts() {
//   // const q = query(collection(db, 'users'), where('type', '==', 'student'));
//   // try {
//   //   const querySnapshot = await getDocs(q);
//   //   const fetchStudents = [];
//   //   querySnapshot.forEach((document) => {
//   //     fetchStudents.push({ id: document.id, ...document.data() });
//   //   });
//   //   return { fetchStudents };
//   // } catch (err) {
//   //   return { err };
//   // }
// }

function transformPostsToSearchObjects(posts) {
  const transformed = posts.map((student) => {
    return {
      objectID: student.id,
      firstName: student.firstName,
      lastName: student.lastName,
      area_of_expertise: student.area_of_expertise,
      about: student.about,
      rate: student.rate,
      liked: student.liked,
      country: student.country,
      type: student.type,
      website: student.website,
      phone: student.phone,
      email: student.email,
      profile: student.profile,
      skills: student.skills,
    };
  });

  return transformed;
}

(async function () {
  dotenv.config();

  try {
    const citiesRef = db.collection('users');
    const snapshot = await citiesRef.where('type', '==', 'student').get();
    if (snapshot.empty) {
      console.log('No matching documents.');
      return;
    }
    try {
      const fetchStudents = [];
      snapshot.forEach((doc) => {
        fetchStudents.push({ id: doc.id, ...doc.data() });
      });
      const transformed = transformPostsToSearchObjects(fetchStudents);
      // initialize the client with your environment variables
      const client = algoliasearch(
        process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
        process.env.ALGOLIA_SEARCH_ADMIN_KEY
      );

      // initialize the index with your index name
      const index = client.initIndex('student_list_search');

      // save the objects!
      const algoliaResponse = await index.saveObjects(transformed);

      // check the output of the response in the console
      console.log(
        `🎉 Sucessfully added ${
          algoliaResponse.objectIDs.length
        } records to Algolia search. Object IDs:\n${algoliaResponse.objectIDs.join(
          '\n'
        )}`
      );
    } catch (err) {
      console.log(err);
    }
  } catch (error) {
    console.log(error);
  }
})();
