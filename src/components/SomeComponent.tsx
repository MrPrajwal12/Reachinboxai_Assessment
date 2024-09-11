import React, { useEffect } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { app } from '../firebase-config';

const db = getFirestore(app);

const SomeComponent: React.FC = () => {
  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, 'your-collection'));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, ' => ', doc.data());
      });
    };

    fetchData();
  }, []);

  return <div>Check the console for data.</div>;
};

export default SomeComponent;
