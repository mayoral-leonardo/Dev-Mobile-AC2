import {getFirestore, collection, getDocs, doc, addDoc} from 'firebase/firestore'
import db from './firebaseConfig'

function createAluno(data) {
  addDoc(collection(db, "Alunos"),data);
}
function createDisciplina(data) {
  addDoc(collection(db, "Disciplinas"),data);
}
function createProfessor(data) {
  addDoc(collection(db, "Professores"),data);
}
function createTurma(data) {
  addDoc(collection(db, "Turmas"),data);
}

/*function getAllAluno(setAlunos){
  if (setAlunos) setAlunos()

}*/

export const firebaseFunctions = {
  createAluno,
  createDisciplina,
  createProfessor,
  createTurma,
}