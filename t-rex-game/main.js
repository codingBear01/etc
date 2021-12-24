// JS로 게임 제작 시 필수 3가지
// 게임 내 등장하는 개체 그리기

//캐릭터 그리기
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// html상에 canvas 영역 설정
canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

var img2 = new Image();
img2.src = "kingdamgom.png";

// 캐릭터 정보(높이, 폭, 색깔 등)
var dino = {
  x: 10,
  y: 200,
  width: 50,
  height: 50,
  draw() {
    ctx.fillStyle = "green";
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img2, this.x, this.y);
  },
};

var img1 = new Image();
img1.src = "angryangmond.jpg";

// 장애물 속성 설정
class Cactus {
  constructor() {
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
  draw() {
    ctx.fillStyle = "red";
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(img1, this.x, this.y);
  }
}

var timer = 0;
var cactus여러개 = [];
var 점프timer = 0;
var animation;

// 코드를 1초에 60번 실행 애니메이션
function 프레임마다실행() {
  animation = requestAnimationFrame(프레임마다실행);
  timer++;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 60프레임마다 장애물 1개 그리기
  if (timer % 200 === 0) {
    var cactus = new Cactus();
    cactus여러개.push(cactus);
  }

  // 장애물 반복문
  cactus여러개.forEach((a, i, o) => {
    //x좌표가 0미만이면 제거
    if (a.x < 0) {
      o.splice(i, 1);
    }
    a.x--;

    충돌하냐(dino, a);

    a.draw();
  });

  if (점프중 == true) {
    dino.y--;
    점프timer++;
  }

  if (점프중 == false) {
    if (dino.y < 200) {
      dino.y++;
    }
  }

  if (점프timer > 100) {
    점프중 = false;
    점프timer = 0;
  }

  dino.draw();
}

프레임마다실행();

//충돌확인
function 충돌하냐(dino, cactus) {
  var x축차이 = cactus.x - (dino.x + dino.width);
  var y축차이 = cactus.y - (dino.y + dino.height);
  if (x축차이 < 0 && y축차이 < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    cancelAnimationFrame(animation);
  }
}

var 점프중 = false;
document.addEventListener("keydown", function (e) {
  if (e.code === "Space") {
    점프중 = true;
  }
});
