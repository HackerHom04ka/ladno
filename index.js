// Импортируем модули
const express = require('express'); // Импортируем Express
const easyvk = require('easyvk'); // Импортируем EasyVK
const path = require('path'); // Импортируем Path
const readline = require('readline-sync');
const fs = require("fs");

// (НЕ)Переменные
let smiles = `@all 😀😁😂🤣😃😄😅😆😉😊😋😎😍😘😗😆😙😚☺🙂🤩🤗🤨🤔😐😑😶🙄😏😜🤐😔🤬😡😷😱😬😧🤤☹😳🤢🤢🤧😇😈😈👿🙀🤖👽💀☠👻😻😹😸😻🙊🙉🙈👩🧒👴👦👨‍⚕👨‍🎓👨‍🍳👨‍✈🧕👲👳‍♀👳🤴🕵💂👩‍🎤👨‍🎤👩‍💻👨‍💻💆🙋‍♂🧘🧗👯💆‍♂🏃‍♀🏃‍♀🛌⛷🤸‍♂🏋‍♀🏄🚵🤹🤾🤼🤹🤾🏄💑💗🤚💅✋✋🖕👆👆☝👉👊🤟🙌✍🤞🖖👏👃👍🤙🤜🤝💕💝💦💨💥💣💤💌🧣👑💭🛍🎒👠👔💬🦒🐿🦉🐓🐓🐓🐓🐳🐚🐛🐌🦑🕸🦂🕷🕸💐💮🏵🦐🦕🐧🐤🍔🥕🥝🍳🍿🍄🍞🎏🎍🎍🎏🎏🏉🏉🏉🏒🏒🏑🎟🎟🎟🎎🎎🎑🏅🏅🏉🏸🏸🌏🌏🗺🗺🥌🥌🎴⛺⛲⛲⛩⛩🏯🏯🏯🏦♨🚆🎪🛸🌆🛩🛎🕠🕜🕡👀all 🛋🌩🌛🌔🌕🌠🌞🌗🌤🌈🔉🔇📻🎹📢📯🎤🔌📜🔎🖲🔭📚💸🏷📰🕯📘📮✏🖋🖊📋✂📏📍⛏⚒💊🚹🚰🏧🚳🛃⚠🚷🔞🚯🔂🕎♈♒🔽🎦©❇✖📛🔆📳📴⃣🆓🔠💯🈺🉐🈹🈚🉑🈳🈴🔸🔷⬛🇦🇬🚩🏳‍🌈🏃‍♀😀😁😂🤣😃😄😅😆😉😊😋😎😍😘😗😆😙😚☺🙂🤩🤗🤨🤔😐😑😶🙄😏😜🤐😔🤬😡😷😱😬😧🤤☹😳🤢🤢🤧😇😈😈👿🙀🤖👽💀☠👻😻😹😸😻🙊🙉🙈👩🧒👴👦👨‍⚕👨‍🎓👨‍🍳👨‍✈🧕👲👳‍♀👳🤴🕵💂👩‍🎤👨‍🎤👩‍💻👨‍💻💆🙋‍♂🧘🧗👯💆‍♂🏃‍♀🏃‍♀🛌⛷🤸‍♂🏋‍♀🏄🚵🤹🤾🤼🤹🤾🏄💑💗🤚💅✋✋🖕👆👆☝👉👊🤟🙌✍🤞🖖👏👃👍🤙🤜🤝💕💝💦💨💥💣💤💌🧣👑💭🛍🎒👠👔💬🦒🐿🦉🐓🐓🐓🐓🐳🐚🐛🐌🦑🕸🦂🕷🕸💐💮🏵🦐🦕🐧🐤🍔🥕🥝🍳🍿🍄🍞🎏🎍🎍🎏🎏🏉🏉🏉🏒🏒🏑🎟🎟🎟🎎🎎🎑🏅🏅🏉🏸🏸🌏🌏🗺🗺🥌🥌🎴⛺⛲⛲⛩⛩🏯🏯🏯🏦♨🚆🎪🛸🌆🛩🛎🕠🕜🕡🕥🕠🕓🕒🚽🚽💺⛴🛋🌩🌛🌔🌕🌠🌞🌗🌤🌈🔉🔇📻🎹📢📯🎤🔌📜🔎🖲🔭📚💸🏷📰🕯📘📮✏🖋🖊📋✂📏📍⛏⚒💊🚹🚰🏧🚳🛃⚠🚷🔞🚯🔂🕎♈♒🔽🎦©❇✖📛🔆📳📴⃣🆓🔠💯🈺🉐🈹🈚🉑🈳🈴🔸🔷⬛🇦🇬🚩🏳‍🌈🏃‍♀😀😁😂🤣😃😄😅😆😉😊😋😎😍😘😗😆😙😚☺🙂🤩🤗🤨🤔😐😑😶🙄😏😜🤐😔🤬😡😷😱😬😧🤤☹😳🤢🤢🤧😇😈😈👿🙀🤖👽💀☠👻😻😹😸😻🙊🙉🙈👩🧒👴👦👨‍⚕👨‍🎓👨‍🍳👨‍✈🧕👲👳‍♀👳🤴🕵💂👩‍🎤👨‍🎤👩‍💻👨‍💻💆🙋‍♂🧘🧗👯💆‍♂🏃‍♀🏃‍♀🛌⛷🤸‍♂🏋‍♀🏄🚵🤹🤾🤼🤹🤾🏄💑💗🤚💅✋✋🖕👆👆☝👉👊🤟🙌✍🤞🖖👏👃👍🤙🤜🤝💕💝💦💨💥💣💤💌🧣👑💭🛍🎒👠👔💬🦒🐿🦉🐓🐓🐓🐓🐳🐚🐛🐌🦑🕸🦂🕷🕸💐💮🏵🦐🦕🐧🐤🍔🥕🥝🍳🍿🍄🍞🎏🎍🎍🎏🎏🏉@all🏉🏉🏒🏒🏑🎟🎟🎟🎎🎎🎑🏅🏅🏉🏸🏸🌏🌏🗺🗺🥌🥌🎴⛺⛲⛲⛩⛩🏯🏯🏯🏦♨🚆🎪🛸🌆🛩🛎🕠🕜🕡🕥🕠🕓🕒🚽🚽💺⛴🛋🌩🌛🌔🌕🌠🌞🌗🌤🌈🔉🔇📻🎹📢📯🎤🔌📜🔎🖲🔭📚💸🏷📰🕯📘📮✏🖋🖊📋✂📏📍⛏⚒💊🚹🚰🏧🚳🛃⚠🚷🔞🚯🔂🕎♈♒🔽🎦©❇✖📛🔆📳📴⃣🆓🔠💯🈺🉐🈹🈚🉑🈳🈴🔸🔷⬛🇦🇬🚩🏳‍🁀all ‍‍`;
let text1 = `@all ахахахахаххахаха пидорас официально слит!`;
let text2 = `@all По этим ссылкам вы перейдёте на популярные сайты гей-знакомств - https://vk.com/id382436953, https://vk.com/id409116609`;

