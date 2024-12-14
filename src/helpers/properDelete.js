import { getFirestore, doc, writeBatch } from 'firebase/firestore'

export async function deleteNonInitialStrokesFromDb ({ boardPath, strokesArray }) {
  return new Promise(async (resolve) => {
    const batchDeleteRequests = [];
    let currentBatch = writeBatch(getFirestore())
    let currentBatchSize = 0;
    for (const stroke of strokesArray) {
      // IGNORE INITIAL SETUP DRAWING STROKES
      if (stroke.startTime === 0 && stroke.endTime === 0) {
        continue
      }
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

export async function deleteAllStrokesFromDb ({ boardPath, strokesArray }) {
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