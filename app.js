const button = document.querySelector("#addBtn");
button.addEventListener('click',()=>{
    add_new();
})

const add_new = ()=>{
    const placeh = document.querySelector("#taskInput");
    let text = placeh.value.trim();
    if(text===" ")return;
    const el = document.createElement("li");

    const text_div = document.createElement("div");
    text_div.className = "text-div";
    text_div.textContent = text;

    const but_div = document.createElement("div");
    but_div.className = "but-div";

    const check_box = document.createElement("input");
    check_box.type = "checkbox";

    const del = document.createElement("button");
    del.textContent = "🗑️";

    const upd = document.createElement("button");
    upd.textContent = "🖊️";

    but_div.appendChild(upd);
    but_div.appendChild(del);

    el.appendChild(check_box);
    el.appendChild(text_div);
    el.appendChild(but_div);

    const list = document.querySelector("#taskList");
    list.appendChild(el);
    placeh.value="";
    del.addEventListener('click',()=>{
        list.removeChild(el);
    })
    let bol = true; 
    upd.addEventListener('click',()=>{
        if(bol){
            el.contentEditable=true;
            upd.textContent="✅";
            bol=false;
        }
        else{
            el.contentEditable=false;
            upd.textContent="🖊️";
            bol=true;
        }
    })
}

