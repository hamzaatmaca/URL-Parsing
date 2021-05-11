document.querySelector('#category').addEventListener('click',(e)=>{
	//console.log(e)
	location.href = location.origin + location.pathname+ '#' + e.target.id
});

window.addEventListener('popstate', ()=>{
	module.renderOnPageLoadOrURLChange();
})

var module = {
	renderSpecificIten:(items, renderId)=>{
		var div = document.createElement('div');
		item.map(eachItem =>{
			var span = document.createElement('span');
			span.innerText = eachItem;
			div.appendChild(span);
			div.appendChild(document.createElement('br'));
		});
		
		document.getElementById(renderId).appendChild(div);
	},
	renderOnPageLoadOrURLChange:()=>{
		var currentPath = location.hash.substr(1);
		if(currentPath === 'books'){
			var books = [
				{
					id:1,
					name:'ABC book',
					author:'XYZ'
				},
				{
					id:2,
					name:'def book',
					author:'Xgkjk'
				},
				{
					id:3,
					name:'hghf book',
					author:'Xsdgew'
				},
				module.renderSpecificIten(books, 'bookRenderer')
			]
		}else if(currentPath === 'laptops'){

		}else if(currentPath === 'shoes'){

		}else{

		}
	}
}