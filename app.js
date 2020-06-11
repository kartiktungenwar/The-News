let node = document.getElementById('div1');
let node8 = document.getElementById('div2');
let node9 = document.getElementById('div3');
let node10 = document.getElementById('div4');
let node11 = document.getElementById('div5');
let node12 = document.getElementById('div6');
function topHeadlines(node){
    let arr = [];
let node1 = document.createElement('ul');

node1.className = "list-unstyled";

node.append(node1);

fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=952da71b07954070b1fd98d174b01d11')
.then((res)=>{
        return res.json();
}).then((res2)=>{
        arr = res2.articles;
        arr.forEach(element => {
                let node2 = document.createElement('li');
                node2.className = "media random";

                let node7 = document.createElement('img');
                node7.src = element.urlToImage;
                node7.className = "mr-3";
                node7.height = "32";
                node7.width = "32";

                let node4 = document.createElement('div');
                node4.className ="media-body";

                let node6 = document.createElement('a');
                node6.href = element.url;

                let node5 = document.createElement('h6');
                node5.append(element.title);
                
                let node3 = document.createElement('p');
                node3.className ="blockquote-footer";
                node3.append(element.description);

                node1.append(node2);
                node2.append(node7);
                node2.append(node4);
                node4.append(node6);
                node6.append(node5);
                node4.append(node3);
        });
})
}

function otherNews(node,cat){
    let arr = [];
let node1 = document.createElement('ul');

node1.className = "list-unstyled";

node.append(node1);

fetch(cat)
.then((res)=>{
        return res.json();
}).then((res2)=>{
        arr = res2.articles;
        arr.forEach(element => {
                let node2 = document.createElement('li');
                node2.className = "media random";

                let node7 = document.createElement('img');
                node7.src = element.urlToImage;
                node7.className = "mr-3";
                node7.height = "32";
                node7.width = "32";

                let node4 = document.createElement('div');
                node4.className ="media-body";

                let node6 = document.createElement('a');
                node6.href = element.url;

                let node5 = document.createElement('h6');
                node5.append(element.title);
                
                let node3 = document.createElement('p');
                node3.className ="blockquote-footer";
                node3.append(element.description);

                node1.append(node2);
                node2.append(node7);
                node2.append(node4);
                node4.append(node6);
                node6.append(node5);
                node4.append(node3);
        });
})
}

topHeadlines(node)
otherNews(node8,'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=952da71b07954070b1fd98d174b01d11')
otherNews(node9,'https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=952da71b07954070b1fd98d174b01d11')
otherNews(node10,'https://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=952da71b07954070b1fd98d174b01d11')
otherNews(node11,'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=952da71b07954070b1fd98d174b01d11')
otherNews(node12,'https://newsapi.org/v2/top-headlines?country=in&category=technologys&apiKey=952da71b07954070b1fd98d174b01d11')
