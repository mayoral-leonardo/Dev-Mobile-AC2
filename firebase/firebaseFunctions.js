import { collection, getDocs, addDoc,updateDoc,deleteDoc } from 'firebase/firestore'
import db from './firebaseConfig'

// Create functions
function createAluno(data, onSuccess) {
  addDoc(collection(db, "Alunos"), data).then(() => onSuccess())
}

function createDisciplina(data, onSuccess) {
  addDoc(collection(db, "Disciplinas"), data).then(() => onSuccess())
}

function createProfessor(data, onSuccess) {
  addDoc(collection(db, "Professores"), data).then(() => onSuccess())
}

function createHistorico(data, onSuccess) {
  addDoc(collection(db, "Historico"), data).then(() => onSuccess())
}

function createTurma(data, onSuccess) {
  addDoc(collection(db, "Turmas"), data).then(() => onSuccess())
}

// Get functions
async function getAlunos() {
  const querySnapshot = await getDocs(collection(db, 'Alunos'))
  const allData = []
  querySnapshot.forEach((doc) => {
    allData.push({ id: doc.id, ...doc.data() })
  })
  if (allData.length) return allData
}

async function getDisciplinas() {
  const querySnapshot = await getDocs(collection(db, 'Disciplinas'))
  const allData = []
  querySnapshot.forEach((doc) => {
    allData.push({ ...doc.data() })
  })
  if (allData.length) return allData
}

async function getHistoricos() {
  const querySnapshot = await getDocs(collection(db, 'Historicos'))
  const allData = []
  querySnapshot.forEach((doc) => {
    allData.push({ ...doc.data() })
  })
  if (allData.length) return allData
}

async function getProfessores() {
  const querySnapshot = await getDocs(collection(db, 'Professores'))
  const allData = []
  querySnapshot.forEach((doc) => {
    allData.push({ ...doc.data() })
  })
  if (allData.length) return allData
}

async function getTurmas() {
  const querySnapshot = await getDocs(collection(db, 'Turmas'))
  const allData = []
  querySnapshot.forEach((doc) => {
    allData.push({ ...doc.data() })
  })
  if (allData.length) return allData
}

async function getAlunosFromSpecificTurma(turmaId) {
  await console.log(turmaId)
}

async function getAllAlunoInformation(alunoId) {
  await console.log(alunoId)
}

async function updateHistorico(data) {
  const docRef = doc(db, "Historico", data.docId);

  newData = {
    frequencia:data.frequencia,
    nota: data.nota
  }

  updateDoc(docRef, newData)
}

async function deleteHistorico(docId) {
  deleteDoc(doc(db, "Historico", docId));
}


export const firebaseFunctions = {
  createAluno,
  createDisciplina,
  createHistorico,
  createProfessor,
  createTurma,
  getAlunos,
  getDisciplinas,
  getHistoricos,
  getProfessores,
  getTurmas,
  getAlunosFromSpecificTurma,
  getAllAlunoInformation,
  updateHistorico,
  deleteHistorico
}