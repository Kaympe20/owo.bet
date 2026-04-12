<template>
    <div class="parent-container">
        <div class="content-container">
            <div class="image-text-container">
                <img src="https://avatars.githubusercontent.com/u/117483128?v=4" alt="Profile Image">
                <div>
                    <h1 class="">Welcome to Kayla's Korner</h1>
                    <p>
                    This is a simple website to host some of my blogs!
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

.parent-container {
    background-image: url("https://cloud-r8rn7pewe-hack-club-bot.vercel.app/0pxl_20240720_143251592.jpg");
    background-size: cover;
    background-attachment: fixed;
    height: 75vh;
    border-radius: 20px;
    font-family: lato;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 80vw;
    position: relative;
    margin-bottom: -200px;
}

.content-container {
    border: solid black;
    padding: 0 64px 0 64px;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 30px;
}

.image-text-container {
    display: flex;
    align-items: center;
    color: white;
}

.image-text-container img {
    margin: 1em 16px 1em 0;
    border-radius: 30px;
}
</style>