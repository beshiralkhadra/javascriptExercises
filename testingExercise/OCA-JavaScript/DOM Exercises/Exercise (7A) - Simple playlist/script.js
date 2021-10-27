let add = document.getElementById('addBtn');

let playlist = document.getElementById('playlist');

add.addEventListener('click', function() {
    let newSong = document.createElement('h3');
        let songName=document.getElementById("songName");
        if(songName.value==""){
            alert("Please enter a song name");
        }
        else {
    playlist.style.display = 'block';
    playlist.appendChild(newSong);
    newSong.innerHTML = songName.value;
        }
    
});