import { getFirestore, doc, writeBatch } from 'firebase/firestore'

export async function deleteAllStrokesFromDb ({ boardPath }) {
  return new Promise(async (resolve) => {
    const batchDeleteRequests = [];
    let currentBatch = writeBatch(getFirestore())
    let currentBatchSize = 0;
    for (const stroke of strokesArray) {
      if (currentBatchSize >= 500) {
        batchDeleteRequests.push(currentBatch.commit());
        currentBatch = writeBatch(getFirestore())
        currentBatchSize = 0; 
      } 
      const ref = doc(getFirestore(), `${boardPath}/strokes/${stroke.id}`)
      currentBatch.delete(ref)
      currentBatchSize += 1;
    }
    batchDeleteRequests.push(currentBatch.commit()); 
    await Promise.all(batchDeleteRequests);
    
    // quickfix when deleting a video
    // the snapshot listener will not notice any "deletions", it just notices
    // an empty blackboard. Yet it doesn't bind `strokesArray = []` because 
    // strokesArray is not null
    strokesArray = [] 
    resolve()
  })
}