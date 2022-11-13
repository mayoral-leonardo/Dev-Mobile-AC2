import { collection, doc, getDocs, addDoc, updateDoc, deleteDoc } from 'firebase/firestore'
import db from './firebaseConfig'

// CREATE FUNCTIONS
async function createAluno(data, onSuccess, onError) {
  const allAlunos = await getAlunos()
  const matriculaAlreadyExists = allAlunos.find((aluno) => aluno.matricula === data.matricula)

  if (Object.values(data).every((value) => value !== undefined )) {
    if (matriculaAlreadyExists) {
      onError('Matrícula já cadastrada!')
      return
    }
    addDoc(collection(db, "Aluno"), data).then(() => onSuccess('Aluno cadastrado com sucesso!'))
  } else onError('Preencha todos os campos!')
}

async function createDisciplina(data, onSuccess, onError) {
  const allDisciplinas = await getDisciplinas()
  const disciplinaAlreadyExists = allDisciplinas.find((disciplina) => disciplina.cod_disc === data.cod_disc)

  if (Object.values(data).every((value) => value !== undefined )) {
    if (disciplinaAlreadyExists) {
      onError('Disciplina já cadastrada!')
      return
    }
    addDoc(collection(db, "Disciplina"), data).then(() => onSuccess('Disciplina cadastrada com sucesso!'))
  } else onError('Preencha todos os campos!')
}

async function createProfessor(data, onSuccess, onError) {
  const allProfessores = await getProfessores()
  const professorAlreadyExists = allProfessores.find((professor) => professor.cod_prof === data.cod_prof)

  if (Object.values(data).every((value) => value !== undefined )) {
    if (professorAlreadyExists) {
      onError('Professor já cadastrado!')
      return
    }
    addDoc(collection(db, "Professor"), data).then(() => onSuccess('Professor cadastrado com sucesso!'))
  } else onError('Preencha todos os campos!')
}

async function createHistorico(data, onSuccess, onError) {
  const allHistoricos = await getHistoricos()
  const historicoAlreadyExists = allHistoricos.find((historico) => historico.cod_historico === data.cod_historico)

  if (Object.values(data).every((value) => value !== undefined )) {
    if (historicoAlreadyExists) {
      onError('Histórico já cadastrado!')
      return
    }
    addDoc(collection(db, "Historico"), data).then(() => onSuccess('Histórico cadastrado com sucesso!'))
  } else onError('Preencha todos os campos!')
}
  
async function createTurma(data, onSuccess, onError) {
  const allTurmas = await getTurmas()
  const turmaAlreadyExists = allTurmas.find((turma) => turma.cod_turma === data.cod_turma)

  if (Object.values(data).every((value) => value !== undefined )) {
    if (turmaAlreadyExists) {
      onError('Turma já cadastrada!')
      return
    }
    addDoc(collection(db, "Turma"), data).then(() => onSuccess('Turma cadastrada com sucesso!'))
  } else onError('Preencha todos os campos!')
}

// GET FUNCTIONS
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

async function getHistoricosOfSpecificAluno(alunoId) {
  const allHistoricos = await getHistoricos()
  const historicosFromSelectedAluno = allHistoricos.filter((historico) => historico.matricula === alunoId)
  
  if (historicosFromSelectedAluno.length) return historicosFromSelectedAluno
}

// UPDATE FUNCTIONS
async function updateHistorico(data, onSuccess) {
  const docRef = doc(db, "Historico", data.docId);

  newData = {
    frequencia:data.frequencia,
    nota: data.nota
  }

  updateDoc(docRef, newData).then(() => onSuccess('Aluno cadastrado com sucesso!'))
}

// DELETE FUNCTIONS
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
  getHistoricosOfSpecificAluno,
  updateHistorico,
  deleteHistorico
}