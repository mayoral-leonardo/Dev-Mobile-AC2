import { collection, getDocs, addDoc } from 'firebase/firestore'
import db from './firebaseConfig'

// Create functions
function createAluno(data, onSuccess) {
  addDoc(collection(db, "Alunos"), data).then(() => onSuccess())
}
function createDisciplina(data) {
  addDoc(collection(db, "Disciplinas"), data)
}
function createProfessor(data) {
  addDoc(collection(db, "Professores"), data)
}
function createTurma(data) {
  addDoc(collection(db, "Turmas"), data)
}

// Get functions
async function getAlunos() {
  const querySnapshot = await getDocs(collection(db, 'Alunos'))
  const allData = []
  querySnapshot.forEach((doc) => {
    allData.push({ id: doc.id, ...doc.data() })
  });
  if (allData.length) return allData
}

async function getHistoricos() {
  const querySnapshot = await getDocs(collection(db, 'Historicos'))
  const allData = []
  querySnapshot.forEach((doc) => {
    allData.push({ ...doc.data() })
  });
  if (allData.length) return allData
}

async function getTurmas() {
  const querySnapshot = await getDocs(collection(db, 'Turmas'))
  const allData = []
  querySnapshot.forEach((doc) => {
    allData.push({ ...doc.data() })
  });
  if (allData.length) return allData
}

export const firebaseFunctions = {
  createAluno,
  createDisciplina,
  createProfessor,
  createTurma,
  getAlunos,
  getHistoricos,
  getTurmas
}