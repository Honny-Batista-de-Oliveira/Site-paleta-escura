	function insert(){
		const  elem = document.createElement('li');
		const insertNode = document.getElementById('insertCrud').value;
		const node = document.createTextNode(insertNode);
		elem.appendChild(node);
		const element = document.getElementById('containerUl');
		element.appendChild(elem);
		element = document.getElementsByTagName('p');
		let formate = document.createAttribute('style');
		formate.value = "fontSize:red;background-color:green;";
		element[0] = setAttributeNode(formate);
		window.addEventListener('load' , insert());
	}
	function replace(){
			const insertElement = document.createElement("li");
			let newName = prompt('INSIRA O NOVO NOME.:')
			const nodeElement = document.createTextNode(newName);
				insertElement.appendChild(nodeElement);
			let position = parseInt(prompt('INSIRA A POSIÇÃO.:'))
			const parent = document.getElementById("containerUl");
			const child = document.getElementsByTagName("li")[position];
				parent.replaceChild(insertElement, child);
		}
	function delet(){
		alert('PARA DELETAR CLICKE NO BOTÃO DELETE E NA PALAVRA')
		for(let i = 0; i < 200 ; i++){
			const delTarget = document.getElementsByTagName("li")[i];
			delTarget.addEventListener("click", function(){
				delTarget.remove();				
			});
			}		
		}