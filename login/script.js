  
  	function mostra(frase){
		
        document.write(frase);
    
        }
    
        function voltar(){
          window.history.back();
        }
    
        // Variáveis Globais
        window.localStorage.setItem('priscila', '123456');
        var usuarioCadastrado = window.localStorage.key(0);
        var senhaCadastrada = window.localStorage.getItem('priscila');
        var tentativasMax = 3
        var tentativasAtual = 1
    
        var botaoVoltar = document.querySelector("#voltar")
        var botao = document.querySelector("#botao");
        botao.onclick = verifica;
        botaoVoltar.onclick = voltar;
    
        var usuarioInformado = document.querySelector("#campoUsuario");
        var senhaInformada = document.querySelector("#campoSenha");
        campoUsuario.focus();
    
    
    
        // Função para verificar a validade dos dados
    
        function verifica (){
    
             while (tentativasAtual <= tentativasMax){
    
            if (senhaInformada.value == senhaCadastrada && usuarioInformado.value == usuarioCadastrado){
    
              alert("Bem vindo(a), " + usuarioCadastrado);
              tentativasAtual = (tentativasMax + 1)
            } else {
    
                if (tentativasAtual == tentativasMax){
    
                  alert("Você atingiu o limite de tentativas, tente novamente em 2 minutos ou recarregue a página.");
                  campoUsuario.value=""
                  campoSenha.value=""
                  tentativasAtual ++
                  break
    
                } else{
                  tentativasAtual ++
                  alert("Login e/ou senha incorretos, tente novamente. Você ainda tem " + (4 - tentativasAtual) +" tentativas.")
                  campoUsuario.value=""
                  campoSenha.value=""
                  campoUsuario.focus();
                  break
    
                  }
              }
          }
        }
       
    
    