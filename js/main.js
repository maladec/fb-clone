document.querySelector('.search-input').onblur = function(){
    if(document.querySelectorAll('.recent-searches:hover').length){
        this.focus();
    }
}

document.querySelectorAll('.user-name').forEach((elem) => {  
    elem.innerHTML += data.user.name;
});

document.querySelectorAll('.user-lastname').forEach((elem) => {  
    elem.innerHTML += ' ' + data.user.lastname;
});

document.querySelectorAll('.user-avatar').forEach((elem) => {  
    elem.style.backgroundImage = `url(${data.user.avatar_url})`;
});

document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.onmousedown = function(){
        console.log('dooown');
        console.log(document.activeElement);
        console.log(this);
        console.log(document.activeElement === this);
        console.log(this.querySelectorAll('.popup:hover').length);
        if(document.activeElement === this && !this.querySelectorAll('.popup:hover').length){
            this.blur();
            return false;
        }
    }
});


let createFriendInfo = (friend) => {
    let info = document.createElement('div');
    info.classList.add('friend-info');

    let frPhoto = document.createElement('div');
    frPhoto.classList.add('friend-photo');
    frPhoto.style.backgroundImage = `url(${friend.avatar_url})`;

    let d = document.createElement('div');
    let nameLink = document.createElement('a');
    nameLink.classList.add('friend-name-link');
    nameLink.href = '';
    nameLink.innerHTML = friend.name + ' ' + friend.lastname;

    let followers = document.createElement('span');
    followers.classList.add('friend-followers');
    if(friend.followers)
        followers.innerHTML = friend.followers + ' followers';
    
    let living = document.createElement('div');
    living.classList.add('living-block');

    let fa = document.createElement('i');
    fa.classList.add('fa');
    fa.classList.add('fa-home');

    let lv = document.createElement('span');
    lv.classList.add('living');
    lv.innerHTML = friend.country + ', ' + friend.city;

    living.appendChild(fa);
    living.innerHTML += 'Lives in ';
    living.appendChild(lv);
    d.appendChild(nameLink);
    d.appendChild(followers);
    d.appendChild(living);
    info.appendChild(frPhoto);
    info.appendChild(d);
    
    return info;
    
}

let createFriend = (friend) => {
    let fr = document.createElement('div');
    fr.classList.add('friend');

    let avatar = document.createElement('div');
    avatar.classList.add('user-avatar');
    avatar.style.backgroundImage = `url(${friend.avatar_url})`;

    let frName = document.createElement('div');
    avatar.classList.add('friend-name');
    frName.innerHTML = friend.name + ' ' + friend.lastname;

    let frStatus = document.createElement('div');
    frStatus.classList.add('friend-status');
    if(friend.last_online){
        frStatus.innerHTML = friend.last_online + 'm';
    }else {
        frStatus.classList.add('online');
    }

    let frInfo = createFriendInfo(friend);

    fr.appendChild(avatar);
    fr.appendChild(frName);
    fr.appendChild(frStatus);
    fr.appendChild(frInfo);
    return fr;
}


let addConv = () => { data.friends.forEach((friend) => {
    let fr = createFriend(friend);
    document.querySelector('.conversations').appendChild(fr);
})};

addConv();
addConv();
addConv();
addConv();
addConv();
addConv();
addConv();
