
$(function(){
	$('#sQ1').hide();
	$('#sQ2').hide();
	$('#sQ3').hide();
	$('#ratta').hide();
});
$('.btn-success').click(function(){
		$('#sQ1').show();
		$('#sQ2').show();
		$('#sQ3').show();
		$('#ratta').show();
	});


var antalRatt = 0;
const ratt1 = document.getElementById('rattNamn');

ratt1.addEventListener('click', function() {
antalRatt++;
console.log(antalRatt);
})


const ratt2 = document.getElementById('rattAlder');

ratt2.addEventListener('click', function() {
antalRatt++;
console.log(antalRatt);
})


const ratt3 = document.getElementById('rattLangd');

ratt3.addEventListener('click', function() {
antalRatt++;
console.log(antalRatt);})

$('#ratta').show();


const ratta = document.getElementById('ratta');
ratta.addEventListener('click', function() {
	document.getElementById('rattSvar').innerHTML = 'Du fick ' +antalRatt+ ' av 3 rätt';
})