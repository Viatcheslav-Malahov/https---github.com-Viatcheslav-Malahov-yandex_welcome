

<template>
  <div>
    <div><NavBar /></div>
    <div class="p-10">
      С помощью JS мы может создать на странице интерактив в виде игры
    </div>
    <div class="p-10 m-0 h-[50vh] flex self-center">
      <main class="game">
        <NuxtImg
          id="dino"
          class="dino"
          src="../public/images/dino.png"
          alt="dino"
        />
        <NuxtImg
          id="cactus"
          class="cactus"
          src="../public/images/cactus.png"
          alt="cactus"
        />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const dino = document.querySelector("#dino");
    const cactus = document.querySelector("#cactus");

    document.addEventListener("keydown", (event) => {
      jump(event);
      move();
    });

    function jump(event) {
      if (!(event.code === "Space")) {
        return;
      }
      if (!dino.classList.contains("jump")) {
        dino.classList.add("jump");
        setTimeout(function () {
          dino.classList.remove("jump");
        }, 2000);
      }
    }

    function move() {
      if (!cactus.classList.contains("move")) {
        cactus.classList.add("move");
      }
    }

    function isCrashed() {
      let dinoPosition = dino.getBoundingClientRect();
      let cactusPosition = cactus.getBoundingClientRect();

      return (
        dinoPosition.right > cactusPosition.left &&
        dinoPosition.left < cactusPosition.right &&
        dinoPosition.bottom > cactusPosition.top
      );
    }

    setInterval(() => {
      if (isCrashed()) {
        alert("Game Over!");
      }
    });
  },
};
</script>

<style>
.game {
  width: 100vw;
  border-bottom: 1px solid black;
  position: relative;
}

/* sticking the dino and the cactus to the floor */
.dino,
.cactus {
  position: absolute;
  bottom: 0;
}

.dino {
  left: 50px;
}

.cactus {
  right: 0;
  height: 50px;
}

.jump {
  animation: dino-jump 2s;
}

.move {
  animation: cactus-move 6s infinite;
}

@keyframes cactus-move {
  0% {
    right: 0;
  }

  100% {
    right: 100%;
  }
}

@keyframes dino-jump {
  0% {
    margin-bottom: 0;
  }

  50% {
    margin-bottom: 150px;
  }

  100% {
    margin-bottom: 0;
  }
}
</style>
