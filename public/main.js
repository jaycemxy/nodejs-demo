
getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", "/4.xml");
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        const dom = request.responseXML;
        const text = dom.getElementsByTagName("warning")[0].textContent;
        console.log(text.trim());
      }
    };
    request.send();
  };

getHTML.onclick = ()=> {
    const request = new XMLHttpRequest
    request.open('GET', '/3.html');
    request.onload = ()=> {
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror =()=>{
        console.log('失败了！！')
    }
    request.send()
};


getJS.onclick =()=> {
    const request = new XMLHttpRequest();
    console.log('这里是请求的内容', request)
    request.open('GET', '/2.js');
    request.onload = ()=> {
        console.log('这里是响应的内容',request.response)
        const script = document.createElement('script')
        script.innerHTML = request.response
        document.body.appendChild(script)
    }
    request.onerror = ()=> {
        console.log('失败了')
    }
    request.send()
}

getCSS.onclick = ()=>{
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange =()=> {
        console.log(request.readyState)
        if(request.readyState === 4){
            // 下载完成 但不知道是 成功状态2xx 完成还是 失败状态4xx 5xx 完成
            if(request.status >=200 && request.status < 300){
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            } else {
                alert('失败了');
            }
        }
    }
    // request.onload = ()=>{
    //     const style = document.createElement('style')
    //     style.innerHTML = request.response
    //     document.head.appendChild(style)
    // };
    // request.onerror = ()=> {
    //     console.log('失败了')
    // };
    request.send()
}

getJSON.onclick = ()=> {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const object = JSON.parse(request.response);
            console.log(object)
        }
    }
    request.send();
}


let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n+1}`);
    console.log(request.response)
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200) {
            console.log(request.response)
            const array = JSON.parse(request.response)
            array.forEach(item => {
                const li = document.createElement("li");
                li.textContent = item.id
                xxx.appendChild(li)
            })
            n += 1
        }
    }
    request.send();
}


