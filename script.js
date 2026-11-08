const container = document.querySelector(".container");

        const fragment = document.createDocumentFragment();

        for (let i = 0; i < 800; i++) {

            const div = document.createElement("div");

            div.classList.add("square");

            div.addEventListener("mouseenter", (e) => {

                const red = Math.floor(Math.random() * 256);
                const green = Math.floor(Math.random() * 256);
                const blue = Math.floor(Math.random() * 256);

                e.target.style.backgroundColor =
                    `rgb(${red}, ${green}, ${blue})`;

            });

            div.addEventListener("mouseleave", (e) => {

                e.target.style.backgroundColor = "gray";

            });

            fragment.appendChild(div);
        }

        container.appendChild(fragment);
 