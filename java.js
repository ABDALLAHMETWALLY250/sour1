function show(anything)
{
    document.querySelector('.text').value = anything;
}
let drop = document.querySelector('.drop');
drop.onclick = function()
{
    drop.classList.toggle('active');
}