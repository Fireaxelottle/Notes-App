// 
// 
const noteInLs = JSON.parse(localStorage.getItem('AllNotes'));
const addBtn = document.getElementById("add");

// new note making function

addBtn.addEventListener('click', () => {
    addNote();
});

// fuctin of creating a note
const addNote = (note = "") => {

    const noteEl = document.createElement("div");
    noteEl.classList.add('note');

    noteEl.innerHTML = `
        <div class="tools">
            <button id="edit"><i class="fa-solid fa-pen-to-square"></i></button>
            <button id="delete"><i class="fa-solid fa-trash"></i></button>
        </div>
        <div class="main  hidden">
        </div>
        <textarea ></textarea>
    `;

    // putting not in body
    document.body.appendChild(noteEl);
    // varibles
    const deleteBtn = noteEl.querySelector('#delete');
    const editBtn = noteEl.querySelector('#edit');
    const main = noteEl.querySelector('.main');
    const textarea = noteEl.querySelector('textarea')

    let TextData;

    textarea.value = note;

    // function of del and edit button and updating Local storage

    editBtn.addEventListener('click', () => {
        main.classList.toggle('hidden');
        textarea.classList.toggle('hidden');

        if (textarea.classList.contains('hidden')) {
            main.innerHTML = textarea.value;
        } else {
            main.innerHTML = "";
        }

        UpdateLs();
    });


    deleteBtn.addEventListener('click', () => {
        noteEl.remove();
        UpdateLs();
    });


    textarea.addEventListener('keydown', () => {
        UpdateLs();
    });;
}




// notes in local storage adder
if (noteInLs) {
    noteInLs.forEach((note) => {
        addNote(note);
    });
};




// Storing data in Ls
const UpdateLs = () => {
    const textarea = document.querySelectorAll('textarea');
    allNotes = [];

    textarea.forEach((textarea) => {
        allNotes.push(textarea.value);
    });

    localStorage.setItem('AllNotes', JSON.stringify(allNotes));
}