const output = document.querySelector('#output')
const inputhtml = document.querySelector('#inputhtml')
const inputcss = document.querySelector('#inputcss')
const inputjs = document.querySelector('#inputjs')

inputhtml.addEventListener('input', (e) => {
    output.innerHTML = e.target.value;
    localStorage.setItem('html',e.target.value)
    
code = `
${localStorage.getItem('html')}\n
<style>
${localStorage.getItem('css')}
</style>
<script>
${localStorage.getItem('js')}
</script>
`
localStorage.setItem('code',code)
})

inputcss.addEventListener('input', (f) => {
    localStorage.setItem('css',f.target.value)
    
code = `
${localStorage.getItem('html')}\n
<style>
${localStorage.getItem('css')}
</style>
<script>
${localStorage.getItem('js')}
</script>
`

localStorage.setItem('code',code)
})

inputjs.addEventListener('input', (g) => {
    localStorage.setItem('js',g.target.value)
    
code = `
${localStorage.getItem('html')}\n
<style>
${localStorage.getItem('css')}
</style>
<script>
${localStorage.getItem('js')}
</script>
`
localStorage.setItem('code',code)
})
document.querySelector('#inputhtml').innerHTML = `
<!DOCTYPEhtml>
<html>
<head>
<title> ${localStorage.getItem('name')}'s Cool website! </title>
</head>
<body>
<h1> Hello world! </h1>
<button onclick='alert("HI!")'>Click me to say hi!</button>
</body>
</html>
`
document.querySelector('#inputcss').innerHTML = `
body {
    background-color: yellow;
    color: black;
}
`
document.querySelector('#inputjs').innerHTML = `
alert('HI!')
`