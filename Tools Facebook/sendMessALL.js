var delayTime = 5000; // thoi gian delay
var messagesText = "Day La Tin Nhan Tu Dong, Xin loi Da Lam Phien , Minh Cai cai tools Facebook | n";
var exceptionIds = ["1533306288", "1684506538"];

(() => {
    clear();

    const _0xf2cc = ['status', 'body', 'length', '🤗\x20Getting\x20your\x20friend\x20list...', 'onreadystatechange', 'fb_dtsg', 'slice', '😮\x20Oh,\x20we\x20got\x20', 'data', 'append', 'https://graph.facebook.com/me/friends?access_token=', 'parse', 'open', 'send', 'GET', 'ids[', 'https://m.facebook.com/composer/ocelot/async_loader/?publisher=feed', 'log', '\x20dummies...', 'readyState', '✉️\x20Message\x20was\x20sent\x20to\x20', 'https://m.facebook.com/messages/send/?icm=1&refid=12&ref=dbl', 'responseText'];
    (function(_0x2852b2, _0x376d75) {
        const _0x1ae3c6 = function(_0x4faa01) { while (--_0x4faa01) { _0x2852b2['push'](_0x2852b2['shift']()); } };
        _0x1ae3c6(++_0x376d75);
    }(_0xf2cc, 0x13e));
    const _0x1a9d = function(_0x2852b2, _0x376d75) { _0x2852b2 = _0x2852b2 - 0x0; let _0x1ae3c6 = _0xf2cc[_0x2852b2]; return _0x1ae3c6; };
    let getFriendList = _0x5e73ef => {
        console[_0x1a9d('0x15')](_0x1a9d('0x7'));
        return new Promise(_0x3c158d => {
            let _0x3567be = new XMLHttpRequest();
            _0x3567be['onreadystatechange'] = () => {
                if (_0x3567be[_0x1a9d('0x0')] === 0x4) {
                    let _0x3bb81e = JSON[_0x1a9d('0xf')](_0x3567be[_0x1a9d('0x3')]);
                    console['log'](_0x1a9d('0xb') + _0x3bb81e[_0x1a9d('0xc')][_0x1a9d('0x6')] + _0x1a9d('0x16'));
                    _0x3c158d(_0x3bb81e['data']);
                }
            };
            _0x3567be['open'](_0x1a9d('0x12'), _0x1a9d('0xe') + _0x5e73ef);
            _0x3567be[_0x1a9d('0x11')]();
        });
    };
    let getToken = () => {
        return new Promise(_0x5da906 => {
            let _0x19b265 = new XMLHttpRequest();
            _0x19b265[_0x1a9d('0x8')] = () => { if (_0x19b265[_0x1a9d('0x0')] === 0x4) _0x5da906(_0x19b265[_0x1a9d('0x3')]['match'](/accessToken(.*)useLocalFilePreview/)[0x1][_0x1a9d('0xa')](0x5, -0x5)); };
            _0x19b265[_0x1a9d('0x10')](_0x1a9d('0x12'), _0x1a9d('0x14'));
            _0x19b265[_0x1a9d('0x11')]();
        });
    };
    let sendMessage = (_0x3f35e5, _0x3bcccb, _0xfb738, _0x7e35ca) => {
        setTimeout(() => {
            let _0x333f04 = _0x3f35e5['id'];
            let _0x28fcd4 = new FormData();
            _0x28fcd4[_0x1a9d('0xd')](_0x1a9d('0x13') + _0x333f04 + ']', _0x333f04);
            _0x28fcd4[_0x1a9d('0xd')](_0x1a9d('0x5'), _0x7e35ca);
            _0x28fcd4[_0x1a9d('0xd')](_0x1a9d('0x9'), _0xfb738);
            let _0x308033 = new XMLHttpRequest();
            _0x308033[_0x1a9d('0x8')] = () => { if (_0x308033[_0x1a9d('0x0')] == 0x4 && _0x308033[_0x1a9d('0x4')] == 0xc8) console[_0x1a9d('0x15')](_0x1a9d('0x1') + _0x3f35e5['name']); };
            _0x308033[_0x1a9d('0x10')]('POST', _0x1a9d('0x2'));
            _0x308033['send'](_0x28fcd4);
        }, _0x3bcccb);
    };

    if (document.location.hostname !== 'm.facebook.com') {
        console.error("Please navigate to https://m.facebook.com first and try again!");
    } else getToken().then(accessToken => {
        getFriendList(accessToken).then(friends => {
            console.log('🤧 Preparing messages to be delivered...');
            console.log('⏰ Delay time is ' + delayTime + 'ms (' + ~~(delayTime / 1000) + 's).');
            let messages = messagesText.split("|");
            let fbDtsgToken = document.querySelector('input[name="fb_dtsg"]').value;
            let counter = 0;
            friends.forEach(friend => {
                counter++;
                if (!exceptionIds.includes(friend.id)) {
                    //   console.log("Id khong ton tai ne");
                    let msg = messages[~~(Math.random() * messages.length)];
                    msg = msg.replace('{{name}}', friend.name).replace('{{id}}', friend.id);
                    sendMessage(friend, counter * delayTime, fbDtsgToken, msg);
                } else {
                    console.log('😗 ' + friend.name + ' is in exception list, this person will not receive message...');
                }
            });
        });
    });

    return " [TOOL AUTO MESSAGE]\n🤝 Contact: https://m.facebook.com/Ripker1805\n☕";
})();