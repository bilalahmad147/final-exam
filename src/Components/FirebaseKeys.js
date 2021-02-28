import { firebase } from '../Config/Config'

const key1 = firebase.database().ref('companies').push().key;
const key2 = firebase.database().ref('students').push().key;

export { key1, key2 }

