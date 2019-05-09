let password = 'mrogers123'
document.getElementById('add-button').addEventListener('click', function() {
    let inputText = document.getElementsByTagName('input')[0].value
    let li = document.createElement('li');
    li.innerText = inputText;
    document.querySelector('ul').append(li);
})