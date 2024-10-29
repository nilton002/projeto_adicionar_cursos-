const caixaCursos = document.querySelector('#caixaCursos')
const btn_c = [...document.querySelectorAll('.curso')]
const c1_2 = document.querySelector('#c1_2')
const cursos = ['HTML', 'CSS', 'JS', 'PHP', 'REACT', 'MYSQL', 'REACT NATIVE']
const btnCursoSelecionado = document.getElementById('btnCursoSelecionado')
const btnRemoverCurso = document.getElementById('btnRemoverCurso')
const btnAdicionarNovoCursoAntes = document.getElementById('btnAdicionarNovoCursoAntes')
const btnAdicionarNovoCursoDepois = document.getElementById('btnAdicionarNovoCursoDepois')
const nomeCurso = document.getElementById('nomeCurso')

let indice = 0



const tirarSelecao=()=>{
  const CursoSelecionados=[...document.querySelectorAll('.selecionados')]
  CursoSelecionados.map((el)=>{
    el.classList.remove('selecionados')
  })
}



const criarNovoCurso = (curso) => {
  const novoElemento = document.createElement('div')
  novoElemento.setAttribute('id', 'c' + indice)
  novoElemento.setAttribute('class', 'curso c1')
  novoElemento.innerHTML = curso

  novoElemento.addEventListener('click',(evt)=>{
    tirarSelecao()
    evt.target.classList.toggle('selecionados')
  })



  //const comandos = document.createElement('div')
 // comandos.setAttribute('class', 'comandos')

  //const rb = document.createElement('input')
  //rb.setAttribute('type', 'radio')
  //rb.setAttribute('name', 'rb_curso')

  //comandos.appendChild(rb)

  //novoElemento.appendChild(comandos)
  return novoElemento

}
cursos.map((el, chave) => {
  const novoElemento = criarNovoCurso(el)
  caixaCursos.appendChild(novoElemento)
  indice++
})

const CursoSelecionados = () => {
  const CursoSelecionados = [...document.querySelectorAll('.selecionados')]
  return CursoSelecionados[0]
  }

btnCursoSelecionado.addEventListener('click', (evt) => {
try{
    alert('CursoSelecionado:' + CursoSelecionados().innerHTML)
  } catch (ex) {
    alert('selecione um curso')
  }

})

btnRemoverCurso.addEventListener('click', (evt) => {
  const cs=CursoSelecionados()
  if (cs!= undefined) {
   
    cs.remove()
  } else {
    alert('selecione um curso')
  }
})
btnAdicionarNovoCursoAntes.addEventListener('click', (evt) => {

  try {

    if(nomeCurso.value!=''){
      const novoCurso = criarNovoCurso(nomeCurso.value)
      caixaCursos.insertBefore(novoCurso, CursoSelecionados())
    }else{
      alert('digite o nome do curso')
    }
  } catch (ex) {
   alert('selecione um curso')
  }
})

btnAdicionarNovoCursoDepois.addEventListener('click', (evt) => {
  try {

    if(nomeCurso.value!=''){
      const novoCurso = criarNovoCurso(nomeCurso.value)
      caixaCursos.insertBefore(novoCurso, CursoSelecionados().nextSibling)
    }else{
      alert('digite o nome do curso')
    }

  } catch (ex) {
    alert('selecione um curso')
  }
})