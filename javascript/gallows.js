  var draw_q = "";
  let Questions = [
      "Nikt nie chce tego mieć, ale też nikt nie chce tego przegrać. Co to jest?",
      "Są małymi elementami w codziennym użytku. Można je znaleźć w każdym wyrazie. Co to jest?",
      "Co należy do Ciebie, ale jest używane przez innych?",
      "Co jest czarno-białe i może być jednocześnie czytane?",
      "Im jest się bliżej do tego, tym to bardziej rośnie. Co to jest?",
      "Co nie ma paznokci ani kości, ale ma cztery palce i kciuka?",
      "Co zawsze jest w drodze, ale nigdy nie nadchodzi?",
      "Co jest żółte i kopie? ",
      "Nie jedzą, nie piją a rosną?",
      "Na basenie czy nad morzem, ubiór ten przydać się może. Co to jest?",
      "Letnie buty z paseczkami, co się nie lubią ze skarpetkami. Co to jest?",
      "Kiedy słońce w oczy świeci noszą je dorośli i dzieci. Co to jest?",
      "Świeci w dzień na niebie i ogrzewa Ciebie. Co to jest?",
      "W ciepłe dni dla ochłody chętnie zjemy...",
      "Na dachu kurnika kogut zniósł jajko. Na którą stronę ono spadnie?",
      "Jak witają się papieże?",
      "Kiedy jesteś w domu bez głowy?",
      "......plecień, bo przeplata trochę zimy, trochę lata.",
      "W ....... jak w garncu.",
      "W ........ liście opadają, a ludzie znicze na grobach stawiają.",
      "Jeśli w ______ często dmucha, w marcu i kwietniu będzie plucha",
      "Gdy w ______ świeci Słońce, to plaże są gorące.",
      "W ______ jak w gaju",
      "Gdy w ______ deszcz leje, złe robi nadzieje.",
      "Gdy ______ ciepło trzyma, zwykle mroźna bywa zima.",
      "______, ten spoczynku nie chce dać, bo każe orać i siać.",
      "_____ daje dni gorące, kosa brzęczy już na łące.",
      "______ chodzi po rosie, zbiera grzyby we wrzosie.",
      "W .......... śnieg i mróz stały, w lecie będą upały.",
      "Apetyt rośnie w miare.....",






  ];

  var draw_A = "";
  let Answers = [
      "rozprawa sądowa",
      "samogłoski",
      "imie",
      "gazeta",
      "Dziura",
      "Rękawiczki",
      "Przyszłość",
      "Koparka ",
      "Ceny",
      "strój kąpielowy",
      "Sandały",
      "okulary przeciwsłoneczne",
      "słońce",
      "zimne lody",
      "Żadne",
      "nie witają się",
      "Kiedy wyglądasz za okno",
      "kwiecień",
      "W marcu",
      "w listopadzie",
      "grudniu",
      "lipcu",
      "Maju",
      "Styczniu",
      "W Październiku",
      "Sierpień",
      "Czerwiec",
      "Wrzesień",
      "W Lutym",
      "Jedzenia",






  ];


  function losowanie(draw) {

      for (let i = 0; i <= Questions.length; i++) {
          draw = Math.floor(Math.random() * Questions.length); //Draw to Questions//
          draw = Math.floor(Math.random() * Answers.length); //Draw to Answers//



      }

      draw_A += Answers[draw];
      draw_q += Questions[draw];


  }


  losowanie();






  let board_q = draw_q;
  board_q = draw_q.toUpperCase();





  var password = draw_A;
  password = password.toUpperCase();


  let ile_skuch = 0;
  let lenth = password.length;




  let yes = new Audio("music/yes.wav");
  let no = new Audio("music/no.wav");
  let defeat = new Audio("music/defeat.wav");
  let win = new Audio("music/win-sound.wav");


  let password_1 = "";

  for (i = 0; i < lenth; i++) {
      if (password.charAt(i) == " ") password_1 += " ";
      else password_1 += "-";

  }

  function unsubscribe_password() {
      document.getElementById("board").innerHTML = password_1;
      document.getElementById("board-q").innerHTML = board_q;
  }

  window.onload = start;

  let letters = ["A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł", "M", "N", "Ń", "O", "Ó", "P", "Q", "R", "S", "Ś", "T", "U", "V", "W", "X", "Y", "Z", "Ź", "Ż"];


  function start() {
      let tresc_diva = "";

      for (i = 0; i < 35; i++) {
          let element = "lit" + i;
          tresc_diva += '<div class="letter" onclick="verification(' + i + ')" id="' + element + '">' + letters[i] + '</div>';
          if ((i + 1) % 7 == 0) tresc_diva += '<div style="clear:both;"></div>';
      }
      document.getElementById("alphabet").innerHTML = tresc_diva;
      unsubscribe_password();


  }

  String.prototype.set_char = function(place, sign) {
      if (place > this.length - 1) return this.toString();
      else return this.substr(0, place) + sign + this.substr(place + 1);
  }

  function verification(nr) {

      var hit = false;
      for (i = 0; i < lenth; i++) {
          if (password.charAt(i) == letters[nr]) {
              password_1 = password_1.set_char(i, letters[nr]);
              hit = true;
          }
      }

      if (hit == true) {
          yes.play();
          let element = "lit" + nr;
          document.getElementById(element).style.background = "#003300";
          document.getElementById(element).style.color = "#00C000";
          document.getElementById(element).style.border = "3px solid #00C000";
          document.getElementById(element).style.cursor = "default";

          unsubscribe_password();
      } else {
          no.play();
          let element = "lit" + nr;
          document.getElementById(element).style.background = "#330000";
          document.getElementById(element).style.color = "#C00000";
          document.getElementById(element).style.border = "3px solid #C00000";
          document.getElementById(element).style.cursor = "default";
          document.getElementById(element).setAttribute("onclick", ";");

          //skucha

          ile_skuch++;
          var screen = "img/s" + ile_skuch + ".jpg";
          document.getElementById("gallows").innerHTML = '<img src="' + screen + '" alt=""/>';
      }

      //win

      if (password == password_1) {
          win.play();
          document.getElementById("alphabet").innerHTML = "ZWYCIĘSTWO!  prawidłowe hasło: " + password + '<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

      }

      //los
      if (ile_skuch >= 9) {
          defeat.play();
          document.getElementById("alphabet").innerHTML = "PORAŻKA! prawidłowe hasło to: " + password + '<br><br><span class="reset" onclick="location.reload()">JESZCZE RAZ?</span>';

      }

  }