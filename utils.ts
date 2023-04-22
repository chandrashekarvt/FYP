

export const getResult = async (path: string) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=JXKpXceGmKoaL8yPyVgKXyF9Gu3KBe8H");

    let requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };
    try {
        let res = await fetch(path, requestOptions);
        return res.json()
    } catch (err) {
        console.log('error', err)
    }
}

export const loginUser = async (username: string, password: string, is_tester: boolean, isRegister: boolean) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=JXKpXceGmKoaL8yPyVgKXyF9Gu3KBe8H");

    var raw;

    if (isRegister) {
        raw = JSON.stringify({ "username": username, "password": password, "is_tester": is_tester });
    } else {
        raw = JSON.stringify({ "username": username, "password": password });
    }
    var requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    let response;

    if (!isRegister) {
        response = await fetch("http://localhost:8000/malwaredetection/login", requestOptions)
    } else {
        response = await fetch("http://localhost:8000/malwaredetection/register", requestOptions)

    }

    let pp = await response.json()


    return pp;
}

export const postResult = async (hash: string, cont: number, link: string, percent: number) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=JXKpXceGmKoaL8yPyVgKXyF9Gu3KBe8H");

    var raw = JSON.stringify({ "hash": hash, "contribution": cont, "link": link, "percent": percent });

    var requestOptions: RequestInit = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch("http://localhost:8000/malwaredetection/new", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}


export const putResult = async (hash: string, obj: any) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Cookie", "csrftoken=JXKpXceGmKoaL8yPyVgKXyF9Gu3KBe8H");

    var raw = JSON.stringify(obj);

    var requestOptions: RequestInit = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(`http://localhost:8000/malwaredetection/update/${hash}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
}
