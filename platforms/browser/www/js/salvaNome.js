		window.addEventListener("load",function(){
			document.getElementById("bt-salve").addEventListener("click",salveName)
			document.getElementById("bt-remove").addEventListener("click",removerName)
			document.getElementById("sucesso").style.display= "none";
			document.getElementById("falha").style.display= "none";
		});
		
		function inicializar(){
			if(localStorage.getItem("nome")) {
				listarNome()
			}
		}
		
		
		function listarNome(){
			var mensagem = "<h1> Olá " + localStorage.getItem("nome") + "</h1>";
			
			document.getElementById("lista").innerHTML = mensagem;
			
		}
		
		function removerName(){
			if(localStorage.getItem("nome")){
				localStorage.removeItem("nome");
				document.getElementById("lista").innerHTML = '';
				document.getElementById("nome").value = '';
				document.getElementById("sucesso").innerHTML = 'LocalStorage removido com sucesso!';
				document.getElementById("sucesso").style.display= "block";
				inicializar();
			}else{
				document.getElementById("falha").innerHTML = 'Não há nenhuma informação no LocalStorage';
				document.getElementById("sucesso").style.display= "none";
				document.getElementById("falha").style.display= "block";
			}
						
		}
		
		function salveName(){
			var nome = document.getElementById("nome").value;
			localStorage.setItem("nome", nome);
			document.getElementById("sucesso").innerHTML = 'LocalStorage adicionado com sucesso!';
			document.getElementById("sucesso").style.display= "block";
			document.getElementById("falha").style.display= "none";
			inicializar();
		}