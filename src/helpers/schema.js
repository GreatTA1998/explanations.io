export function getMemberDocSchema ({ userDoc }) {
  console.log('userDoc =', userDoc)
  const initialNumericalDifference = 3
  const memberObj = {
    uid: userDoc.uid, 
    firstName: userDoc.name.split(' ')[0] , 
    lastName: userDoc.name.split(' ')[1],
    name: userDoc.name,
    phoneNumber: userDoc.phoneNumber || '',
    email: userDoc.email || '',
    maxShopGalleryOrder: initialNumericalDifference 
  }
  return memberObj
}