token = fs.readFileSync("token.txt", "utf8");

// Сам код
easyvk({
  access_token: token,
  utils: {
	   longpoll: true,
     callbackAPI: true,
     streamingAPI: true
  }
}).then(vk => {
  console.log(`Info: Подключено`);
  console.log(`Info: ID подключенного пользователя ${vk.session.user_id}\nInfo: ФИ: ${vk.session.first_name} ${vk.session.last_name}`);
  let a = 1;
  console.log(`Notice: Выберите действие:\n1 - Выебать беседу\n2 - Выебать стену группы\n3 - Выебать личку пользователя\n4 - Выебать стену пользователя\n5 - Засрать комментарии поста\n6 - Засрать обсуждение`);
  poj = Number(readline.question(""));
  if (poj == 1) {
      console.log(`Notes: Введите ID беседы, которую хотите в жопу (или в рот) нахуй выебать:`);
      aye = Number(readline.question("c"));
      console.log(`Info: Принято`);
      const peer_id = 2000000000 + aye;
      console.log(`Info: peerID: ${peer_id}`);
      console.log(`Начат процесс рейда\nNotes: Каждые 12 секунд будет дабавлятся сообщение`);
      setInterval(function () {
        vk.post('messages.setActivity', {
        type: `typing`,
        peer_id: peer_id,
        }).then(() => {
          console.log(`Info: Отправка...`);
        }).catch((err) => {
          console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
          console.error(err);
        });
        setTimeout( function () {
          vk.post('messages.send', {
            message: `${text1}`,
            random_id: easyvk.randomId(),
            peer_id: peer_id,
            attachment: `wall578425189_836`
          }).then(() => {
            console.log(`Success: Сообщение отправлено`);
          }).catch((err) => {
            console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
            console.error(err);
        })}, 1500);
        setTimeout( function () {
          vk.post('messages.send', {
            message: `${text2}`,
            random_id: easyvk.randomId(),
            peer_id: peer_id,
          }).then(() => {
            console.log(`Success: Сообщение отправлено`);
          }).catch((err) => {
            console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
            console.error(err);
        })}, 2000);
        setTimeout( function () {
          vk.post('messages.send', {
            message: `${smiles}`,
            random_id: easyvk.randomId(),
            peer_id: peer_id,
          }).then(() => {
            console.log(`Success: Сообщение отправлено`);
          }).catch((err) => {
            console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
            console.error(err);
        })}, 2500);
    }, 5000);
  } else if (poj == 3) {
    console.log(`Notes: Введите ID беседы, которую хотите в жопу (или в рот) нахуй выебать:`);
    aye = Number(readline.question(""));
    console.log(`Info: Принято`);
    const peer_id = aye;
    console.log(`Info: peerID: ${peer_id}`);
    console.log(`Начат процесс рейда\nNotes: Каждые 12 секунд будет дабавлятся сообщение`);
    setInterval(function () {
      vk.post('messages.setActivity', {
      type: `typing`,
      peer_id: peer_id,
      }).then(() => {
        console.log(`Info: Отправка...`);
      }).catch((err) => {
        console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
        console.error(err);
      });
      setTimeout( function () {
        vk.post('messages.send', {
          message: `${text1}`,
          random_id: easyvk.randomId(),
          peer_id: peer_id,
          attachment: `wall578425189_836`
        }).then(() => {
          console.log(`Success: Сообщение отправлено`);
        }).catch((err) => {
          console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
          console.error(err);
      })}, 1500);
      setTimeout( function () {
        vk.post('messages.send', {
          message: `${text2}`,
          random_id: easyvk.randomId(),
          peer_id: peer_id,
        }).then(() => {
          console.log(`Success: Сообщение отправлено`);
        }).catch((err) => {
          console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
          console.error(err);
      })}, 2000);
      setTimeout( function () {
        vk.post('messages.send', {
          message: `${smiles}`,
          random_id: easyvk.randomId(),
          peer_id: peer_id,
        }).then(() => {
          console.log(`Success: Сообщение отправлено`);
        }).catch((err) => {
          console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
          console.error(err);
      })}, 2500);
  }, 5000);
} else if (poj == 2) {
      console.log(`Notice: Введите ЦИФРОВОЕ id группы`);
      aye = readline.question("-");
      group_id = Number("-" + aye);
      console.log(`Info: Принято`);
      setInterval(function () {
          vk.post('wall.post', {
              message: smiles,
              owner_id: group_id,
          }).then(() => {
              console.log(`Success: Сообщение отправлено`);
          }).catch((err) => {
              console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
              console.error(err);
          });
          vk.post('wall.post', {
              message: text1,
              attachments: "photo578425189_457243845,photo578425189_457243846,photo578425189_457243704",
              owner_id: group_id,
          }).then(() => {
              console.log(`Success: Сообщение отправлено`);
          }).catch((err) => {
              console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
              console.error(err);
          });
          vk.post('wall.post', {
              message: text2,
              owner_id: group_id,
          }).then(() => {
              console.log(`Success: Сообщение отправлено`);
          }).catch((err) => {
              console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
              console.error(err);
          });
      }, 5000)
  }else if (poj == 4) {
      console.log(`Notice: Введите ЦИФРОВОЕ id пользователя`);
      aye = readline.question("id");
      group_id = Number(aye);
      console.log(`Info: Принято`);
      setInterval(function () {
          vk.post('wall.post', {
              message: smiles,
              owner_id: group_id,
          }).then(() => {
              console.log(`Success: Сообщение отправлено`);
          }).catch((err) => {
              console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
              console.error(err);
          });
          vk.post('wall.post', {
              message: text1,
              attachments: "photo578425189_457243845,photo578425189_457243846,photo578425189_457243704",
              owner_id: group_id,
          }).then(() => {
              console.log(`Success: Сообщение отправлено`);
          }).catch((err) => {
              console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
              console.error(err);
          });
          vk.post('wall.post', {
              message: text2,
              owner_id: group_id,
          }).then(() => {
              console.log(`Success: Сообщение отправлено`);
          }).catch((err) => {
              console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
              console.error(err);
          });
      }, 5000)
  } else if (poj == 5) {
      console.log(`Notice: Введите ЦИФРОВОЕ id группы или пользователя, от имени которого написан данный пост ( группа с "-", пользователь без )`);
      aye = readline.question("");
      owner_id = Number(aye);
      console.log(`Notice: Введите id поста`);
      let post_id = readline.question("_");
      console.log(`Info: Принято`);
      setInterval(function () {
          vk.post('wall.createComment', {
              message: smiles,
              post_id: post_id,
              owner_id: owner_id,
          }).then(() => {
              console.log(`Success: Сообщение отправлено`);
          }).catch((err) => {
              console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
              console.error(err);
          });
          vk.post('wall.createComment', {
              message: text1,
              post_id: post_id,
              attachments: "photo578425189_457243845,photo578425189_457243846,photo578425189_457243704",
              owner_id: owner_id,
          }).then(() => {
              console.log(`Success: Сообщение отправлено`);
          }).catch((err) => {
              console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
              console.error(err);
          });
          vk.post('wall.createComment', {
              message: text2,
              post_id: post_id,
              owner_id: owner_id,
          }).then(() => {
              console.log(`Success: Сообщение отправлено`);
          }).catch((err) => {
              console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
              console.error(err);
          });
      }, 5000)
  } else if (poj == 6) {
      console.log(`Notice: Введите ЦИФРОВОЕ id группы`);
      aye = readline.question("club");
      owner_id = Number(aye);
      console.log(`Notice: Введите id обсуждения`);
      let post_id = readline.question("_");
      console.log(`Info: Принято`);
      setInterval(function () {
          vk.post('board.createComment', {
              message: smiles,
              topic_id: post_id,
              group_id: owner_id,
          }).then(() => {
              console.log(`Success: Сообщение отправлено`);
          }).catch((err) => {
              console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
              console.error(err);
          });
          vk.post('board.createComment', {
              message: text1,
              topic_id: post_id,
              attachments: "photo578425189_457243845,photo578425189_457243846,photo578425189_457243704",
              group_id: owner_id,
          }).then(() => {
              console.log(`Success: Сообщение отправлено`);
          }).catch((err) => {
              console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
              console.error(err);
          });
          vk.post('board.createComment', {
              message: text2,
              topic_id: post_id,
              group_id: owner_id,
          }).then(() => {
              console.log(`Success: Сообщение отправлено`);
          }).catch((err) => {
              console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
              console.error(err);
          });
      }, 5000)
  } else {
    console.log(`Данной функции не существует либо разрабатывается`);
  }
}).catch((err) => {
  console.log(`Error: Произошла ошибка\nПодробнее:\n\n`);
  console.error(err);
});
