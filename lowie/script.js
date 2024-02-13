  $(".container")
      .mouseenter(function () {
          $(".card").stop().animate(
              {
                  top: "-90px",
              },
              "slow"
          );
      })
      .mouseleave(function () {
          $(".card").stop().animate(
              {
                  top: 0,
              },
              "slow"
          );
      });

      window.addEventListener('load', () => {
        var audio = document.getElementById("song");
        audio.loop = true; 
        audio.play();
    
        window.addEventListener('beforeunload', () => {
            audio.pause(); 
        });
    });