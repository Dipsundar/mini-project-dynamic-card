// const dummy_posts = [
//     {
//         title: 'this is title - 1',
//         body: 'lorem ipsum description 1',
//     },
//     {
//         title: 'this is title - 2',
//         body: 'lorem ipsum description 2',
//     },
//     {
//         title: 'this is title - 3',
//         body: 'lorem ipsum description 3',
//     },
//     {
//         title: 'this is title - 4',
//         body: 'lorem ipsum description 4',
//     },
//     {
//         title: 'this is title - 5',
//         body: 'lorem ipsum description 5',
//     },
//     {
//         title: 'this is title - 6',
//         body: 'lorem ipsum description 6',
//     },
//     {
//         title: 'this is title - 7',
//         body: 'lorem ipsum description 7',
//     },
//     {
//         title: 'this is title - 8',
//         body: 'lorem ipsum description 8',
//     },

// ];


// selection........


const fetchData = async (config)=>{
    try{
        const res = await axios(config);
        return res.data;
    }catch(Error){
        throw Error('someting running wrong..');
    }
}




const posts = document.querySelector('.posts');

(async () => {
    const dummy_posts = await fetchData('https://jsonplaceholder.typicode.com/posts');
    dummy_posts.map((dummy_posts) => {
        console.log(dummy_posts);
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
                                <h4 class="post-title">${dummy_posts.title}</h4>
                                <p class="post-body">${dummy_posts.body}</p>`;
        posts.appendChild(postElement);
    });
})();



{/* <div class="post">
    <h4 class="post-title">post title</h4>
    <p class="post-body">Lorem ipsum dolor sit amet.</p>
</div> */}