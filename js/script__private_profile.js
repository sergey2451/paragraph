const arrowsDown = document.querySelectorAll('.private__cabinet_table_arrow');
const arrowsUp = document.querySelectorAll('.private__cabinet_table_transform_arrow');
const orders = document.querySelectorAll('#order');
const for_order = document.querySelectorAll('#for_order');
const for_order_purchase = document.querySelectorAll('#for_order_purchase');


for (let i = 0; i < arrowsDown.length; i++) {
	arrowsDown[i].addEventListener('click', () => {
		arrowsDown[i].closest(`#order_${i+1}`).nextElementSibling.style.display = 'table-row';
		arrowsDown[i].closest(`#order_${i+1}`).nextElementSibling.nextElementSibling.style.display = 'table-row';
		arrowsDown[i].closest(`#order_${i+1}`).nextElementSibling.querySelector('#id_time').innerHTML = arrowsDown[i].closest(`#order_${i+1}`).querySelector('#time').innerHTML;
		arrowsDown[i].closest(`#order_${i+1}`).nextElementSibling.querySelector('#id_bonuses').innerHTML = arrowsDown[i].closest(`#order_${i+1}`).querySelector('#bonuses').innerHTML;
		arrowsDown[i].closest(`#order_${i+1}`).nextElementSibling.nextElementSibling.querySelector('#id_purchase').innerHTML = arrowsDown[i].closest(`#order_${i+1}`).querySelector('#purchase').innerHTML; 		
	})
}

for (let i = 0; i < arrowsUp.length; i++) {
	arrowsUp[i].addEventListener('click', () => {
		arrowsUp[i].closest(`#for_order`).style.display = 'none';
		arrowsUp[i].closest(`#for_order`).nextElementSibling.style.display = 'none';
	})
}

