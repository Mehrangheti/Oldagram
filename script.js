let likes = document.querySelectorAll('.like');
let likeContents = document.querySelectorAll('.liksContent');

let isLikedArray = Array.from({ length: likes.length }).fill(false); 

likes.forEach((like, index) => {
    like.addEventListener('click', function (e) {
        if (!isLikedArray[index]) {
            likeContents[index].innerHTML = parseInt(likeContents[index].innerHTML) + 1 + " Like";
            like.src='images/images.png';
            isLikedArray[index] = true;
        } 
        else {
            likeContents[index].innerHTML = parseInt(likeContents[index].innerHTML) - 1 + " Like";
            like.src = 'images/icon-heart.png'; 
            isLikedArray[index] = false;
        }
    });
});
