import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import db from './firebaseConfig'

// Create functions
function createAluno(data, onSuccess) {
  addDoc(collection(db, "Aluno"), data).then(() => onSuccess())
}

function createDisciplina(data, onSuccess) {
  addDoc(collection(db, "Disciplina"), data).then(() => onSuccess())
}

function createProfessor(data, onSuccess) {
  addDoc(collection(db, "Professor"), data).then(() => onSuccess())
}

function createHistorico(data, onSuccess) {
  addDoc(collection(db, "Historico"), data).then(() => onSuccess())
}

function createTurma(data, onSuccess) {
  addDoc(collection(db, "Turma"), data).then(() => onSuccess())
}

// Get functions
async function getAlunos() {
  const querySnapshot = await getDocs(collection(db, 'Aluno'))
  const allData = []
  querySnapshot.forEach((doc) => {
    allData.push({ ...doc.data(), docId: doc.id })
  })
  if (allData.length) return allData
}

async function getDisciplinas() {
  const querySnapshot = await getDocs(collection(db, 'Disciplina'))
  const allData = []
  querySnapshot.forEach((doc) => {
    allData.push({ ...doc.data(), docId: doc.id })
  })
  if (allData.length) return allData
}

async function getHistoricos() {
  const querySnapshot = await getDocs(collection(db, 'Historico'))
  const allData = []
  querySnapshot.forEach((doc) => {
    allData.push({ ...doc.data(), docId: doc.id })
  })
  if (allData.length) return allData
}

async function getProfessores() {
  const querySnapshot = await getDocs(collection(db, 'Professor'))
  const allData = []
  querySnapshot.forEach((doc) => {
    allData.push({ ...doc.data(), docId: doc.id })
  })
  if (allData.length) return allData
}

async function getTurmas() {
  const querySnapshot = await getDocs(collection(db, 'Turma'))
  const allData = []
  querySnapshot.forEach((doc) => {
    allData.push({ ...doc.data(), docId: doc.id })
  })
  if (allData.length) return allData
}

async function getAlunosFromSpecificTurma(turmaId) {
  const allHistoricos = await getHistoricos()
  const allAlunos = await getAlunos()

  const historicosFromSelectedTurma = allHistoricos.filter((historico) => historico.cod_turma === turmaId)
  const matriculasInSpecificTurma = historicosFromSelectedTurma.map((historico) => historico.matricula)
  const alunosFromSelectedTurma = allAlunos.filter((aluno) => matriculasInSpecificTurma.includes(aluno.matricula) )
  
  if (alunosFromSelectedTurma.length) return alunosFromSelectedTurma
}

// Update Functions
async function updateHistorico(data, onSuccess) {
  const docRef = doc(db, "Historico", data.docId);

  newData = {
    frequencia:data.frequencia,
    nota: data.nota
  }

  updateDoc(docRef, newData).then(() => onSuccess())
}

// Delete Functions
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
  updateHistorico,
  deleteHistorico
}