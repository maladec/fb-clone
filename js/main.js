document.querySelector('.search-input').onblur = function () {
    if (document.querySelector('.recent-searches:hover')) {
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
    btn.onmousedown = function () {
        if (document.activeElement === this && !this.querySelector('.popup:hover')) {
            this.blur();
            return false;
        }
    }
});

document.querySelector('.conversations').onmousemove = function () {
    if (document.querySelector('.friend:hover')) {
        this.style.paddingLeft = '400px';
        document.querySelector('.games').style.left = '401px';
    } else {
        this.style.paddingLeft = '0';
        document.querySelector('.games').style.left = '1px';
    }
}

document.querySelector('.conv-search-inp').onkeyup = function (e) {
    let val = this.value.toLowerCase();
    document.querySelectorAll('.friend').forEach(function (fr) {
        let name = fr.querySelector('.friend-name').innerHTML.toLowerCase();
        if (name.indexOf(val) != -1) {
            fr.style.display = '';
        } else {
            fr.style.display = 'none';
        }
    });
}


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
    if (friend.followers)
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
    avatar.classList.add('round-icon');
    avatar.style.backgroundImage = `url(${friend.avatar_url})`;

    let frName = document.createElement('div');
    frName.classList.add('friend-name');
    frName.innerHTML = friend.name + ' ' + friend.lastname;

    let frStatus = document.createElement('div');
    frStatus.classList.add('friend-status');
    if (friend.last_online) {
        frStatus.innerHTML = friend.last_online + 'm';
    } else {
        frStatus.classList.add('online');
    }

    let frInfo = createFriendInfo(friend);

    fr.appendChild(avatar);
    fr.appendChild(frName);
    fr.appendChild(frStatus);
    fr.appendChild(frInfo);
    return fr;
}


let addConv = () => {
    data.friends.forEach((friend) => {
        let fr = createFriend(friend);
        document.querySelector('.friends').appendChild(fr);
    });
};


let createGame = (game) => {
    let gmDiv = document.createElement('div');
    gmDiv.classList.add('game');
    gmDiv.style.backgroundImage = `url(${game.game_photo})`;
    return gmDiv;
}

let addGames = () => {
    data.main_games.forEach((game) => {
        let gm = createGame(game);
        document.querySelector('.main-games').appendChild(gm);
    });
}

let createInstantGame = (game) => {
    let gmDiv = document.createElement('div');
    gmDiv.classList.add('game');
    gmDiv.classList.add('friend-photo');
    gmDiv.style.backgroundImage = `url(${game.avatar_url})`;
    let gmLogo = document.createElement('div');
    gmLogo.classList.add('game-logo');
    gmLogo.style.backgroundImage = `url(${game.game_photo})`;
    gmDiv.appendChild(gmLogo);
    return gmDiv;    
}


let addInstantGames = () => {
    data.instant_games.forEach((game) => {
        let gm = createInstantGame(game);
        document.querySelector('.instant-games').appendChild(gm);
    });
}

let createStory = (story) => {
    let st = document.createElement('div');
    st.classList.add('story');

    let icon = document.createElement('div');
    icon.classList.add('round-icon');
    icon.style.backgroundImage = `url(${story.author.avatar_url})`;

    let info = document.createElement('div');
    info.classList.add('story-info');
    
    let author = document.createElement('div');
    author.classList.add('story-author');
    author.innerHTML = story.author.name;

    let time = document.createElement('div');
    time.classList.add('story-time');
    time.innerHTML = story.uploaded + ' minutes ago';

    info.appendChild(author);
    info.appendChild(time);

    st.appendChild(icon);
    st.appendChild(info);
    
    return st;
}

let addStories = () => {
    data.stories.forEach((story) => {
        let st = createStory(story);
        document.querySelector('.stories').appendChild(st);
    });
}

addConv();
addConv();
addConv();
addConv();
addConv();
addConv();
addConv();
addConv();

addGames();
addInstantGames();
addStories();
