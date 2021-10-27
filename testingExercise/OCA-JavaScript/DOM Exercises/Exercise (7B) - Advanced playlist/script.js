let add = document.getElementById('addBtn');
let del = document.getElementById('del');
let playlist = document.getElementById('playlist');

add.addEventListener('click', function() {
    let newSong = document.createElement('div');
        let songName=document.getElementById("songName");
        if (songName.value == "") {
            alert("Please enter a song name");
        } else {
            playlist.style.display = 'block';
            playlist.appendChild(newSong);
            newSong.innerHTML = songName.value;
            let removeBtn = document.createElement('button');
            removeBtn.innerHTML = 'Delete';
            newSong.appendChild(removeBtn);
            removeBtn.addEventListener('click', function() {
                playlist.removeChild(newSong);
        });  
        }
});

