export function getDisciplinaName (cod_disc, allDisciplinas) {
  if (!cod_disc || !allDisciplinas.length) return null

  const selectedDisciplina = allDisciplinas.find((disciplina) => disciplina.cod_disc === cod_disc)
  if (selectedDisciplina) return selectedDisciplina.nome_disc
}

export function getDisciplinaNameWithTurmaCode (cod_turma, allTurmas ,allDisciplinas) {
  if (!cod_turma || !allTurmas.length || !allDisciplinas.length) return null
  const selectedTurma = allTurmas.find((turma) => turma.cod_turma === cod_turma)
  let selectedDisciplina = {}
  if (selectedTurma) selectedDisciplina = allDisciplinas.find((disciplina) => disciplina.cod_disc === selectedTurma.cod_disc)
  if (!!selectedDisciplina) return selectedDisciplina.nome_disc
}