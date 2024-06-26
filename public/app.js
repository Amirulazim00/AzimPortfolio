/*const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

<!DOCTYPE html>
<html>
<head>
    <style>
        body, html {
            margin: 0;
            padding: 0;
        }

        body {
            background: #9f41ff;
            max-width: 100%;
        }

        .parallax-container {
            position: relative;
            height: 100vh;
            overflow: hidden;
        }

        .parallax-layer {
            position: absolute;
            width: 100vw;
            height: 100%;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
        }

        #layer1 {
            background-image: url("../images/P/33.png");
            background-attachment: fixed;
            transform: translateZ(-1px);
        }

        #layer2 {
            background-image: url("../images/P/32.png");
            background-attachment: fixed;
            max-width: 100vw;
            max-height: 100vw;
        }

        #layer3 {
            background-image: url("../images/P/31.png");
            background-attachment: fixed;
        }

        .bio-section {
            position: absolute;
            bottom: 0;
            width: 100vw;
            padding: 20px;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            text-align: center;
        }
    </style>
</head>
<body>
    <div class="parallax-container">
        <div class="parallax-layer" id="layer1"></div>
        <div class="parallax-layer" id="layer2"></div>
        <div class="parallax-layer" id="layer3"></div>
    </div>

    <div class="bio-section">
        <h2>My Mini Bio</h2>
        <p>My name is Amirul Azim, a passionate web developer,<br> I specialize in creating engaging and interactive websites using HTML, CSS, and JavaScript.<br> I have a deep understanding of user experience and always strive to create websites that are not only visually appealing but also user-friendly.</p>
    </div>

    <script>
        window.onscroll = function() {
            var scrollPosition = window.pageYOffset;

            document.getElementById("layer1").style.backgroundPosition = "0 " + -(scrollPosition * 2) + "px";
            document.getElementById("layer2").style.backgroundPosition = "0 " + -(scrollPosition * 0.9) + "px";
            document.getElementById("layer3").style.backgroundPosition = "0 " + (scrollPosition * 0.5) + "px";
        };
    </script>
</body>
</html>
*/