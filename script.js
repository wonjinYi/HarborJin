

window.addEventListener('DOMContentLoaded', main);

async function main () {
	const jindoStat = document.getElementById('jindo-status');
	const res = axios.get("https://jindoback.wonj.in/")
		.then(() => {
			jindoStat.classList.add('font-green');
			jindoStat.classList.remove('font-ornage');
			jindoStat.textContent = "● is Running"
		})
		.catch(()=>{
			jindoStat.classList.remove('font-orange');
			jindoStat.classList.add('font-red');
			jindoStat.textContent = "● is Stopped"
		})
	}