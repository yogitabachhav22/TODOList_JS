
submit.addEventListener("click", (e)=>{
    e.preventDefault()
    let titlec = title.value
    let descc = desc.value
    localStorage.setItem("todo", [titlec, descc])
    console.log(e)
    todo.innerHTML = `
    <h1>${titlec}</h1>
    <p>${descc}</p>
    `
    title.value = ""
    desc.value = ""
}
)

deleteBtn.addEventListener("click",(e) =>{
    e.preventDefaullt()
    localStorage.removeItem("todo")
    todo.innerHTML = ""
})