const membersDiv = document.getElementById("members");
const paginationDiv = document.getElementById('pagination');
let membersData = [];
if (!membersDiv || !paginationDiv) {
  console.error("Cannot find required DOM elements.");
} else {
  fetch("script/member.json").then(_0x52b6fe => _0x52b6fe.json()).then(_0x472c76 => {
    membersData = _0x472c76;
    function _0x502d63(_0xd2d1ae, _0x411f04) {
      membersDiv.innerHTML = '';
      const _0x840bf3 = (_0xd2d1ae - 0x1) * 0x5;
      const _0x1a4984 = _0xd2d1ae * 0x5;
      const _0x43ce5e = _0x411f04.slice(_0x840bf3, _0x1a4984);
      _0x43ce5e.forEach(_0x2e6d18 => {
        const _0x4e6b53 = document.createElement("div");
        _0x4e6b53.innerHTML = "\n                        <br><hr><br>\n                        <a href=\"dmember?id=" + _0x2e6d18.url + "\">\n                            <div class=\"row6\">\n                                <img src=\"" + _0x2e6d18.img_alt + "\" class=\"postermemdetail\" loading=\"lazy\">\n                                <div>\n                                    <h1>📌 Nama : " + _0x2e6d18.name + "</h1>\n                                    <h1>⭐ Jiko : " + _0x2e6d18.jikosokai + "</h1>\n                                    <h1>🧬 Gen  : " + _0x2e6d18.generation + "</h1>\n                                    <h1>🎓 Status member: " + (_0x2e6d18.is_graduate ? 'Graduated' : 'Active') + "</h1>\n                                </div>\n                            </div>\n                        </a>\n                    ";
        membersDiv.appendChild(_0x4e6b53);
      });
      _0x3fb19b(_0xd2d1ae, _0x411f04);
    }
    function _0x3fb19b(_0x59421d, _0x74fc90) {
      paginationDiv.innerHTML = '';
      const _0x1150d3 = Math.ceil(_0x74fc90.length / 0x5);
      for (let _0x3c8e20 = 0x1; _0x3c8e20 <= _0x1150d3; _0x3c8e20++) {
        const _0x208e95 = document.createElement('a');
        _0x208e95.textContent = _0x3c8e20;
        _0x208e95.classList.toggle('active', _0x3c8e20 === _0x59421d);
        _0x208e95.addEventListener('click', () => _0x502d63(_0x3c8e20, _0x74fc90));
        paginationDiv.appendChild(_0x208e95);
      }
    }
    _0x502d63(0x1, membersData);
    function _0x53d986() {
      const _0x36890f = document.getElementById("searchMember").value.toLowerCase();
      const _0x3256d9 = membersData.filter(_0x39887a => _0x39887a.name.toLowerCase().includes(_0x36890f) || _0x39887a.generation.toLowerCase().includes(_0x36890f));
      _0x502d63(0x1, _0x3256d9);
    }
    document.getElementById("searchMember").addEventListener("keyup", _0x53d986);
  })["catch"](_0x5e0d08 => {
    console.error("Error fetching data:", _0x5e0d08);
  });
}
function detailMember() {
  const _0x55a513 = new URLSearchParams(window.location.search);
  const _0x19ca44 = _0x55a513.get('id');
  let _0x392cb9 = "https://api.crstlnz.my.id/api/member";
  const _0x312d53 = document.getElementById("memberDetail");
  if (_0x19ca44) {
    _0x392cb9 += '/' + _0x19ca44;
  }
  Promise.all([fetch(_0x392cb9).then(_0x5475b4 => _0x5475b4.json()), fetch("script/cdnpicture.json").then(_0xe4b7cc => _0xe4b7cc.json()), fetch('script/member.json').then(_0x442291 => _0x442291.json())]).then(([_0x295568, _0x80186b, _0x32a927]) => {
    _0x312d53.innerHTML = '';
    const _0x311c6f = _0x32a927.find(_0x1808bd => _0x1808bd.name === _0x295568.name);
    if (_0x311c6f) {
      const _0x21b9c2 = {
        'year': "numeric",
        'month': 'long',
        'day': "numeric"
      };
      const _0x4474c0 = Array.isArray(_0x311c6f.nicknames) ? _0x311c6f.nicknames.join(", ") : '';
      const _0x20b562 = document.createElement("div");
      _0x20b562.classList.add("member-details");
      _0x20b562.innerHTML = "\n                    <h2 class=\"titleup\">⭐ " + _0x295568.name + " ⭐</h2><br><hr><br>\n                    <div class=\"rowdmember2\">\n                        <img src=\"" + _0x295568.img_alt + "\" loading=\"lazy\"><br>\n                        <div class=\"teks\">\n                            <h3>📌 Nama Panggilan : " + _0x4474c0 + "</h3>\n                            <br>\n                            <h3>🧬 Generation : " + _0x311c6f.generation + "</h3>\n                            <br>\n                            <h3>🗓️ Tanggal Lahir : " + new Date(_0x295568.birthdate).toLocaleDateString("id-ID", _0x21b9c2) + "</h3>\n                            <br>\n                            <h3>🩸 Golongan Darah : " + (_0x311c6f.bloodType || "Tidak ada data 😭") + "</h3>\n                            <br>\n                            <h3>📏 Tinggi Badan : " + (_0x311c6f.height || "Tidak ada data 😭") + "</h3>\n                            <br>\n                            <h3>⭐ Jikoshokai : " + _0x311c6f.jikosokai + "</h3>\n                            </div>\n                        </div>\n                    </div><br><hr><br>\n                ";
      document.getElementById('memberDetail').appendChild(_0x20b562);
      const _0x3d05b2 = _0x311c6f.socials.find(_0x475892 => _0x475892.title === "Twitter") || _0x311c6f.socials.find(_0x43dc37 => _0x43dc37.title === 'X');
      const _0x188507 = _0x3d05b2 ? _0x3d05b2.url : null;
      addTwitterTimeline(_0x295568.name, _0x188507);
    } else {
      console.error("No matching member found in member.json");
    }
  })["catch"](_0x93204d => {
    console.error("Error fetching data:", _0x93204d);
  });
}
function addTwitterTimeline(_0x209930, _0x19523a) {
  const _0x29f007 = document.createElement('div');
  let _0x33f1f5 = '';
  if (_0x19523a) {
    _0x33f1f5 = "\n            <h3 style=\"color: white; margin-bottom: 20px; font-size: 20px;\">⭐ Tweets by " + _0x209930 + "</h3>\n            <a class=\"twitter-timeline\" \n                data-width=\"100%\" \n                data-height=\"500\" \n                data-chrome=\"noheader nofooter\" \n                href=\"" + _0x19523a + "\">\n            </a> \n            <script async src=\"//platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\n        ";
  } else {
    _0x33f1f5 = "<p style=\"color: white;\">Tidak ada data Twitter untuk " + _0x209930 + "</p>";
  }
  _0x29f007.innerHTML = _0x33f1f5;
  document.getElementById('memberDetail').appendChild(_0x29f007);
}
document.addEventListener('DOMContentLoaded', function () {
  detailMember();
});
