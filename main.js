class Aluno {

    nome;
    matricula;
    nota1;
    nota2;
    nota3;
    media;
  
    constructor(nome, matricula, nota1, nota2, nota3) {
  
       this.nome = nome;
       this.matricula = matricula;
       this.nota1 = nota1;
       this.nota2 = nota2;
       this.nota3 = nota3;
       this.media = this.calculaMedia();
  
    }
    calculaMedia(){
        return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
      }
    }
    let listaAlunos = [];

    function inserirAluno(){
        let aluno = lerValores();

        let a1 = new Aluno(aluno.nome, aluno.matricula, aluno.nota1, aluno.nota2, aluno.nota3);
        aluno.media = a1.media;
        
        console.log(a1);

        if(verificaCampos(a1)){
            listaAlunos.push(aluno);
            populaTabela(listaAlunos);
        };

        

    }
    function lerValores(){
        let aluno = {}

        aluno.nome = document.querySelector('#nome').value;
        aluno.matricula = document.querySelector('#matricula').value;
        aluno.nota1 = document.querySelector('#nota1').valueAsNumber;
        aluno.nota2 = document.querySelector('#nota2').valueAsNumber;
        aluno.nota3 = document.querySelector('#nota3').valueAsNumber;


        return aluno;

    }
    function populaTabela(aluno) {
        let tbody = document.querySelector('#tbody');
        tbody.innerText = '';

        for(let i = 0; i < aluno.length; i++){
            let tr = tbody.insertRow();
            let nome = tr.insertCell();
            let matricula = tr.insertCell();
            let nota1 = tr.insertCell();
            let nota2 = tr.insertCell();
            let nota3 = tr.insertCell();
            let media = tr.insertCell();
            let situacao = tr.insertCell();
            let opcoes = tr.insertCell();

        
            nome.innerText = aluno[i].nome;
            matricula.innerText = aluno[i].matricula;
            nota1.innerText = aluno[i].nota1;
            nota2.innerText = aluno[i].nota2;
            nota3.innerText = aluno[i].nota3;
            media.innerText = aluno[i].media;

            if (aluno[i].media <= 6){
            situacao.innerText = "Reprovado";
            situacao.classList.add('reprovado');
            }
            else{
            situacao.innerText = "Aprovado";
            situacao.classList.add('aprovado');
            }

            matricula.classList.add('center');
            nome.classList.add('center');
            nota1.classList.add('center');
            nota2.classList.add('center');
            nota3.classList.add('center');
            media.classList.add('center');
            situacao.classList.add('center');
            
            let imgDelete = document.createElement('i');
            imgDelete.classList.add('bi');
            imgDelete.classList.add('bi-trash')
            imgDelete.setAttribute("onclick","deletar("+aluno[i].matricula+")");

            opcoes.appendChild(imgDelete);
            opcoes.classList.add('center');
        }
    }
    function limpar(){      
        document.querySelector('#nome').value = '';
        document.querySelector('#matricula').value = '';
        document.querySelector('#nota1').value = '';
        document.querySelector('#nota2').value = '';
        document.querySelector('#nota3').value = '';
        
      }
      
    function deletar(matricula){
        //console.log(matricula);
        if(confirm('Deseja realmente deletar o aluno '+ matricula +' ?')){
  
        let tbody = document.querySelector('#tbody');
  
        for(let i = 0; i < listaAlunos.length; i++){
          if (listaAlunos[i].matricula == matricula){
            listaAlunos.splice(i,1);
            tbody.deleteRow(i);
          }
        }
  
        console.log(listaAlunos)
        }
      }
    function verificaCampos(aluno) {
        let msg = '';
  
        if(aluno.nome == ''){
          msg += ' - Informe o nome do Aluno \n';
        }
        if(aluno.matricula == ''){
          msg += ' - Informe a matrícula do Aluno \n';
        }
        if(aluno.nota1 == ''){
          msg += ' - Informe a primeira nota do Aluno \n';
        }
        if(aluno.nota2 == ''){
          msg += ' - Informe a segunda nota do Aluno \n';
        }
        if(aluno.nota3 == ''){
          msg += ' - Informe a terceira nota do Aluno \n';
        }
        if(msg != ''){
          alert(msg);
          return false;
        }
  
        for(let i = 0; i < listaAlunos.length; i++){
          if (aluno.matricula == listaAlunos[i].matricula){
            alert('matricula existente');
            return false;
          }
        }
        
  
        return true;
      }