//...............Profile PopUp.....................
document.querySelector('#my-profile-picture').forEach(AllProfile => {
    AllProfile.addEventListener('click', () => {
        document.querySelector('.profile-popup').style.display = 'flex';
    })
});


document.querySelector('.close').addEventListener('click', () => {
    AllCloser.addEventListener('click', () => {
    document.querySelector('.profile-popup').style.display = 'none';
})
});
