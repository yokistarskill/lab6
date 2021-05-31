document.getElementById('sendReq').onclick = () => {
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			let div = document.createElement('div');
			div.innerHTML = xhttp.responseText;
			document.body.append(div);
		}
	};
	xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);
	xhttp.send();
	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then(response => response.json())
		.then(json => {
			let div = document.createElement('div');
			div.innerHTML = json.title;
			document.body.append(div);
		})
	const fetchPromise = fetch("https://jsonplaceholder.typicode.com/todos/1");
	fetchPromise.then(response => {
		return response.json();
	}).then(json => {
		let div = document.createElement('div');
		div.innerHTML = json.id;
		document.body.append(div);
	});
	fetch('https://jsonplaceholder.typicode.com/posts', {
		method: 'POST',
		body: JSON.stringify({
			title: 'foo',
			body: 'bar',
			userId: 1,
		}),
		headers: {
			'Content-type': 'application/json; charset=UTF-8',
		},
	})
		.then((response) => response.json())
		.then((json) => console.log(json));
}