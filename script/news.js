let currentPage = 0x1;
function limitNews(_0x255c2f) {
  fetch("https://api.crstlnz.my.id/api/news?page=" + currentPage + '&perpage=' + 0x6).then(_0x5b6b4e => _0x5b6b4e.json()).then(_0x40d1a4 => {
    document.getElementById("newsLimit").innerHTML = '';
    _0x40d1a4.news.forEach(_0x43025f => {
      const _0x1bb645 = document.createElement("div");
      const _0x8db299 = {
        'year': "numeric",
        'month': "long",
        'day': "numeric"
      };
      _0x1bb645.innerHTML = "\n                    <a href=\"dnews?id=" + _0x43025f.id + "\"><br>\n                    <div class=\"row1\">\n                        <img src=\"https://res.cloudinary.com/haymzm4wp/image/upload/assets/jkt48" + _0x43025f.label + "\" alt=\"Category Icon\">\n                        <p class=\"date\">" + new Date(_0x43025f.date).toLocaleDateString('id-ID', _0x8db299) + "</p>\n                    </div>\n                        <h2>" + _0x43025f.title + "</h2><br><hr>\n                    </a>\n                ";
      document.getElementById("newsLimit").appendChild(_0x1bb645);
    });
  })['catch'](_0x5abb5e => console.error("Error fetching data:", _0x5abb5e));
}
function limitNewsmember(_0x2fe659) {
  fetch("https://api.crstlnz.my.id/api/news?page=" + currentPage + "&perpage=" + 0x6).then(_0x2622eb => _0x2622eb.json()).then(_0x5c572f => {
    document.getElementById("newsLimimember").innerHTML = '';
    _0x5c572f.news.forEach(_0x209d5c => {
      const _0x1c6088 = document.createElement("div");
      const _0x2f5a40 = {
        'year': "numeric",
        'month': "long",
        'day': "numeric"
      };
      _0x1c6088.innerHTML = "\n                    <a href=\"dnews?id=" + _0x209d5c.id + "\"><br>\n                    <div class=\"row1\">\n                        <img src=\"https://res.cloudinary.com/haymzm4wp/image/upload/assets/jkt48" + _0x209d5c.label + "\" alt=\"Category Icon\">\n                        <p class=\"date\">" + new Date(_0x209d5c.date).toLocaleDateString("id-ID", _0x2f5a40) + "</p>\n                    </div>\n                        <h2>" + _0x209d5c.title + "</h2><br><hr>\n                    </a>\n                ";
      document.getElementById("newsLimimember").appendChild(_0x1c6088);
    });
  })["catch"](_0xde5e03 => console.error("Error fetching data:", _0xde5e03));
}
function loadNews(_0x3aaf75) {
  if (_0x3aaf75 === "prev" && currentPage > 0x1) {
    currentPage--;
  } else if (_0x3aaf75 === "next") {
    currentPage++;
  }
  fetch("https://api.crstlnz.my.id/api/news?page=" + currentPage).then(_0x544a51 => _0x544a51.json()).then(_0x3047f7 => {
    document.getElementById("newsList").innerHTML = '';
    _0x3047f7.news.forEach(_0x1ed2df => {
      const _0x524472 = document.createElement("div");
      const _0x3f3638 = {
        'year': "numeric",
        'month': "long",
        'day': "numeric"
      };
      _0x524472.innerHTML = "\n                    <a href=\"dnews?id=" + _0x1ed2df.id + "\"><br>\n                    <div class=\"row1\">\n                        <img src=\"https://res.cloudinary.com/haymzm4wp/image/upload/assets/jkt48" + _0x1ed2df.label + "\" alt=\"Category Icon\">\n                        <p class=\"date\">" + new Date(_0x1ed2df.date).toLocaleDateString("id-ID", _0x3f3638) + "</p>\n                    </div>\n                        <h2>" + _0x1ed2df.title + "</h2><br><hr>\n                    </a>\n                ";
      document.getElementById("newsList").appendChild(_0x524472);
    });
    document.getElementById("prevButton").disabled = currentPage === 0x1;
    document.getElementById("nextButton").disabled = currentPage === Math.ceil(_0x3047f7.total_count / _0x3047f7.perpage);
  })["catch"](_0x3b6ae0 => console.error("Error fetching data:", _0x3b6ae0));
}
function detailNews(_0x24f86b) {
  const _0x57338c = new URLSearchParams(window.location.search);
  const _0x3e7f7f = _0x57338c.get('id');
  let _0x3e6fd6 = 'https://api.crstlnz.my.id/api/news';
  if (_0x3e7f7f) {
    _0x3e6fd6 += '/' + _0x3e7f7f;
  }
  fetch(_0x3e6fd6).then(_0x12c6dc => _0x12c6dc.json()).then(_0xa3ae7a => {
    document.getElementById("newsDetail").innerHTML = '';
    const _0x34ca76 = 'https://jkt48.com/news/detail/id/' + _0xa3ae7a.id;
    const _0x270048 = document.createElement("div");
    _0x270048.innerHTML = "\n                <br><h1 class=\"titleup\">📢 " + _0xa3ae7a.title + "</h1><br><hr><br>\n                <div class=\"content\">" + _0xa3ae7a.content + "</div>\n                <hr>\n                <br><a href=\"" + _0x34ca76 + "\" class=\"btn\">🌐 Lihat di web JKT48</a><br><br>\n            ";
    _0x270048.querySelectorAll(".content span").forEach(_0xc6749d => {
      _0xc6749d.style.color = "white";
    });
    const _0x3e80b9 = _0x270048.querySelector(".content");
    _0x3e80b9.style.fontSize = "13px";
    _0x3e80b9.style.lineHeight = "1.5";
    _0x3e80b9.style.marginBottom = '20px';
    document.getElementById("newsDetail").appendChild(_0x270048);
  })["catch"](_0x530f90 => console.error("Error fetching data:", _0x530f90));
}
document.addEventListener("DOMContentLoaded", function () {
  limitNews();
  loadNews();
  detailNews();
  limitNewsmember();
});
